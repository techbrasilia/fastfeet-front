import React, { useState } from 'react';
import { MdMoreHoriz, MdModeEdit, MdDelete } from 'react-icons/md';

import { Container, Badge, ActionList } from './styles';
import { Link } from 'react-router-dom';

export default function ActionsRecipient(props) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
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
          <li>
            <MdDelete color="#DE3B3B" size={20} />
            <span>Excluir</span>
          </li>
        </ul>
      </ActionList>
    </Container>
  );
}
