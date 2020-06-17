import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { createSuccess, createFailure } from './actions';

export function* create({ payload }) {
  try {
    const { id, name, rua, numero, complemento, estado, cidade, cep } = payload;

    if (id) {
      console.log('atualizacao f: ', payload);
      const response = yield call(api.put, `recipients/${id}`, {
        name,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      });

      if (!response) {
        toast.error('Erro ao atualizar destinatário.');
        return;
      }

      yield put(createSuccess(response.data));
      toast.success('Destinatário atualizado com sucesso.');
      history.push({ pathname: '/recipients' });
    } else {
      const response = yield call(api.post, 'recipients', {
        name,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      });

      if (!response) {
        toast.error('Erro ao inserir destinatário.');
        return;
      }

      yield put(createSuccess(response.data));

      toast.success('Novo destinatário cadastrado com sucesso.');
      history.push('recipients');
    }
  } catch (error) {
    toast.error('Falha ao cadastrar novo destinatário.');
    yield put(createFailure());
  }
}

export default all([takeLatest('@recipient/CREATE_REQUEST', create)]);
