import { BrowserRouter, Routes, Route } from "react-router";
import { Main } from "../pages/main";
import { Funcionamento } from "@/pages/function";
import { Aplicação } from "@/pages/aplication";

export function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Aplicação" element={<Aplicação />} />
        <Route path="/Funcionamento" element={<Funcionamento />} />
      </Routes>
    </BrowserRouter>
  );
}
