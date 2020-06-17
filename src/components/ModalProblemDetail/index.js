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
  const [problem, setProblem] = useState(null);

  const open = props.open;
  const handleClose = props.handleClose;

  useEffect(() => {
    if (props.details.id) {
      setProblem(props.details);
    }
  }, [props.details]);

  const detalhes = problem ? (
    <Content style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Visualizar Problema</h2>
      <p>{problem.description}</p>
    </Content>
  ) : (
    <Content style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Visualizar Problema</h2>
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
