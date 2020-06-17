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
