import { Introduction } from "@/components/introduction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreditCard, Globe, Shield } from "lucide-react";

export function Aplicação() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Introduction />
      <section className="container mx-auto mt-10 px-4 pb-6">
        <div className="flex flex-col justify-center items-center gap-10">
          <Card className="p-2">
            <CardHeader className="flex items-center">
              <Globe className="text-blue-700" />
              <CardTitle className="text-[20px]">
                Aplicações do RSA no Mundo Real
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-3">
              <Dialog>
                <DialogTrigger>
                  <Card className="p-2 bg-blue-100 border border-blue-100">
                    <CardHeader className="grid justify-center">
                      <Globe className="mx-auto w-12 h-12 text-blue-600" />
                      <CardTitle className="text-blue-600">HTTPS/SSL</CardTitle>
                    </CardHeader>
                    <p className="text-blue-500">
                      Protege suas conexões com sites seguros, garantindo que os
                      dados transmitidos não possam ser interceptados.
                    </p>
                  </Card>
                </DialogTrigger>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Card className="p-2 bg-green-100 border border-green-100">
                    <CardHeader className="grid justify-center">
                      <CreditCard className="mx-auto w-12 h-12 text-green-600" />
                      <CardTitle className="text-green-600">
                        Transações Bancárias
                      </CardTitle>
                    </CardHeader>
                    <p className="text-green-500">
                      Protege transferências bancárias e pagamentos online,
                      garantindo a segurança de suas transações financeiras.
                    </p>
                  </Card>
                </DialogTrigger>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Card className="p-2 bg-purple-100 border border-purple-100">
                    <CardHeader className="grid justify-center">
                      <Shield className="mx-auto w-12 h-12 text-purple-600" />
                      <CardTitle className="text-purple-600">
                        Assinatura Digital
                      </CardTitle>
                    </CardHeader>
                    <p className="text-purple-500">
                      Permite verificar a autenticidade de documentos e garantir
                      que não foram alterados.
                    </p>
                  </Card>
                </DialogTrigger>
              </Dialog>
            </CardContent>
          </Card>
          <Card className="border bg-card text-card-foreground shadow-sm border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-[20px] text-amber-800">
                Por que o RSA é Seguro?
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 ">
              <p className="text-amber-800">
                A segurança do RSA baseia-se no{" "}
                <strong>problema da fatoração de inteiros</strong>. É
                computacionalmente impossível fatorar números muito grandes (com
                centenas ou milhares de dígitos) em tempo hábil, mesmo com os
                computadores mais poderosos de hoje.
              </p>
              <p className="bg-amber-100 text-amber-800 p-4 rounded-md">
                <strong>Exemplo:</strong> Um número de 2048 bits levaria
                trilhões de anos para ser fatorado com a tecnologia atual, mesmo
                usando todos os computadores do mundo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
