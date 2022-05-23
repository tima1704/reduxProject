import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from '../redux/Actions';
const Likes = (props) => {
     return (
          <div className='button-controls'>
               <button onClick={props.onInkrementLikes}> ♥ {props.likes}</button>
               <button onClick={props.onDecrementLikes}>Dislike</button>
          </div>
     );
};

function mapStateToProps(state) {
     const { likesReducer } = state;
     return {
          likes: likesReducer.likes
     }
}

function mapDispatchToProps(dispatch){
     return {
          onInkrementLikes: () => dispatch(incrementLikes()),
          onDecrementLikes: () => dispatch(decrementLikes())
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Likes);