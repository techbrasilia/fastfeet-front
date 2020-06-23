import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { Content } from './styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 450,
    height: 353,
    backgroundColor: theme.palette.background.paper,
    border: '0',
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalDetail(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [delivery, setDelivery] = useState(null);

  const open = props.open;
  const handleClose = props.handleClose;

  useEffect(() => {
    if (props.details.id) {
      setDelivery(props.details);
    }
  }, [props.details]);

  const detalhes = delivery ? (
    <Content style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Informações da encomenda</h2>
      <p>
        {`${
          delivery.Recipient != null
            ? delivery.Recipient.rua + ',' + delivery.Recipient.numero
            : ''
        }`}
      </p>

      <p>
        {delivery.Recipient
          ? delivery.Recipient.cidade + ' - ' + delivery.Recipient.estado
          : ''}
      </p>
      <p>{`${delivery.Recipient != null ? delivery.Recipient.cep : ''}`}</p>

      <hr />

      <h2>Datas</h2>

      <p>
        <strong>Retirada:</strong> {delivery.dtRetirada}
      </p>
      <p>
        <strong>Entrega:</strong> {delivery.dtEntrega}
      </p>
      <p>
        <strong>Cancelamento:</strong> {delivery.dtCancelamento}
      </p>

      <hr />

      <h2>Assinatura do destinatário</h2>
    </Content>
  ) : (
    <Content style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Informações da encomenda</h2>
    </Content>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {detalhes}
    </Modal>
  );
}
