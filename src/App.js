import React from 'react'

import { ToastContainer } from 'react-toastify'

import { Banner } from './components/banner/Banner'
import 'react-toastify/dist/ReactToastify.css'
import './styles/global.scss'

function App() {
    return (
        <div className="App">
            <ToastContainer 
                hideProgressBar={false}
                autoClose={1000}
                position="top-left"
            />
            <Banner />
        </div>
    );
}

export default App;
