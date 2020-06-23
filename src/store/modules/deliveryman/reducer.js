import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: null,
  loading: false,
  data: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/CREATE_REQUEST': {
        draft.deliveryman = action.payload;
        draft.loading = true;

        break;
      }
      case '@deliveryman/CREATE_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        draft.loading = false;
        break;
      }
      case '@deliveryman/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@deliveryman/DELETE_REQUEST': {
        draft.deliveryman = action.payload;
        draft.loading = true;

        break;
      }
      case '@deliveryman/DELETE_SUCCESS': {
        draft.retorno = action.payload;
        draft.loading = false;
        break;
      }
      case '@deliveryman/DELETE_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@deliveryman/LIST_REQUEST': {
        draft.search = action.payload.search;
        draft.page = action.payload.page;
        draft.loading = true;

        break;
      }
      case '@deliveryman/LIST_SUCCESS': {
        draft.data = action.payload;
        draft.loading = false;
        break;
      }

      case '@deliveryman/EDIT_SUCCESS': {
        draft.deliveryman = action.payload.data;
        break;
      }

      default:
    }
  });
}
