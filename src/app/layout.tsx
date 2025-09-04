import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ginger Exporter | PT. Princess Jaya Abadi Indonesia",
    description:
        "PT. Princess Jaya Abadi is an Indonesian exporter of premium ginger products: fresh ginger, dried ginger, and ginger powder. Consistent quality, sustainable sourcing, and trusted global logistics from Indonesia.",
    keywords: [
        "ginger exporter",
        "ginger supplier Indonesia",
        "fresh ginger bulk",
        "dried ginger",
        "ginger powder",
        "spice ginger export",
        "herbal ginger Indonesia",
        "bulk ginger packaging",
        "Lampung ginger exporter",
        "Indonesia ginger byproduct export",
        "organic ginger supplier",
        "ginger for food industry",
        "ginger for beverages",
        "ginger powder seasoning",
        "trusted ginger manufacturer",
        "ginger logistics"
    ],
    metadataBase: new URL("https://princessjayaabadi.com"),
    alternates: {
        canonical: "/",
        languages: {
            en: "/en",
            id: "/id",
        },
    },
    openGraph: {
        title: "Premium Ginger Products | PT. Princess Jaya Abadi",
        description:
            "Export-quality ginger from Indonesia: fresh ginger, dried ginger, and ginger powder. Sustainable sourcing, consistent specs, and reliable global shipping.",
        url: "https://princessjayaabadi.com",
        siteName: "Princess Jaya Abadi",
        images: [
            {
                url: "/og-thumbnail.jpg",
                width: 1200,
                height: 630,
                alt: "PT. Princess Jaya Abadi — Ginger Exporter",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Buy Premium Ginger from Indonesia | Princess Jaya Abadi",
        description:
            "Your trusted partner for fresh ginger, dried ginger, and ginger powder. Verified quality and export-ready packaging.",
        images: ["/og-thumbnail.jpg"],
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
