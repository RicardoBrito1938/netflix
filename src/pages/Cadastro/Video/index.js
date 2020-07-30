import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

// import { Container } from './styles';

const CadastroVideo = () => {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
