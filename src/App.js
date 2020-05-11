import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from "./components/CakeContainer";
import { HooksCakeContainer } from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import DynamicCakeContainer from "./components/DynamicCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <DynamicCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
