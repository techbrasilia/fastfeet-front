import produce from 'immer';

const INITIAL_STATE = {
  problem: null,
  loading: false,
};

export default function problem(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problem/CREATE_REQUEST': {
        draft.problem = action.payload;
        draft.loading = true;

        break;
      }
      case '@problem/CREATE_SUCCESS': {
        draft.problem = action.payload.problem;
        draft.loading = false;
        break;
      }
      case '@problem/CREATE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@problem/UPDATE_REQUEST': {
        draft.problem = action.payload;
        draft.loading = true;

        break;
      }
      case '@problem/UPDATE_SUCCESS': {
        draft.problem = action.payload.problem;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
