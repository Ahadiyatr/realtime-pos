import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-col items-center space-y-6 max-w-lg w-full mx-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Welcome <br /> <span className="text-teal-600">Ahadiyat Rakhman</span>
        </h1>
        <p className="text-gray-600 text-center">
          Selamat datang di Dashboard Senja Kala Coffee 🎉
        </p>
        <Link href="/admin" className="w-full">
          <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg py-6 transition-transform transform hover:scale-105 rounded-xl shadow-md">
            Access Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
