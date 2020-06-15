import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { createSuccess, createFailure } from './actions';

export function* create({ payload }) {
  try {
    const { id, name, email } = payload;

    if (id) {
      const response = yield call(api.put, `deliverymen/${id}`, {
        name,
        email,
      });

      if (!response) {
        toast.error('Erro ao atualizar encomenda.');
        return;
      }

      yield put(createSuccess(response.data));
      toast.success('Entregador atualizado com sucesso.');
      history.push({ pathname: '/deliverymen' });
    } else {
      const response = yield call(api.post, 'deliverymen', {
        name,
        email,
      });

      if (!response) {
        toast.error('Erro ao inserir entregador.');
        return;
      }

      yield put(createSuccess(response.data));

      toast.success('Novo entregador cadastrado com sucesso.');
      history.push('deliverymen');
    }
  } catch (error) {
    toast.error('Falha ao cadastrar novo entregador.');
    yield put(createFailure());
  }
}

export default all([takeLatest('@deliveryman/CREATE_REQUEST', create)]);
