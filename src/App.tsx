import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import {Capacities} from "./components/Capacities/Capacities";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Capacities/>
            </div>
        </Provider>
    );
}

export default App;
