import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

function ensureSymlink({ linkPath, targetPath }) {
  try {
    const stat = fs.lstatSync(linkPath);
    if (stat.isSymbolicLink() || stat.isDirectory()) return;
  } catch {
    // Does not exist; we'll create it below.
  }

  fs.mkdirSync(path.dirname(linkPath), { recursive: true });

  // Use a relative symlink so it stays valid if the repo is moved.
  const relativeTarget = path.relative(path.dirname(linkPath), targetPath);
  fs.symlinkSync(relativeTarget, linkPath, "dir");
}

const clientPackageJsonPath = require.resolve("@prisma/client/package.json");
const clientDir = path.dirname(clientPackageJsonPath);

// Prisma generates to a sibling `.prisma/` directory next to `@prisma/client`.
const siblingPrismaDir = path.join(path.dirname(clientDir), ".prisma");

if (!fs.existsSync(siblingPrismaDir)) {
  // `prisma generate` should have created this. Keep install from hard-failing with a cryptic error.
  // eslint-disable-next-line no-console
  console.warn(
    `[prisma-postinstall] Expected ${siblingPrismaDir} to exist. Run \`pnpm prisma generate\` and re-install if Prisma Client is missing.`,
  );
  process.exit(0);
}

ensureSymlink({
  linkPath: path.join(clientDir, ".prisma"),
  targetPath: siblingPrismaDir,
});

