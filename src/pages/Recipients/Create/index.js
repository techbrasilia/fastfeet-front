import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { MdCheck, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import history from '../../../services/history';
import * as Yup from 'yup';

import { Container, Content } from './styles';

import { createRequest } from '../../../store/modules/recipient/actions';

export default function CreateRecipient(props) {
  const [title, setTitle] = useState('Cadastro de destinatários');
  const [recipient, setRecipient] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const recipient_id = props.match.params.recipient;

    if (recipient_id) {
      setTitle('Edição de destinatários');

      async function loadRecipient() {
        const response = await api.get(`recipients/${recipient_id}`);
        setRecipient(response.data);
      }

      loadRecipient();
    }
  }, [props]);

  async function handleSubmit(data) {
    if (recipient.id) {
      data.id = recipient.id;
    }

    dispatch(createRequest(data));
  }

  function handleGoBack() {
    history.goBack();
  }

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .required('O nome é obrigatório'),
    rua: Yup.string()
      .min(3, 'Mínimo de 3 caracteres')
      .required('O endereço é obrigatório'),
    numero: Yup.string()
      .min(1, 'Mínimo de 1 caractere')
      .required('O número é obrigatório'),
    complemento: Yup.string(),
    cidade: Yup.string(),
    estado: Yup.string(),
    cep: Yup.string().max(8),
  });

  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={recipient} onSubmit={handleSubmit}>
          <header>
            <h1>{title}</h1>
            <div>
              <Link to="#" onClick={handleGoBack}>
                <MdArrowBack color="#fff" size={20} />
                <span>Voltar</span>
              </Link>
              <button type="submit">
                <MdCheck color="#fff" size={20} />
                <span>Salvar</span>
              </button>
            </div>
          </header>
          <div>
            <div>
              <label>Nome</label>
              <Input
                type="text"
                name="name"
                placeholder="Nome do destinatário"
              />
            </div>
            <div className="endereco">
              <div>
                <label>Rua</label>
                <Input
                  type="text"
                  name="rua"
                  placeholder="Rua Machado de Assis"
                />
              </div>
              <div className="endereco-complemento">
                <div className="numero">
                  <label>Número</label>
                  <Input type="text" name="numero" placeholder="0" />
                </div>
                <div className="complemento">
                  <label>Complemento</label>
                  <Input type="text" name="complemento" placeholder="" />
                </div>
              </div>
            </div>
            <div className="endereco-cidade">
              <div>
                <label>Cidade</label>
                <Input
                  type="text"
                  name="cidade"
                  placeholder="Cidade do destinatário"
                />
              </div>
              <div>
                <label>Estado</label>
                <Input
                  type="text"
                  name="estado"
                  placeholder="Distrito Federal"
                />
              </div>
              <div>
                <label>CEP</label>
                <Input
                  type="text"
                  name="cep"
                  placeholder="00000000 (somente números)"
                  maxLength={8}
                />
              </div>
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
