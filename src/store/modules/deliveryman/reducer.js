import produce from 'immer';

const INITIAL_STATE = {
  deliveryman: null,
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
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

      case '@deliveryman/EDIT_REQUEST': {
        draft.deliveryman = action.payload;
        draft.loading = true;

        break;
      }
      case '@deliveryman/EDIT_SUCCESS': {
        draft.deliveryman = action.payload.deliveryman;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
