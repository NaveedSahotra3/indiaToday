import {TOP_STORIES_REQUEST ,TOP_STORIES_SUCCESS } from '../types'


let inital_State = {
    topStory: [],
    notify: ""
   
}
export const TOPStories = (state = inital_State , action)=>{


    switch (action.type) {
        case TOP_STORIES_REQUEST:
            
            return {
                loading: true ,
                ...state
            }

            case TOP_STORIES_SUCCESS:
                return {
                    ...state,
                    topStory: action.payload,
                    loading: false
                }
    
        default:
            return state;
    }

}