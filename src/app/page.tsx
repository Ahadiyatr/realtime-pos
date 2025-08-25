import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#FF6B35] via-[#F7B267] to-[#6A4C93]">
      <div className="bg-[#FDF6EC]/90 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl p-10 flex flex-col items-center space-y-8 max-w-lg w-full mx-4 transition-transform hover:scale-[1.01]">
        {/* Heading */}
        <h1 className="text-4xl font-heading font-bold text-[#3B2C35] dark:text-[#FDF6EC] text-center leading-snug">
          Welcome <br />
          <span className="text-[#FF6B35]">Ahadiyat Rakhman</span>
        </h1>

        {/* Subheading */}
        <p className="text-[#6A4C93] dark:text-gray-400 text-center font-medium">
          Selamat datang di{" "}
          <span className="font-semibold">Dashboard Senja Kala Coffee</span>{" "}
          ☕✨
        </p>

        {/* Button */}
        <Link href="/admin" className="w-full">
          <Button className="w-full bg-[#FF6B35] hover:bg-[#F7B267] text-white text-lg py-6 rounded-xl shadow-md transition-transform hover:scale-[1.02]">
            Access Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
