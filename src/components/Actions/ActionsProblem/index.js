import React, { useState } from 'react';
import { MdMoreHoriz, MdRemoveRedEye, MdDelete } from 'react-icons/md';

import api from '../../../services/api';
import ModalProblemDetail from '../../../components/ModalProblemDetail';

import { Container, Badge, ActionList } from './styles';

export default function ActionsProblem(props) {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState({});

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleShowDelivery(id) {
    const response = await api.get(`/delivery/${id}/problems`);
    setDetails(response.data);
    setOpen(true);
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
          <li>
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
