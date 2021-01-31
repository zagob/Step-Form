/* eslint-disable default-case */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import DadosImovel from "./components/DadosImovel/DadosImoveis";
import Custos from "./components/Custos/Custos";
import Fotos from "./components/Fotos/fotos";
import Visita from "./components/Visita/Visita";

const defaultData = {
  rua: "",
  numero: '',
  bairro: '',
  complemento: '',
  descricao: '',
  imovel: [],
  outros: '',
  Taxa: '',
  IPTU_anual: '',
  SeguroIncendio: '',
  valorAluguel: '',
  TaxaAdministracaoCom: '',
  ComExclusividade: '',
  SemExclusividade: '',
  calendario: Date,
  turno: '',
  horarioVisita: [],
  Dias: '',
  TurnoVisita: '',
  Observacao: '',
};

const steps = [
  { id: "DadosImovel" },
  { id: "Custos" },
  { id: "Fotos" },
  { id: "Visita" },
];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "DadosImovel":
        return <DadosImovel {...props} />;
    case "Custos":
        return <Custos {...props} />
    case "Fotos":
        return <Fotos {...props} />
    case "Visita":
        return <Visita  {...props} />
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};

export default MultiStepForm;