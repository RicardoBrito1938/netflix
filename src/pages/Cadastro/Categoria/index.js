import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

// import { Container } from './styles';

const CadastroCategoria = () => {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
