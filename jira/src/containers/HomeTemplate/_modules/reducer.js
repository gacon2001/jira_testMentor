import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  arrProjectCategory: [],
  listProject: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SIGNIN_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.SIGNIN_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.SIGNIN_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.SIGNUP_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.SIGNUP_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.SIGNUP_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.CREATE_PROJECT_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.CREATE_PROJECT_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.CREATE_PROJECT_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.FETCH_ARR_PROJECT_CATEGORY_REQUEST: {
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_ARR_PROJECT_CATEGORY_SUCCESS: {
      state.loading = false;
      state.arrProjectCategory = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_ARR_PROJECT_CATEGORY_FAILED: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.GET_ALL_PROJECT_REQUEST:
      {
        state.loading = true;
        state.error = null;
      }
      return { ...state };
    case ActionType.GET_ALL_PROJECT_SUCCESS:
      {
        state.loading = false;
        state.listProject = action.payload;
        state.error = null;
      }
      return { ...state };
    case ActionType.GET_ALL_PROJECT_FAILED:
      {
        state.loading = false;
        state.error = action.payload;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
