import React, { useState } from 'react';
import { MdMoreHoriz, MdRemoveRedEye, MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import api from '../../../services/api';
import ModalProblemDetail from '../../../components/ModalProblemDetail';

import { Container, Badge, ActionList } from './styles';
import { updateRequest } from '../../../store/modules/problem/actions';

export default function ActionsProblem(props) {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleShowDelivery(id) {
    const response = await api.get(`/problems/${id}`);
    setDetails(response.data);
    setOpen(true);
  }

  async function handleCancelDelivery(id) {
    var r = window.confirm('Deseja cancelar a encomenda?');
    if (r === true) {
      dispatch(updateRequest(id));
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#333" size={20} />
      </Badge>
      <ActionList visible={visible} problem>
        <ul>
          <li onClick={() => handleShowDelivery(props.problem)}>
            <MdRemoveRedEye color="#4D85EE" size={20} />
            <span>Visualizar</span>
          </li>
          <li onClick={() => handleCancelDelivery(props.problem)}>
            <MdDelete color="#DE3B3B" size={20} />
            <span>Cancelar encomenda</span>
          </li>
        </ul>
      </ActionList>
      <ModalProblemDetail
        open={open}
        handleClose={handleClose}
        details={details}
      />
    </Container>
  );
}
