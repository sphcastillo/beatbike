"use client";
import { proximaNovaMedium, proximaNovaRegular, proximaNovaLight } from "@/app/fonts";
import { useRouter } from "next/navigation";

const LOCATIONS = [
  { name: "Tarzana", slug: "tarzana" },
  { name: "Huntington Beach", slug: "huntington-beach" },
];

export default function LocationSwitcher({ currentSlug }: { currentSlug: string }) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <label className={`${proximaNovaRegular.className} text-md text-gray-700`}>Location</label>
      <select
        className="rounded-md border px-3 py-2 text-sm"
        value={currentSlug}
        onChange={(e) => router.push(`/booking/${e.target.value}`)}
      >
        {LOCATIONS.map((loc) => (
          <option key={loc.slug} value={loc.slug}>
            {loc.name}
          </option>
        ))}
      </select>
    </div>
  );
}
