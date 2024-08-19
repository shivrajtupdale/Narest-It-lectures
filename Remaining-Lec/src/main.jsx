import React from 'react'
import ReactDOM from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import './index.css'
// import { Home } from './Components/PropsExamples/Home';
// import Counter2 from './Components/useReducer/Example2/Counter2';

// import { ReducerExample1 } from './Components/useReducer/Example1';
// import Counter2 from './Components/useReducer/Example2/Counter2';
import {Provider} from "react-redux";
import store from './Components/useRedux';
import { App } from './App';

//?normally this is the code

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     < Home/>
//   </React.StrictMode>
//   );

  //? for Redux we use provider
  //?Import provider

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <React.StrictMode>
      < App/>
    </React.StrictMode>
    </Provider>
    );
  