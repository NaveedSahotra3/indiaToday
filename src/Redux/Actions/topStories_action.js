import Axios from "axios";
import { TOP_STORIES_REQUEST, TOP_STORIES_SUCCESS } from "../types";
import baseURL from '../constantURL';


export const TOP_Stories = () => async (dispatch) => {
  dispatch({
    type: TOP_STORIES_REQUEST,
  });
 

  const { data } = await Axios.get(baseURL + "/api/gets_story")
  
  dispatch({
    type: TOP_STORIES_SUCCESS,
    payload: data,
  });
};

