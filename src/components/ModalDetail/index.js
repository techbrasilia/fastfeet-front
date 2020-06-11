import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50; //+ rand();
  const left = 50; //+ rand();

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
    border: '2px solid #000',
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
    console.log('sdfasfdasdf', delivery);
    if (props.details.id) {
      console.log(props.details);
      setDelivery(props.details);
    }
  }, [props.details.id]);

  const detalhes = delivery ? (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Informações da encomenda</h2>
      <p>
        {delivery.Recipient.rua},{delivery.Recipient.numero}
      </p>
      <p>
        {delivery.Recipient.cidade} - {delivery.Recipient.estado}
      </p>
      <p>{delivery.Recipient.cep}</p>
      <br />
      <h2>Datas</h2>
      <p>Retirada: {delivery.start_date}</p>
      <p>Entrega: {delivery.end_date}</p>
    </div>
  ) : (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Informações da encomenda</h2>
    </div>
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
