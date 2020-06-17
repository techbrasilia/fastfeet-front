import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { createSuccess, createFailure } from './actions';

export function* create({ payload }) {
  try {
    const { id, delivery_id, description } = payload;

    if (id) {
      const response = yield call(api.put, `delivery/${id}/problems`, {
        description,
      });

      if (!response) {
        toast.error('Erro ao atualizar problema.');
        return;
      }

      yield put(createSuccess(response.data));
      toast.success('Problema atualizado com sucesso.');
      history.push({ pathname: '/problems' });
    } else {
      const response = yield call(
        api.post,
        `delivery/${delivery_id}/problems`,
        {
          description,
        }
      );

      if (!response) {
        toast.error('Erro ao inserir problema.');
        return;
      }

      yield put(createSuccess(response.data));

      toast.success('Novo problema cadastrado com sucesso.');
      history.push('problems');
    }
  } catch (error) {
    toast.error('Falha ao cadastrar problema.');
    yield put(createFailure());
  }
}

export default all([takeLatest('@problem/CREATE_REQUEST', create)]);
