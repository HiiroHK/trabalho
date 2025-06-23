import { Lock } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container flex mx-auto py-6 px-4 gap-3">
        <Lock className="bg-blue-600 text-white p-1.5 size-10 rounded-md" />
        <h1 className="font-bold text-2xl">Criptografia RSA</h1>
      </div>
    </header>
  );
}
