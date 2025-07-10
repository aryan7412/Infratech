import Footer from "@/components/Footer";
import Header from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#F6F7F9]">
            <Header />
      <div className="flex-1 wrapper bg-[#F6F7F9] rounded-t-3xl overflow-hidden -mt-14">
        <main>
          {children}
        </main>
      </div>
      <Footer />

      {/* 🔽 Sticky Bottom Blur */}
      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-10 z-[999] bg-gradient-to-t from-white via-white/90 to-transparent backdrop-blur-3xl backdrop-opacity-100 fade-mask-t" />
    </div>
  );
}
