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
      <label className={`${proximaNovaRegular.className} text-md text-gray-700`}>Beatbike Studio</label>
      <select
        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-[#B0DB00]"
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
