import { Providers } from "@/contexts/Providers";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";

export default function Layout({ children }: any) {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const isDarkMode = true;
  return (
    <div className={isDarkMode ? "dark " : "dark"}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&family=Roboto:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <Providers>
        <main className=" max-w-[100vw] overflow-x-hidden">
          <div className="">
            <div className="border-b border-2 border-black px-20 w-full">
              <div className="p-0 z-30">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </main>
        <Analytics />
      </Providers>
    </div>
  );
}
