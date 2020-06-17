import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createSuccess,
  createFailure,
  deleteSuccess,
  deleteFailure,
} from './actions';

export function* create({ payload }) {
  try {
    const { id, recipient_id, deliveryman_id, product } = payload;

    if (id) {
      const response = yield call(api.put, `deliveries/${id}`, {
        recipient_id,
        deliveryman_id,
        product,
      });

      if (!response) {
        toast.error('Erro ao atualizar encomenda.');
        return;
      }

      yield put(createSuccess(response.data));
      toast.success('Encomenda atualizada com sucesso.');
      history.push({ pathname: '/deliveries' });
    } else {
      const response = yield call(api.post, 'deliveries', {
        recipient_id,
        deliveryman_id,
        product,
      });

      if (!response) {
        toast.error('Erro ao inserir encomenda.');
        return;
      }

      yield put(createSuccess(response.data));

      toast.success('Nova encomenda cadastrada com sucesso.');
      history.push('deliveries');
    }
  } catch (error) {
    toast.error('Falha ao cadastrar nova encomenda.');
    yield put(createFailure());
  }
}

export function* excluir({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `deliveries/${id}`);

    if (!response) {
      toast.error('Erro ao excluir encomenda.');
      return;
    }

    yield put(deleteSuccess(response.data));

    toast.success('Encomenda excluída com sucesso.');
    history.push('deliveries');
  } catch (error) {
    toast.error('Falha ao excluir encomenda.');
    yield put(deleteFailure());
  }
}

export default all([
  takeLatest('@delivery/CREATE_REQUEST', create),
  takeLatest('@delivery/DELETE_REQUEST', excluir),
]);
