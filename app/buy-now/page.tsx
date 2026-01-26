import Link from "next/link";
import { proximaNovaLight, proximaNovaMedium, proximaNovaRegular, proximaNovaSemibold } from "@/app/fonts";

export default function BuyNowPage() {
    const memberships = [
        {
            name: "4 Class Membership",
            price: "$87.00",
            subtitle: "4 classes / 30 days",
            details: [
                "Auto-renews every 30 days",
                "Classes do not roll over month-to-month",
                "No guest usage",
                "Membership is active upon first check-in",
            ],
        },
        {
            name: "8 Class Membership",
            price: "$167.00",
            subtitle: "8 classes / 30 days",
            details: [
                "Auto-renews every 30 days",
                "Classes do not roll over month-to-month",
                "No guest usage",
                "Membership is active upon first check-in",
            ],
        },
        {
            name: "Unlimited Membership",
            price: "$397.00",
            subtitle: "Unlimited classes / 30 days",
            details: [
                "Auto-renews every 30 days",
                "Book up to 30 days in advance",
                "No guest usage",
                "Membership is active upon first check-in",
            ],
        },
    ] as const;

    const classCredits = [
        {
            name: "Single Class",
            price: "$27.00",
            subtitle: "1 class",
            details: ["Expires 180 days from purchase", "Guest allowance allowed"],
        },
        {
            name: "3 Classes",
            price: "$69.00",
            subtitle: "3 classes ($23 / class)",
            details: ["Expires 180 days from purchase"],
        },
        {
            name: "4 Classes",
            price: "$89.00",
            subtitle: "4 classes ($22.25 / class)",
            details: ["Expires 180 days from purchase"],
        },
        {
            name: "5 Classes",
            price: "$109.00",
            subtitle: "5 classes ($21.80 / class)",
            details: ["Expires 180 days from purchase"],
        },
    ] as const;

    return (
        <div className="min-h-screen bg-zinc-50 px-6 py-10 sm:px-10">
            <div className="mx-auto w-full max-w-5xl">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h1 className={`${proximaNovaSemibold.className} uppercase text-3xl tracking-tight text-zinc-900`}>
                            Buy now
                        </h1>
                        <p className={`${proximaNovaLight.className} mt-2 max-w-2xl text-sm tracking-wide text-zinc-700`}>
                            Choose a membership (auto-renewing) or class credits (one-time).
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/select-studio"
                            className={`${proximaNovaRegular.className} bg-[#DFFF00] px-4 py-2 text-sm uppercase tracking-wide text-black hover:bg-[#B0DB00]`}
                        >
                            Book a class
                        </Link>
                        <Link
                            href="/dashboard"
                            className={`${proximaNovaRegular.className} bg-black px-4 py-2 text-sm uppercase tracking-wide text-white hover:opacity-90`}
                        >
                            View my account
                        </Link>
                    </div>
                </div>

                <div className="mt-8 cursor-pointer rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:ring-[#DFFF00] active:ring-[#DFFF00]">
                    <h2 className={`${proximaNovaRegular.className} uppercase tracking-wide text-sm text-zinc-900`}>
                        New client package
                    </h2>
                    <p className={`${proximaNovaSemibold.className} mt-2 text-lg tracking-tight text-zinc-900`}>
                        $54 for 3 classes
                    </p>
                    <p className={`${proximaNovaLight.className} mt-4 text-sm text-zinc-700`}>The new client package is offered <span>one time only</span>, and only after you’ve used the{" "}
                        <span>3 free credits</span> given to new clients.</p>
                </div>

                <section className="mt-10">
                    <div className="flex items-end justify-between gap-6">
                        <h2 className={`${proximaNovaSemibold.className} text-xl tracking-tight text-zinc-900`}>
                            Memberships
                        </h2>
                        <p className={`${proximaNovaRegular.className} text-xs uppercase tracking-widest text-zinc-500`}>
                            Auto renewal
                        </p>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {memberships.map((m) => (
                            <div
                                key={m.name}
                                className="cursor-pointer rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:ring-[#DFFF00] active:ring-[#DFFF00]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <p className={`${proximaNovaMedium.className} text-base tracking-tight text-zinc-900`}>
                                            {m.name}
                                        </p>
                                        <p className={`${proximaNovaLight.className} mt-1 text-sm text-zinc-600`}>{m.subtitle}</p>
                                    </div>
                                    <p className={`${proximaNovaSemibold.className} whitespace-nowrap text-lg text-zinc-900`}>
                                        {m.price}
                                    </p>
                                </div>

                                <ul className={`${proximaNovaLight.className} mt-4 list-disc space-y-1 pl-5 text-pretty text-sm text-zinc-700`}>
                                    {m.details.map((d) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-10">
                    <h2 className={`${proximaNovaSemibold.className} text-xl tracking-tight text-zinc-900`}>
                        Class Credits
                    </h2>
                    <p className={`${proximaNovaLight.className} mt-2 text-sm text-zinc-600`}>
                        One-time purchases. Credits expire 180 days from purchase (unless noted).
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {classCredits.map((c) => (
                            <div
                                key={c.name}
                                className="cursor-pointer rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 transition-all duration-200 ease-out hover:-translate-y-1 hover:ring-[#DFFF00] active:ring-[#DFFF00]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <p className={`${proximaNovaMedium.className} text-base tracking-tight text-zinc-900`}>
                                            {c.name}
                                        </p>
                                        <p className={`${proximaNovaLight.className} mt-1 text-sm text-zinc-600`}>{c.subtitle}</p>
                                    </div>
                                    <p className={`${proximaNovaSemibold.className} whitespace-nowrap text-lg text-zinc-900`}>
                                        {c.price}
                                    </p>
                                </div>

                                <ul className={`${proximaNovaLight.className} mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700`}>
                                    {c.details.map((d) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
