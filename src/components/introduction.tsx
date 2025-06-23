import { ArrowRight, Key } from "lucide-react";
import { Header } from "./header";
import { Buttons } from "@/components/buttons";

export function Introduction() {
  return (
    <div>
      <Header />
      <section className="container mx-auto mt-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-5xl font-bold">
              <h2>
                Entenda a{" "}
                <span className="text-blue-600">Criptografia RSA</span>
              </h2>
            </div>

            <div className="mx-96 flex text-center font-semibold text-[18px]">
              <p>
                O algoritmo que protege suas transações bancárias, mensagens
                privadas e navegação na internet. Descubra como funciona a
                matemática por trás da segurança digital moderna.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-2">
              <Key className="border rounded-full size-28 p-2 bg-green-100 border-green-300 text-green-700" />
              <p className="text-[18px] font-semibold">Chave Pública</p>
            </div>
            <ArrowRight className="size-14 text-gray-500" />
            <h1 className="bg-blue-100 border border-blue-500 text-blue-500 p-6 rounded-2xl">
              Mensagem Criptografada
            </h1>
            <ArrowRight className="size-14 text-gray-500" />
            <div className="flex flex-col gap-2">
              <Key className="border rounded-full size-28 p-2 bg-red-100 border-red-300 text-red-700" />
              <p className="text-[18px] font-semibold">Chave Privada</p>
            </div>
          </div>
          <Buttons />
        </div>
      </section>
    </div>
  );
}
