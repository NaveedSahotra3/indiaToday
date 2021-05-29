import Axios from "axios";
import { VIDEO_ARTICLE_REQUEST, VIDEO_ARTICLE_SUCCESS } from "../types";
import baseURL from '../constantURL';


export const VideoArticles = () => async (dispatch) => {
  dispatch({
    type: VIDEO_ARTICLE_REQUEST,
  });
 

  const { data } = await Axios.get(baseURL + "/api/gets_article")
  
  dispatch({
    type: VIDEO_ARTICLE_SUCCESS,
    payload: data,
  });
};

