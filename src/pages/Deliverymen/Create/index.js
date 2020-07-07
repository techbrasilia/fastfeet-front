import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { MdCheck, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import history from '../../../services/history';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { createRequest } from '../../../store/modules/deliveryman/actions';
import AvatarInput from '../AvatarInput';

export default function CreateDeliveryman(props) {
  const [title, setTitle] = useState('Cadastro de entregadores');

  let deliveryman = useSelector((state) => state.deliveryman.deliveryman);

  if (!props.match.params.deliveryman) {
    deliveryman = {};
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (deliveryman) {
      setTitle('Edição de entregadores');
    }
  }, [title, deliveryman]);

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
    avatar_id: Yup.number(),
    name: Yup.string().min(3).required('O nome é obrigatório'),
    email: Yup.string().email().required('O e-mail é obrigatório'),
  });

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit} schema={schema} initialData={deliveryman}>
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
            <AvatarInput name="avatar_id" />
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
