import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createSuccess,
  createFailure,
  deleteSuccess,
  deleteFailure,
  listSuccess,
  editSuccess,
} from './actions';

export function* list({ payload }) {
  const { search, page } = payload;
  try {
    const deliverymen = yield call(api.get, 'deliverymen', {
      params: { q: search, page },
    });

    yield put(listSuccess(deliverymen));
  } catch (error) {
    toast.error('Falha ao carregar dados.');
  }
}

export function* create({ payload }) {
  try {
    const { id, name, email, avatar_id } = payload;

    if (id) {
      const response = yield call(api.put, `deliverymen/${id}`, {
        name,
        email,
        avatar_id,
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
        avatar_id,
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

export function* excluir({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `deliverymen/${id}`);

    if (!response) {
      toast.error('Erro ao excluir entregador.');
      return;
    }

    yield put(deleteSuccess(response.data));

    toast.success(response.data.message);
    history.push({ pathname: '/deliverymen' });
  } catch (error) {
    toast.error(
      error.response.data.message + '\n\r' + error.response.data.description
    );
    yield put(deleteFailure());
  }
}

export function* edit({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `deliverymen/${id}`);

    yield put(editSuccess(response.data));

    history.push({ pathname: `edit-deliveryman/${response.data.id}` });
  } catch (err) {
    toast.error('Erro ao buscar dados para edição');
  }
}

export default all([
  takeLatest('@deliveryman/CREATE_REQUEST', create),
  takeLatest('@deliveryman/DELETE_REQUEST', excluir),
  takeLatest('@deliveryman/LIST_REQUEST', list),
  takeLatest('@deliveryman/EDIT_REQUEST', edit),
]);
