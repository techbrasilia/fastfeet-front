import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ModalDetail from '../../../components/ModalDetail';
import api from '../../../services/api';
import { deleteRequest } from '../../../store/modules/delivery/actions';

import { Container, Badge, ActionList } from './styles';

export default function ActionsDelivery(props) {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState({});
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleShowDelivery(id) {
    const response = await api.get(`deliveries/${id}`);
    if (response.data) {
      const data = {
        ...response.data,
        dtRetirada:
          response.data.start_date &&
          format(parseISO(response.data.start_date), "dd'/'MM'/'yyyy", {
            localte: pt,
          }),
        dtEntrega:
          response.data.end_date &&
          format(parseISO(response.data.end_date), "dd'/'MM'/'yyyy", {
            localte: pt,
          }),
        dtCancelamento:
          response.data.canceled_at &&
          format(parseISO(response.data.canceled_at), "dd'/'MM'/'yyyy", {
            localte: pt,
          }),
      };
      setDetails(data);
    }
    setOpen(true);
  }

  function handleDeleteDelivery(id) {
    var r = window.confirm('Deseja deletar a encomenda!');
    if (r == true) {
      dispatch(deleteRequest(id));
    } else {
      alert('Não deletando!');
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#333" size={20} />
      </Badge>
      <ActionList visible={visible} delivery>
        <ul>
          <li onClick={() => handleShowDelivery(props.delivery)}>
            <MdRemoveRedEye color="#8E5BE8" size={20} />
            <span>Visualizar</span>
          </li>
          <Link to={`edit-delivery/${props.delivery}`}>
            <li>
              <MdModeEdit color="#4D85EE" size={20} />
              <span>Editar</span>
            </li>
          </Link>
          <li onClick={() => handleDeleteDelivery(props.delivery)}>
            <MdDelete color="#DE3B3B" size={20} />
            <span>Excluir</span>
          </li>
        </ul>
      </ActionList>
      <ModalDetail open={open} handleClose={handleClose} details={details} />
    </Container>
  );
}
