export function createRequest(data) {
  return {
    type: '@delivery/CREATE_REQUEST',
    payload: {
      id: data.id ? data.id : null,
      recipient_id: data.recipient,
      deliveryman_id: data.deliveryman,
      product: data.product,
    },
  };
}

export function createSuccess(delivery) {
  return {
    type: '@delivery/CREATE_SUCCESS',
    payload: { delivery },
  };
}

export function createFailure() {
  return {
    type: '@delivery/CREATE_FAILURE',
  };
}

// export function editRequest(id) {
//   return {
//     type: '@delivery/EDIT_REQUEST',
//     payload: { id },
//   };
// }

// export function editSuccess(delivery) {
//   return {
//     type: '@delivery/EDIT_SUCCESS',
//     payload: { delivery },
//   };
// }
