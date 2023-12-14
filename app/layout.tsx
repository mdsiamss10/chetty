import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AuthSessionProvider from "./AuthSessionProvider";
import AnimatedBackground from "./components/AnimatedBackground";
import "./css/ani_background.css";
import "./css/globals.css";

const monsterrat = Montserrat({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chetty",
  description: "Chetty site homepage",
  verification: {
    google: "dA2v5Afx8Skw8exsGXCIR3fuup58BzGBa2cd3GB9_DY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monsterrat.className}>
        <AnimatedBackground />
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
