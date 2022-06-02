import { api } from "utils/api";
import * as ActionType from "./constants";

export const actSigninApi = (signin, history) => {
  return (dispatch) => {
    dispatch(actSigninRequest());
    api
      .post("Users/signin", signin)
      .then((success) => {
        localStorage.setItem("JiraSignin", JSON.stringify(success.data));
        dispatch(actSigninSuccess(success.data));
        history.push("/create-project");
      })
      .catch((error) => {
        alert("can/t access");
        dispatch(actSigninFailed(error));
      });
  };
};
const actSigninRequest = () => {
  return {
    type: ActionType.SIGNIN_REQUEST,
  };
};
const actSigninSuccess = (data) => {
  return {
    type: ActionType.SIGNIN_SUCCESS,
    payload: data,
  };
};
const actSigninFailed = (error) => {
  return {
    type: ActionType.SIGNIN_FAILED,
    payload: error,
  };
};

export const actSignUpApi = (signup) => {
  return (dispatch) => {
    dispatch(actSignUpRequest());
    api
      .post("Users/signup", signup)
      .then((success) => {
        dispatch(actSignUpSuccess(success.data.content));
        alert("Đăng ký thành công. Xin mời đăng nhập");
      })
      .catch((error) => {
        dispatch(actSignUpFailed(error));
      });
  };
};
const actSignUpRequest = () => {
  return {
    type: ActionType.SIGNUP_REQUEST,
  };
};
const actSignUpSuccess = (data) => {
  return {
    type: ActionType.SIGNUP_SUCCESS,
    payload: data,
  };
};
const actSignUpFailed = (error) => {
  return {
    type: ActionType.SIGNUP_FAILED,
    payload: error,
  };
};

export const actCreateProjectApi = (project) => {
  return (dispatch) => {
    dispatch(actCreateProjectRequest());
    api
      .post("Project/createProject", project)
      .then((success) => {
        dispatch(actCreateProjectSuccess(success.data.content));
        alert("success");
      })
      .catch((error) => {
        console.log(error);
        dispatch(actCreateProjectFailed(error));
        alert("failed");
      });
  };
};
const actCreateProjectRequest = () => {
  return {
    type: ActionType.CREATE_PROJECT_REQUEST,
  };
};
const actCreateProjectSuccess = (data) => {
  return {
    type: ActionType.CREATE_PROJECT_SUCCESS,
    payload: data,
  };
};
const actCreateProjectFailed = (error) => {
  return {
    type: ActionType.CREATE_PROJECT_FAILED,
    payload: error,
  };
};

export const actFetchArrProjectCategoryApi = () => {
  return (dispatch) => {
    dispatch(actFetchArrProjectCategoryRequest());
    api
      .get("ProjectCategory")
      .then((success) => {
        dispatch(actFetchArrProjectCategorySuccess(success.data.content));
      })
      .catch((error) => {
        dispatch(actFetchArrProjectCategoryFailed(error));
      });
  };
};
const actFetchArrProjectCategoryRequest = () => {
  return {
    type: ActionType.FETCH_ARR_PROJECT_CATEGORY_REQUEST,
  };
};
const actFetchArrProjectCategorySuccess = (data) => {
  return {
    type: ActionType.FETCH_ARR_PROJECT_CATEGORY_SUCCESS,
    payload: data,
  };
};
const actFetchArrProjectCategoryFailed = (error) => {
  return {
    type: ActionType.FETCH_ARR_PROJECT_CATEGORY_FAILED,
    payload: error,
  };
};

export const actGetAllProjectApi = () => {
  return (dispatch) => {
    dispatch(actGetAllProjectRequest());
    api
      .get("Project/getAllProject")
      .then((success) => {
        dispatch(actGetAllProjectSuccess(success.data.content));
      })
      .catch((error) => {
        dispatch(actGetAllProjectFailed(error));
      });
  };
};
const actGetAllProjectRequest = () => {
  return {
    type: ActionType.GET_ALL_PROJECT_REQUEST,
  };
};
const actGetAllProjectSuccess = (data) => {
  return {
    type: ActionType.GET_ALL_PROJECT_SUCCESS,
    payload: data,
  };
};
const actGetAllProjectFailed = (error) => {
  return {
    type: ActionType.GET_ALL_PROJECT_FAILED,
    payload: error,
  };
};
