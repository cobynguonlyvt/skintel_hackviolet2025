import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NavigationMenu className="py-4">
                    <NavigationMenuList>
                        {[
                            { name: "Home", path: "/" },
                            { name: "Quiz", path: "/quiz" },
                            { name: "Profile", path: "/profile" }
                        ].map(({ name, path }) => (
                                <NavigationMenuItem key={name}>
                                    <Link href={path} passHref>
                                        <p className="text-[#26235E] text-3xl font-['Timmana-Regular'] opacity-90 px-8">
                                            {name}
                                        </p>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                    </NavigationMenuList>        </NavigationMenu>

                {children}
            </body>
        </html>
    );
}
