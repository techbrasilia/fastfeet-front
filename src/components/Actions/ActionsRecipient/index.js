import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Badge, ActionList } from './styles';
import { deleteRequest } from '../../../store/modules/recipient/actions';

export default function ActionsRecipient(props) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleDeleteRecipient(id) {
    var r = window.confirm('Deseja excluir o destinatário!');
    if (r === true) {
      dispatch(deleteRequest(id));
    }
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#333" size={20} />
      </Badge>
      <ActionList visible={visible} recipient>
        <ul>
          <Link to={`edit-recipient/${props.recipient}`}>
            <li>
              <MdModeEdit color="#4D85EE" size={20} />
              <span>Editar</span>
            </li>
          </Link>
          <li onClick={() => handleDeleteRecipient(props.recipient)}>
            <MdDelete color="#DE3B3B" size={20} />
            <span>Excluir</span>
          </li>
        </ul>
      </ActionList>
    </Container>
  );
}
