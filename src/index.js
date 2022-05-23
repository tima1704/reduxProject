import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { createRoot } from 'react-dom/client';
import { RootReducer } from './redux/RootReducer';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
const container = document.getElementById('root');
const store = createStore(RootReducer, compose(
     applyMiddleware(
          thunk
     ),
     window.__REDUX_DEVTOOLS_EXTENSION__
     ? window.__REDUX_DEVTOOLS_EXTENSION__()
     : f => f
));
const root = createRoot(container);
root.render(<Provider store={store}> <App/> </Provider>);