import React from 'react';
import SingleComment from './SingleComments';
import { commentCreate,commentLoad } from '../../redux/Actions';
import uniqid from 'uniqid'
import { useDispatch, useSelector } from 'react-redux'

const Comments = (props) => {
     const [textComment, setTextCommit] = React.useState('')
     const dispatch = useDispatch()
     const comments = useSelector(state => {
          const {CommentsReducer} = state;
          return CommentsReducer.comments;
     })
     
     const handleInput = (e) => {
          setTextCommit(e.target.value)
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          const id = uniqid();
          dispatch(commentCreate(textComment, id));
          setTextCommit('');
     }

     React.useEffect(() => {
          dispatch(commentLoad());
     })

     return (
          <div className="card-comments">
               <form onSubmit={handleSubmit} className="comments-item-create">
                    <input
                    type="text"
                    value={textComment}
                    onChange={handleInput} />

                    <input
                    type="submit"
                    hidden />
               </form>
               {!!comments.length && comments.map(item => {
                    return <SingleComment key={item.id} data={item}/>
               })}
          </div>
     );
};

export default Comments;