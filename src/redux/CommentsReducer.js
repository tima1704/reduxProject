import { COMMENT_CREATE,COMMENT_UPDATE } from './Types.js'
const initialState  = {
     comments: []
}
export const CommentsReducer = (state = initialState, action) => { 
     console.log('comments reducer >', action);
     switch(action.type) {
          case COMMENT_CREATE:
               return {
                    ...state,
                    comments: [...state.comments, action.data]
               }
          case COMMENT_UPDATE:
               const {data} = action;
               const {comments} = state;
               const itemIndex = comments.findIndex(res => res.id === data.id)
               const nextComents = [
                    ...comments.slice(0, itemIndex),
                    data,
                    ...comments.slice(itemIndex + 1 )
               ];
               return {
                    ...state,
                    comments: nextComents
               }
          default: return state;
     }
}