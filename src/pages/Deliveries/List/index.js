import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Table, Linha } from './styles';
import api from '../../../services/api';
import ActionsDelivery from '../../../components/Actions/ActionsDelivery';
import { Link } from 'react-router-dom';

export default function Encomendas() {
  const [deliveries, setDeliveries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search) {
      async function searchDeliveries() {
        await api
          .get('deliveries', {
            params: { q: search },
          })
          .then((response) => {
            setDeliveries(response.data);
          });
      }

      searchDeliveries();
    } else {
      async function loadDeliveries() {
        await api.get('deliveries').then((response) => {
          setDeliveries(response.data);
        });
      }
      loadDeliveries();
    }
  }, [search]);

  function handleSearchDelivery(s) {
    setSearch(s.target.value);
  }

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>
      <header>
        <form>
          <input
            type="text"
            placeholder="Buscar por encomendas"
            value={search}
            onChange={handleSearchDelivery}
          />
        </form>
        <Link to="/create-delivery">
          <MdAdd color="#fff" size={20} />
          <span>Cadastrar</span>
        </Link>
      </header>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <Linha key={delivery.id} status={delivery.status}>
              <td>{delivery.id}</td>
              <td>{delivery.Recipient.name}</td>
              <td>{delivery.Deliveryman.name}</td>
              <td>Brasília</td>
              <td>Distrito Federal</td>
              <td>
                <span>{delivery.status}</span>
              </td>
              <td>
                <ActionsDelivery delivery={delivery.id} />
              </td>
            </Linha>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
