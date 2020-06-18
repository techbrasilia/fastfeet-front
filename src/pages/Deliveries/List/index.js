import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { Container, Table, Linha } from './styles';
import api from '../../../services/api';
import ActionsDelivery from '../../../components/Actions/ActionsDelivery';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Encomendas() {
  const [deliveries, setDeliveries] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(10);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    if (search) {
      async function searchDeliveries() {
        await api
          .get('deliveries', {
            params: { q: search, page },
          })
          .then((response) => {
            setDeliveries(response.data.dados);
          });
      }

      searchDeliveries();
    } else {
      async function loadDeliveries() {
        await api
          .get('deliveries', {
            params: { page },
          })
          .then((response) => {
            setDeliveries(response.data.dados);
            setTotalPaginas(Math.ceil(response.data.count / itensPorPagina));

            // console.log(
            //   'dd',
            //   response.data.dados.length,
            //   'mat:',
            //   Math.ceil(response.data.count / itensPorPagina)
            // );
          });
      }
      loadDeliveries();
    }
  }, [search, page]);

  function handleSearchDelivery(s) {
    setSearch(s.target.value);
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

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
