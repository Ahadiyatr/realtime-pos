import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Coffee } from "lucide-react";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-svh flex flex-col items-center justify-center p-6 md:p-10 bg-gradient-to-br from-[#FF6B35] via-[#F7B267] to-[#6A4C93]">
      {/* Dark mode toggle */}
      <div className="absolute top-4 right-4">
        <DarkmodeToggle />
      </div>

      {/* Card container */}
      <div className="flex flex-col gap-8 w-full max-w-sm bg-[#FDF6EC]/90 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 transition-transform hover:scale-[1.01]">
        {/* Branding */}
        <div className="flex items-center gap-3 self-center font-heading text-lg font-semibold text-[#3B2C35] dark:text-[#FDF6EC]">
          <div className="bg-[#FF6B35] flex p-3 items-center justify-center rounded-xl shadow-md">
            <Coffee className="size-5 text-white" />
          </div>
          <span className="tracking-wider">SENJA KALA</span>
        </div>

        {/* Children (form login) */}
        <div className="space-y-6">{children}</div>

        {/* Footer */}
        <p className="text-xs text-center text-[#3B2C35]/70 dark:text-gray-400">
          © {new Date().getFullYear()} Senja Kala. All rights reserved.
        </p>
      </div>
    </div>
  );
}
