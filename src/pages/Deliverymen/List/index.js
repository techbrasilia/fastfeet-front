import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { Container, Table, Linha } from './styles';
import api from '../../../services/api';
import ActionsDeliveryman from '../../../components/Actions/ActionsDeliveryman';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Entregadores() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(10);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    async function searchDeliverymen() {
      const response = await api.get('deliverymen', {
        params: { q: search, page },
      });

      const data = response.data.dados.map((res) => {
        return {
          ...res,
          iniciais:
            res.name.split(' ')[0].substring(0, 1) +
            '' +
            res.name.split(' ')[res.name.split(' ').length - 1].substring(0, 1),
        };
      });
      setDeliverymen(data);
      setTotalPaginas(Math.ceil(response.data.count / itensPorPagina));
    }

    searchDeliverymen();
  }, [search, page]);

  function handleSearchDelivery(s) {
    setSearch(s.target.value);
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <h1>Gerenciando entregadores</h1>
      <header>
        <form>
          <input
            type="text"
            placeholder="Buscar por entregadores"
            value={search}
            onChange={handleSearchDelivery}
          />
        </form>
        <Link to="/create-deliveryman">
          <MdAdd color="#fff" size={20} />
          <span>Cadastrar</span>
        </Link>
      </header>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map((deliveryman) => (
            <Linha key={deliveryman.id}>
              <td>{deliveryman.id}</td>
              <td>
                {deliveryman.avatar ? (
                  <img src={deliveryman.avatar.url} alt="" />
                ) : (
                  <div className="iniciais">
                    {deliveryman.iniciais.toUpperCase()}
                  </div>
                )}
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ActionsDeliveryman deliveryman={deliveryman.id} />
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
