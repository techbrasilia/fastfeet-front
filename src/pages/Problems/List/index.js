import React, { useState, useEffect } from 'react';

import { Container, Table, Linha } from './styles';
import api from '../../../services/api';
import ActionsProblem from '../../../components/Actions/ActionsProblem';

export default function Problemas() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      await api.get('/delivery/problems').then((response) => {
        setProblems(response.data);
      });
    }
    loadProblems();
  }, []);

  return (
    <Container>
      <h1>Problemas na entrega</h1>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <Linha key={problem.id}>
              <td>{problem.delivery_id}</td>
              <td>{problem.description}</td>
              <td>
                <ActionsProblem problem={problem.delivery_id} />
              </td>
            </Linha>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
