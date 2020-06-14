import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/CREATE_REQUEST': {
        draft.delivery = action.payload;
        draft.loading = true;

        break;
      }
      case '@delivery/CREATE_SUCCESS': {
        draft.delivery = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@delivery/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@delivery/EDIT_REQUEST': {
        draft.delivery = action.payload;
        draft.loading = true;

        break;
      }
      case '@delivery/EDIT_SUCCESS': {
        draft.delivery = action.payload.delivery;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
