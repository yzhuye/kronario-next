"use client";

import React, { useState } from "react";
import HeaderBar from "@/components/organisms/header_bar";
import Table from "@/components/organisms/table";
import data, { actualizarTabla, longitud } from "./data";

const Home = () => {
  const [contador, setContador] = useState(0);

  const limiteContador = longitud - 1;

  actualizarTabla(contador)
  const handleClick = () => {
    if (contador < limiteContador) {
      setContador(contador + 1);
    }
  };

  return (
    <>
      <HeaderBar/>
      <Table headers={data.headers} rows={data.rows} />
      <button onClick={handleClick}>Contador: {contador}</button>
      <div>Valor inicial del contador: {contador}</div>

    </>
  );
};

export default Page;
