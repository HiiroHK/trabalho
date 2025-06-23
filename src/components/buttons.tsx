import { Button } from "./ui/button";

export function Buttons() {
  return (
    <div className="bg-gray-200 rounded-md p-1 flex gap-2">
      <a href="/">
        <Button className="px-3 py-1.5">O que é RSA?</Button>
      </a>
      <a href="/Funcionamento">
        <Button className="px-3 py-1.5">Como Funciona</Button>
      </a>
      <a href="https://anycript.com/crypto/rsa">
        <Button className="px-3 py-1.5">Demonstração</Button>
      </a>
      <a href="/Aplicação">
        <Button className="px-3 py-1.5">Aplicações</Button>
      </a>
    </div>
  );
}
