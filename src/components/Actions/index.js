import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md';
import ModalDetail from '../../components/ModalDetail';

import api from '../../services/api';

import { Container, Badge, ActionList } from './styles';

export default function Actions(props) {
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
    const response = await api.get(`deliveries/${id}`);
    // console.log('detalhe em acion:', response.data);
    setDetails(response.data);
    setOpen(true);
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
          <li>
            <MdModeEdit color="#4D85EE" size={20} />
            <span>Editar</span>
          </li>
          <li>
            <MdDelete color="#DE3B3B" size={20} />
            <span>Excluir</span>
          </li>
        </ul>
      </ActionList>
      <ModalDetail open={open} handleClose={handleClose} details={details} />
    </Container>
  );
}
