export function createRequest(data) {
  return {
    type: '@problem/CREATE_REQUEST',
    payload: {
      id: data.id ? data.id : null,
      delivery_id: data.delivery,
      description: data.description,
    },
  };
}

export function createSuccess(problem) {
  return {
    type: '@problem/CREATE_SUCCESS',
    payload: { problem },
  };
}

export function createFailure() {
  return {
    type: '@problem/CREATE_FAILURE',
  };
}

export function updateRequest(id) {
  return {
    type: '@problem/UPDATE_REQUEST',
    payload: { id },
  };
}

export function updateSuccess(problem) {
  return {
    type: '@problem/UPDATE_SUCCESS',
    payload: { problem },
  };
}

export function updateFailure() {
  return {
    type: '@problem/UPDATE_FAILURE',
  };
}
