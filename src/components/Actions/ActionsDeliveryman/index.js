import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Badge, ActionList } from './styles';
import { deleteRequest } from '../../../store/modules/deliveryman/actions';

export default function ActionsDeliveryman(props) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleDeleteDeliveryman(id) {
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
      <ActionList visible={visible} deliveryman>
        <ul>
          <Link to={`edit-deliveryman/${props.deliveryman}`}>
            <li>
              <MdModeEdit color="#4D85EE" size={20} />
              <span>Editar</span>
            </li>
          </Link>
          <li onClick={() => handleDeleteDeliveryman(props.deliveryman)}>
            <MdDelete color="#DE3B3B" size={20} />
            <span>Excluir</span>
          </li>
        </ul>
      </ActionList>
    </Container>
  );
}
