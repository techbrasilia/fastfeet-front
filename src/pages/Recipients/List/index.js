import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Table, Linha } from './styles';
import api from '../../../services/api';
import ActionsRecipient from '../../../components/Actions/ActionsRecipient';
import { Link } from 'react-router-dom';

export default function Destinatarios() {
  const [recipients, setRecipients] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      async function searchRecipients() {
        await api
          .get('recipients', {
            params: { q: search },
          })
          .then((response) => {
            setRecipients(response.data);
          });
      }

      searchRecipients();
    } else {
      async function loadRecipients() {
        await api.get('recipients').then((response) => {
          setRecipients(response.data);
        });
      }
      loadRecipients();
    }
  }, [search]);

  function handleSearchDelivery(s) {
    setSearch(s.target.value);
  }

  return (
    <Container>
      <h1>Gerenciando destinatários</h1>
      <header>
        <form>
          <input
            type="text"
            placeholder="Buscar por destinatários"
            value={search}
            onChange={handleSearchDelivery}
          />
        </form>
        <Link to="/create-recipient">
          <MdAdd color="#fff" size={20} />
          <span>Cadastrar</span>
        </Link>
      </header>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <Linha key={recipient.id}>
              <td>{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>
                {recipient.rua}, {recipient.numero}, {recipient.cidade}-
                {recipient.estado}
              </td>
              <td>
                <ActionsRecipient recipient={recipient.id} />
              </td>
            </Linha>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
