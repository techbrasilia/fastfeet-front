export function createRequest(data) {
  return {
    type: '@recipient/CREATE_REQUEST',
    payload: {
      id: data.id ? data.id : null,
      name: data.name,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      estado: data.estado,
      cidade: data.cidade,
      cep: data.cep,
    },
  };
}

export function createSuccess(recipient) {
  return {
    type: '@recipient/CREATE_SUCCESS',
    payload: { recipient },
  };
}

export function createFailure() {
  return {
    type: '@recipient/CREATE_FAILURE',
  };
}

export function deleteRequest(id) {
  return {
    type: '@recipient/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteSuccess(data) {
  return {
    type: '@recipient/DELETE_SUCCESS',
    payload: { data },
  };
}

export function deleteFailure() {
  return {
    type: '@recipient/DELETE_FAILURE',
  };
}
