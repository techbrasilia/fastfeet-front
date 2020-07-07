import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { Container, Badge, ActionList } from './styles';
import {
  deleteRequest,
  editRequest,
} from '../../../store/modules/deliveryman/actions';

export default function ActionsDeliveryman(props) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleDeleteDeliveryman(id) {
    var r = window.confirm('Deseja excluir a encomenda?');
    if (r === true) {
      dispatch(deleteRequest(id));
    }
  }

  function editDeliveryman(id) {
    dispatch(editRequest(id));
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#333" size={20} />
      </Badge>
      <ActionList visible={visible} deliveryman>
        <ul>
          <li onClick={() => editDeliveryman(props.deliveryman)}>
            <MdModeEdit color="#4D85EE" size={20} />
            <span>Editar</span>
          </li>
          <li onClick={() => handleDeleteDeliveryman(props.deliveryman)}>
            <MdDelete color="#DE3B3B" size={20} />
            <span>Excluir</span>
          </li>
        </ul>
      </ActionList>
    </Container>
  );
}
