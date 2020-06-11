import React from 'react';
import { useDispatch } from 'react-redux';

import logo from '../../assets/images/fastfeet-logo.png';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="Logo" />
                    <Link to="/encomendas">Encomendas</Link>
                    <Link to="/entregadores">Entregadores</Link>
                    <Link to="/destinatarios">Destinatários</Link>
                    <Link to="/problemas">Problemas</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Distribuidora</strong>
                            <button type="button" onClick={handleSignOut}>
                                Sair do sistema
                            </button>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
