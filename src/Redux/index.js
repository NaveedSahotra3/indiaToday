import {combineReducers} from 'redux'
import {TOPStories} from './Reducers/topStories_reducer'
import {VideoArticle} from './Reducers/video_articles'

const Reducers = combineReducers({
    TOPStories,
    VideoArticle
})

export default Reducers
