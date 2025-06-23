import { Introduction } from "@/components/introduction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
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
                <DialogContent>
                  {" "}
                  <p>
                    A criptografia RSA é fundamental no funcionamento do
                    HTTPS/SSL porque permite a **troca segura de chaves** entre
                    o cliente (navegador) e o servidor. De forma breve: 1.
                    **Durante o início da conexão HTTPS**, o servidor envia sua
                    **chave pública RSA** ao cliente. 2. O cliente usa essa
                    chave pública para **criptografar uma chave de sessão**
                    (usada depois com criptografia simétrica, mais rápida). 3.
                    Só o servidor, com sua **chave privada RSA**, consegue
                    **descriptografar** essa chave de sessão. 4. A partir daí, a
                    comunicação é segura, usando criptografia simétrica com a
                    chave compartilhada. Assim, o RSA garante que apenas o
                    servidor possa ler as informações enviadas inicialmente,
                    protegendo contra espionagem e ataques.
                  </p>
                  <DialogClose>
                    <button className="border p-2 rounded-md">fechar</button>
                  </DialogClose>
                </DialogContent>
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
                <DialogContent>
                  <p>
                    A criptografia RSA ajuda nas transações bancárias ao
                    garantir **segurança e autenticidade** dos dados. De forma
                    breve: 1. **Confidencialidade**: Dados sensíveis (como
                    senhas e informações bancárias) são criptografados com a
                    **chave pública** do banco, garantindo que **somente o
                    banco** (com sua chave privada) possa lê-los. 2.
                    **Autenticidade e integridade**: O banco pode assinar
                    digitalmente mensagens com sua **chave privada**, permitindo
                    que o cliente confirme a autenticidade usando a **chave
                    pública** do banco. Dessa forma, o RSA protege contra
                    fraudes, roubo de dados e garante que a comunicação é segura
                    e confiável.
                  </p>
                  <DialogClose>
                    <button className="border p-2 rounded-md">fechar</button>
                  </DialogClose>
                </DialogContent>
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
                <DialogContent>
                  <p>
                    A criptografia RSA é usada em assinaturas digitais para
                    **garantir a autenticidade e integridade** de uma mensagem.
                    De forma breve: 1. Quem envia a mensagem usa sua **chave
                    privada RSA** para **assinar** um resumo (hash) da mensagem.
                    2. Quem recebe usa a **chave pública RSA** do remetente para
                    **verificar** a assinatura. 3. Se a verificação for válida,
                    isso prova que a mensagem: * **Veio do remetente certo**
                    (autenticidade), * **Não foi alterada** (integridade).
                    Assim, o RSA permite confirmar que o conteúdo é confiável e
                    realmente veio de quem diz ter enviado.
                  </p>
                  <DialogClose>
                    <button className="border p-2 rounded-md">fechar</button>
                  </DialogClose>
                </DialogContent>
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
