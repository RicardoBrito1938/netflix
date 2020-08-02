import { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (key, valor) => {
    setValues({
      ...values,
      [key]: valor,
    });
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setValue(e.target.getAttribute('name'), value);
  };

  const clearForm = () => {
    setValues(valoresIniciais);
  };

  return {
    values,
    handleChangeInput,
    clearForm,
  };
};

export default useForm;
