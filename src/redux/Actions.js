import { 
     INCREMENT,
     DECREMENT,
     INPUT_TEXT,
     COMMENT_CREATE,
     COMMENT_UPDATE,
     COMMENT_LOAD,
} from "./Types";

export const incrementLikes = () => {
     return {
         type: INCREMENT
     }
}
export const decrementLikes = () => {
     return {
          type: DECREMENT
     }
}
 export const inputtext = (text) => {
     return {
          type: INPUT_TEXT,
          text
     }
}
 export function commentCreate(text, id) {
     return {
          type: COMMENT_CREATE,
          data: {text, id}
     }
}
export function commentUpdate(text, id) {
     return {
          type: COMMENT_UPDATE,
          data: {text, id}
     }
}
export function commentLoad() {
     return async dispatch => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10`)
          const jsonData = response.json();
          dispatch({
               type: COMMENT_LOAD,
               data: jsonData
          })
     }
}
