import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/images/fastfeet-logo.png';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo" />
          <Link to="/deliveries">Encomendas</Link>
          <Link to="/deliverymen">Entregadores</Link>
          <Link to="/recipients">Destinatários</Link>
          <Link to="/problems">Problemas</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
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
