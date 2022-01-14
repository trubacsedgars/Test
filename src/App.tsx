import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Data} from "./components/Data/Data";
import {Form} from "./components/Form/Form";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Data />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;
