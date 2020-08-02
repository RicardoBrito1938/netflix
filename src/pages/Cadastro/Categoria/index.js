import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForms';
import { URL_BACKEND } from '../../../config';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const { handleChangeInput, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([...categorias, values]);

    clearForm(valoresIniciais);
  };

  useEffect(() => {
    fetch(URL_BACKEND).then(async (res) => {
      const result = await res.json();
      setCategorias([...result]);
    });
  }, [values.nome]);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChangeInput}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChangeInput}
        />

        <FormField
          label="cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChangeInput}
        />

        <button type="submit">Cadastrar</button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}
      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.titulo}`}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
