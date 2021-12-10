import { API_URL } from "../../utils/constants";

export const GET_ARTICLES_PENDING = "ARTICLES::GET_ARTICLES_PENDING";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export const getArticlesPending = () => ({
  type: GET_ARTICLES_PENDING,
});

export const getArticlesSuccess = (articles) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles,
});

export const getArticlesFailure = (error) => ({
  type: GET_ARTICLES_FAILURE,
  payload: error,
});

export const getArticles = () => (dispatch) => {
  dispatch(getArticlesPending());
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`ERROR ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      dispatch(getArticlesSuccess(result.articles));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getArticlesFailure(err.message));
    });
};

// export const getArticles = () => async (dispatch) => {
//   dispatch(getArticlesPending());

//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error(`ERROR ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//     dispatch(getArticlesSuccess(result.articles));
//   } catch (err) {
//     console.log(err);
//     dispatch(getArticlesFailure(err.message));
//   }
// };
