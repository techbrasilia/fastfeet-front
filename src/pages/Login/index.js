import React, { useState } from 'react';

import { Container, Form } from './styles';
import logo from '../../assets/images/logo.png';
import api from '../../services/api';

export default function Login() {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/sessions', { email, password });
        console.log(response);
        alert(response);
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <img src={logo} alt="Fastfeet" />
                <label>Seu E-mail</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="exemplo@email.com"
                    value={email}
                />
                <label>Sua senha</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    value={password}
                />
                <button type="submit">Entrar no sistema</button>
            </Form>
        </Container>
    );
}
