import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const alata = Alata({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}: { children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={alata.className}
            >
                <NavigationMenu className="py-4 pl-8">
                    <NavigationMenuList>
                        {[
                            { name: "Home", path: "/" },
                            { name: "Quiz", path: "/quiz" },
                            { name: "Profile", path: "/profile" }
                            
                        ].map(({ name, path }) => (
                                <NavigationMenuItem key={name}>
                                    <Link href={path} passHref>
                                    <p className=" text-[#26235E] text-3xl font-alata opacity-90 px-8 py-2 bg-white rounded-full hover:bg-[#e8e8e8] transition duration-700">
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
