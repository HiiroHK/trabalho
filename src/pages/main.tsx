import { Introduction } from "@/components/introduction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export function Main() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Introduction />
      <section className="container mx-auto mt-10 px-4 pb-6">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <Card className="border border-blue-400 flex flex-col gap-4 bg-white/70">
                <CardHeader className="flex gap-2 items-center">
                  <Shield className="text-blue-500" />
                  <CardTitle className="text-[20px] font-semibold">
                    O que é a Criptografia RSA?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-[18px]">
                  <p>
                    RSA (Rivest-Shamir-Adleman) é um algoritmo de criptografia
                    assimétrica criado em 1977. É considerado um dos pilares da
                    segurança digital moderna e é amplamente usado para proteger
                    comunicações na internet.
                  </p>
                  <p className="font-bold text-[20px]">
                    Características principais:
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <strong>Criptografia Assimétrica:</strong> Usa duas chaves
                      diferentes - uma pública e uma privada
                    </li>
                    <li>
                      <strong>Segurança Matemática:</strong> Baseado na
                      dificuldade de fatorar números muito grandes
                    </li>
                    <li>
                      <strong>Autenticação:</strong> Permite verificar a
                      identidade do remetente
                    </li>
                    <li>
                      <strong>Não-repúdio:</strong> O remetente não pode negar
                      ter enviado a mensagem
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4">
              <Card className="bg-green-50 border border-green-500">
                <CardHeader>
                  <CardTitle className="text-[20px] text-green-700">
                    Chave Pública
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600">
                    Pode ser compartilhada livremente. Usada para{" "}
                    <strong>criptografar </strong>
                    mensagens que só podem ser descriptografadas pela chave
                    privada correspondente.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-red-50 border border-red-500">
                <CardHeader>
                  <CardTitle className="text-[20px] text-red-700">
                    Chave Privada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600">
                    Mantida em segredo absoluto. Usada para{" "}
                    <strong>descriptografar </strong>
                    mensagens criptografadas com a chave pública correspondente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
