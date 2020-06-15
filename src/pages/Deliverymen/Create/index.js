import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { MdCheck, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import history from '../../../services/history';
import * as Yup from 'yup';

import { Container, Content } from './styles';

import { createRequest } from '../../../store/modules/deliveryman/actions';

export default function CreateDeliveryman(props) {
  const [title, setTitle] = useState('Cadastro de entregadores');
  const [deliveryman, setDeliveryman] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const { deliveryman } = props.match.params;
    if (deliveryman) {
      setTitle('Edição de entregadores');

      async function loadDeliveryman() {
        const response = await api.get(`deliverymen/${deliveryman}`);
        setDeliveryman(response.data);
      }

      loadDeliveryman();
    }
  }, []);

  async function handleSubmit(data) {
    if (deliveryman.id) {
      data.id = deliveryman.id;
    }

    dispatch(createRequest(data));
  }

  function handleGoBack() {
    history.goBack();
  }

  const schema = Yup.object().shape({
    name: Yup.string().min(3).required('O nome é obrigatório'),
    email: Yup.string().email().required('O e-mail é obrigatório'),
  });

  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={deliveryman} onSubmit={handleSubmit}>
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
            <label>Nome</label>
            <Input type="text" name="name" placeholder="Nome do entregador" />
            <label>E-mail</label>
            <Input
              type="text"
              name="email"
              placeholder="exemplo@email.com.br"
            />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
