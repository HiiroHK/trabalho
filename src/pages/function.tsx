import { Introduction } from "@/components/introduction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Calculator } from "lucide-react";

export function Funcionamento() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Introduction />
      <section className="container mx-auto mt-10 px-4 pb-6">
        <div className="flex flex-col justify-center items-center gap-10">
          <Card>
            <CardHeader className="flex">
              <Calculator className="text-blue-500" />
              <CardTitle className="text-[18px]">
                <h1>Como o RSA Funciona - Passo a Passo</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Dialog>
                <DialogTrigger>
                  <div className="flex p-4 gap-2 items-center border-l-4 border-blue-600 bg-gradient-to-bl from-slate-50 via-blue-50 to-indigo-100 rounded-lg">
                    <h1 className="bg-blue-600 rounded-full text-white w-8 h-8 flex items-center justify-center">
                      1
                    </h1>
                    <div className="grid justify-start">
                      <h1>Geração das chaves:</h1>
                      <p>
                        Escolha dois números primos grandes (p e q). Calcule n =
                        p × q
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <h4>
                    A criptografia RSA começa escolhendo dois primos grandes, 𝑝
                    e 𝑞 . Calcula-se 𝑛 = 𝑝 ⋅ 𝑞 e a totiente 𝜙 ( 𝑛 ) = ( 𝑝 − 1 )
                    ( 𝑞 − 1 ). Escolhe-se um expoente público 𝑒 tal que gcd ⁡ (
                    𝑒 , 𝜙 ( 𝑛 ) ) = 1 gcd(e,ϕ(n))=1. Por fim, calcula-se 𝑑, o
                    inverso modular de 𝑒, gerando a chave privada.
                  </h4>
                  <DialogFooter>
                    <DialogClose>
                      <button className="border p-2 rounded-md">fechar</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="flex p-4 gap-2 items-center border-l-4 border-green-600 bg-gradient-to-bl from-lime-50 via-green-50 to-emerald-100 rounded-lg">
                    <h1 className="bg-green-600 rounded-full text-white w-8 h-8 flex items-center justify-center">
                      2
                    </h1>
                    <div className="grid justify-start">
                      <h1>Função de Euler:</h1>
                      <p>Calcule φ(n) = (p-1) × (q-1)</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <h4>
                    A função de Euler 𝜙 ( 𝑛 ) ϕ(n) conta quantos números
                    inteiros positivos menores que 𝑛 são coprimos com ele. Se 𝑛
                    é primo, então 𝜙 ( 𝑛 ) = 𝑛 − 1 ϕ(n)=n−1, pois todos os
                    menores que ele são coprimos. Se 𝑛 = 𝑝 ⋅ 𝑞 com 𝑝 e 𝑞 primos,
                    então 𝜙 ( 𝑛 ) = ( 𝑝 − 1 ) ( 𝑞 − 1 ). Ela é essencial na
                    criptografia RSA para calcular a chave privada com
                    segurança.
                  </h4>
                  <DialogFooter>
                    <DialogClose>
                      <button className="border p-2 rounded-md">fechar</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="flex p-4 gap-2 items-center border-l-4 border-orange-600 bg-gradient-to-bl from-yellow-50 via-orange-50 to-amber-100 rounded-lg">
                    <h1 className="bg-orange-600 rounded-full text-white w-8 h-8 flex items-center justify-center">
                      3
                    </h1>
                    <div className="grid justify-start">
                      <h1>Chave Pública:</h1>
                      <p>
                        Escolha e (geralmente 65537) e forme a chave pública (e,
                        n)
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <DialogFooter>
                    <h4>
                      Na criptografia RSA, a chave pública é composta por dois
                      números: n, o produto dos primos secretos 𝑝 ⋅ 𝑞 e, o
                      expoente público escolhido (como 3, 17 ou 65537) Essa
                      chave é usada por qualquer um que queira enviar mensagens
                      seguras pra você — eles usam 𝑒 e 𝑛 para criptografar os
                      dados. Mas só você, com a chave privada, pode decifrá-los.{" "}
                    </h4>
                    <DialogClose>
                      <button className="border p-2 rounded-md">fechar</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <div className="flex p-4 gap-2 items-center border-l-4 border-red-600 bg-gradient-to-bl from-orange-50 via-red-50 to-red-100 rounded-lg">
                    <h1 className="bg-red-600 rounded-full text-white w-8 h-8 flex items-center justify-center">
                      4
                    </h1>
                    <div className="grid justify-start">
                      <h1>Chave Privada:</h1>
                      <p>Calcule d como o inverso modular de e mod φ(n)</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                  </DialogHeader>
                  <h4>
                    Na criptografia RSA, a chave privada é o número 𝑑, calculado
                    como o inverso modular de 𝑒 em relação a 𝜙 ( 𝑛 ) , ou seja:
                    𝑑 ⋅ 𝑒 ≡ 1 m o d     𝜙 ( 𝑛 ) Ela é usada exclusivamente por
                    quem gerou as chaves — no caso, você — para descriptografar
                    mensagens ou assinar digitalmente algo. Enquanto a chave
                    pública tranca, a chave privada destranca, revelando a
                    verdade escondida sob o manto da matemática.
                  </h4>
                  <DialogFooter>
                    <DialogClose>
                      <button className="border p-2 rounded-md">fechar</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Card className="bg-gray-100">
                <CardHeader>
                  <CardTitle>
                    Fórmulas de Criptografia e Descriptografia:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Criptografia:</strong> C = M^e mod n
                  </p>
                  <p>
                    <strong>Descriptografia:</strong> M = C^d mod n
                  </p>
                  <p>
                    Onde M é a mensagem, C é o texto cifrado, e e d são as
                    chaves pública e privada.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
