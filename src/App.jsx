import './App.css';
import Likes from './Components/Likes';
import Title from './Components/Title';
import Comments from './Components/Comment/Comments'
const App = () => {;
     return (
          <div className="App">
          <div className="wrap">
            <div className="card">
              <div className="card-image">
                <img src="./sea.jpg" alt="surfing"/>
                <Title/>
                <Likes/>
              </div>
            <Comments/>
            </div>
          </div>
        </div>
     );
};

export default App;