import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import AsyncSelect from 'react-select';

import { MdCheck, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import history from '../../../services/history';
import * as Yup from 'yup';

import { Container, Content } from './styles';

import { createRequest } from '../../../store/modules/delivery/actions';

export default function CreateDelivery(props) {
  const [selectRecipient, setSelectRecipient] = useState('');
  const [selectDeliveryman, setSelectDeliveryman] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);
  const [title, setTitle] = useState('Cadastro de encomendas');
  const [delivery, setDelivery] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const delivery_id = props.match.params.delivery;
    if (delivery_id) {
      setTitle('Edição de encomendas');

      async function loadDelivery() {
        const response = await api.get(`deliveries/${delivery_id}`);

        setSelectRecipient({
          value: response.data.Recipient && response.data.Recipient.id,
          label: response.data.Recipient && response.data.Recipient.name,
        });
        setSelectDeliveryman({
          value: response.data.Deliveryman && response.data.Deliveryman.id,
          label: response.data.Deliveryman && response.data.Deliveryman.name,
        });

        setDelivery(response.data);
      }

      loadDelivery();
    }
  }, []);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      const data = response.data.dados.map((recip) => {
        return {
          value: recip.id,
          label: recip.name,
        };
      });

      setRecipients(data);
    }

    loadRecipients();
  }, []);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliverymen');

      const data = response.data.dados.map((recip) => {
        return {
          value: recip.id,
          label: recip.name,
        };
      });

      setDeliverymen(data);
    }

    loadDeliverymen();
  }, []);

  function handleSelectRecipient(event) {
    const recipient = event;
    setSelectRecipient(recipient);
  }

  function handleSelectDeliveryman(event) {
    const deliveryman = event;
    setSelectDeliveryman(deliveryman);
  }

  async function handleSubmit(data) {
    data.recipient = selectRecipient.value;
    data.deliveryman = selectDeliveryman.value;
    if (delivery.id) {
      data.id = delivery.id;
    }

    dispatch(createRequest(data));
  }

  function handleGoBack() {
    history.goBack();
  }

  const schema = Yup.object().shape({
    product: Yup.string()
      .min(3)
      .required('O preenchimento de produto é obrigatório.'),
  });

  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={delivery} onSubmit={handleSubmit}>
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
              <AsyncSelect
                name="recipient"
                id="recipient"
                value={selectRecipient}
                options={recipients}
                placeholder="Selecione um destinatário"
                onChange={handleSelectRecipient}
              />
            </div>
            <div>
              <label>Entregador</label>
              <AsyncSelect
                name="deliveryman"
                id="deliveryman"
                value={selectDeliveryman}
                options={deliverymen}
                placeholder="Selecione um entregador"
                onChange={handleSelectDeliveryman}
              />
            </div>
            <div>
              <label>Nome do produto</label>
              <Input type="text" name="product" />
            </div>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
