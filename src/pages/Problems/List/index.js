import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { Container, Table, Linha } from './styles';
import api from '../../../services/api';
import ActionsProblem from '../../../components/Actions/ActionsProblem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Problemas() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    async function loadProblems() {
      await api.get('/delivery/problems').then((response) => {
        setProblems(response.data.dados);
        setItensPorPagina(10);
        setTotalPaginas(Math.ceil(response.data.count / itensPorPagina));
      });
    }
    loadProblems();
  }, [page, itensPorPagina]);

  const handleChange = (event, value) => {
    setPage(value);
  };

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
                <ActionsProblem problem={problem.id} />
              </td>
            </Linha>
          ))}
        </tbody>
      </Table>
      <div className={classes.root}>
        <Pagination
          count={totalPaginas}
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
}
