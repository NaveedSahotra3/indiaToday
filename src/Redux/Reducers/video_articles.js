import {VIDEO_ARTICLE_REQUEST ,VIDEO_ARTICLE_SUCCESS } from '../types'


let inital_State = {
    VideoArticles: [],
    notify: ""
   
}
export const VideoArticle = (state = inital_State , action)=>{


    switch (action.type) {
        case VIDEO_ARTICLE_REQUEST:
            
            return {
                loading: true ,
                ...state
            }

            case VIDEO_ARTICLE_SUCCESS:
                return {
                    ...state,
                    VideoArticles: action.payload,
                    loading: false
                }
    
        default:
            return state;
    }

}