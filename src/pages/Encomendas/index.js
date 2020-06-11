import React, { useState, useEffect } from 'react';

import { Container, Table, Linha } from './styles';
import api from '../../services/api';
import Actions from '../../components/Actions';

export default function Encomendas() {
  const [entregue, setEntregue] = useState(true);
  const [entregas, setEntregas] = useState([]);

  useEffect(() => {
    async function loadEntregas() {
      await api.get('deliveries').then((response) => {
        console.log('entregas ', response.data);
        setEntregas(response.data);
      });
    }
    loadEntregas();
  }, []);

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>
      <form>
        <input type="text" placeholder="Buscar por encomendas" />
      </form>
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
          {entregas.map((entrega) => (
            <Linha
              key={entrega.id}
              entregue={entrega.entregue}
              pendente={entrega.start_date === null}
              retirada={
                entrega.start_date !== null && entrega.end_date === null
              }
              cancelada={entrega.cancelada}
              status={entrega.status}
            >
              <td>{entrega.id}</td>
              <td>{entrega.Recipient.name}</td>
              <td>{entrega.Deliveryman.name}</td>
              <td>Brasília</td>
              <td>Distrito Federal</td>
              <td>
                <span>{entrega.status}</span>
              </td>
              <td>
                <Actions delivery={entrega.id} />
              </td>
            </Linha>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
