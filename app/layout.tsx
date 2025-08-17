import { Outfit, Ovo} from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio - GreatStack",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        
        {children}
      </body>
    </html>
  );
}
