export function createRequest(data) {
  return {
    type: '@deliveryman/CREATE_REQUEST',
    payload: {
      id: data.id ? data.id : null,
      name: data.name,
      email: data.email,
      avatar_id: data.avatar_id,
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

export function listRequest(search, page) {
  return {
    type: '@deliveryman/LIST_REQUEST',
    payload: {
      search,
      page,
    },
  };
}

export function listSuccess(data) {
  return {
    type: '@deliveryman/LIST_SUCCESS',
    payload: { data },
  };
}

export function editRequest(id) {
  return {
    type: '@deliveryman/EDIT_REQUEST',
    payload: {
      id,
    },
  };
}

export function editSuccess(data) {
  return {
    type: '@deliveryman/EDIT_SUCCESS',
    payload: {
      data,
    },
  };
}
