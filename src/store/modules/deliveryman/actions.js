export function createRequest(data) {
  return {
    type: '@deliveryman/CREATE_REQUEST',
    payload: {
      id: data.id ? data.id : null,
      name: data.name,
      email: data.email,
    },
  };
}

export function createSuccess(deliveryman) {
  return {
    type: '@deliveryman/CREATE_SUCCESS',
    payload: { deliveryman },
  };
}

export function createFailure() {
  return {
    type: '@deliveryman/CREATE_FAILURE',
  };
}

export function deleteRequest(id) {
  return {
    type: '@deliveryman/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteSuccess(data) {
  return {
    type: '@deliveryman/DELETE_SUCCESS',
    payload: { data },
  };
}

export function deleteFailure() {
  return {
    type: '@deliveryman/DELETE_FAILURE',
  };
}
