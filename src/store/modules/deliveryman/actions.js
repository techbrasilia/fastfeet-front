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
