import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { MdCheck, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import history from '../../../services/history';

import { Container, Content } from './styles';

import { createRequest } from '../../../store/modules/delivery/actions';

export default function CreateDelivery(props) {
  const [selectRecipient, setSelectRecipient] = useState('0');
  const [selectDeliveryman, setSelectDeliveryman] = useState('0');
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);
  const [title, setTitle] = useState('Cadastro de encomendas');
  const [delivery, setDelivery] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props);
    const { delivery } = props.match.params;
    if (delivery) {
      setTitle('Edição de encomendas');

      async function loadDelivery() {
        const response = await api.get(`deliveries/${delivery}`);

        setSelectRecipient(response.data.recipient_id);
        setSelectDeliveryman(response.data.deliveryman_id);
        setDelivery(response.data);
      }

      loadDelivery();
    }
  }, []);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      const data = response.data.map((recip) => {
        return {
          id: recip.id,
          title: recip.name,
        };
      });

      setRecipients(data);
    }

    loadRecipients();
  }, []);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliverymen');

      const data = response.data.map((recip) => {
        return {
          id: recip.id,
          title: recip.name,
        };
      });

      setDeliverymen(data);
    }

    loadDeliverymen();
  }, []);

  function handleSelectRecipient(event) {
    const recipient = event.target.value;
    setSelectRecipient(recipient);
  }

  function handleSelectDeliveryman(event) {
    const deliveryman = event.target.value;
    setSelectDeliveryman(deliveryman);
  }

  async function handleSubmit(data) {
    if (delivery.id) {
      data.id = delivery.id;
    }
    data.recipient = selectRecipient;
    data.deliveryman = selectDeliveryman;

    // console.tron.log(delivery);
    // console.tron.log(data);
    dispatch(createRequest(data));
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Content>
        <Form initialData={delivery} onSubmit={handleSubmit}>
          <header>
            <h1>{title}</h1>
            <div>
              <Link to="#" onClick={handleGoBack}>
                <MdArrowBack color="#fff" size={20} />
                <span>Voltar</span>
              </Link>
              <button type="submit">
                <MdCheck color="#fff" size={20} />
                <span>Salvar</span>
              </button>
            </div>
          </header>
          <div>
            <div>
              <label>Destinatário</label>
              <select
                name="recipient"
                id="recipient"
                value={selectRecipient}
                onChange={handleSelectRecipient}
              >
                <option value="0">Selecione o destinatário</option>
                {recipients.map((recipient) => (
                  <option key={recipient.id} value={recipient.id}>
                    {recipient.title}
                  </option>
                ))}
              </select>

              <label>Nome do produto</label>
              <Input type="text" name="product" />
            </div>
            <div>
              <label>Entregador</label>
              <select
                name="deliveryman"
                id="deliveryman"
                value={selectDeliveryman}
                onChange={handleSelectDeliveryman}
              >
                <option value="0">Selecione o entregador</option>
                {deliverymen.map((deliveryman) => (
                  <option key={deliveryman.id} value={deliveryman.id}>
                    {deliveryman.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
