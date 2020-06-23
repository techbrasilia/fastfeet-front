import produce from 'immer';

const INITIAL_STATE = {
  recipient: null,
  loading: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/CREATE_REQUEST': {
        draft.recipient = action.payload;
        draft.loading = true;

        break;
      }
      case '@recipient/CREATE_SUCCESS': {
        draft.recipient = action.payload.recipient;
        draft.loading = false;
        break;
      }
      case '@recipient/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@recipient/DELETE_REQUEST': {
        draft.recipient = action.payload;
        draft.loading = true;

        break;
      }
      case '@recipient/DELETE_SUCCESS': {
        draft.retorno = action.payload;
        draft.loading = false;
        break;
      }
      case '@recipient/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
