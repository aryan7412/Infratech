import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='flex h-screen flex-col bg-[#F6F7F9]'>
        <Header />
        <main className='flex-1 wrapper bg-[#F6F7F9]'>{children}</main>
        <Footer/>
      </div>
    );
  }