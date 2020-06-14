import React from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/images/fastfeet-logo.png';
import { signInRequest } from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="Fastfeet" />
      <Form onSubmit={handleSubmit}>
        <label>SEU E-MAIL</label>
        <Input type="email" name="email" placeholder="exemplo@email.com" />
        <label>SUA SENHA</label>
        <Input type="password" name="password" placeholder="******" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
