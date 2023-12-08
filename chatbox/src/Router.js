import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chatbox from './component/chatBox';
import Table from './component/Table';
import Login from './component/login';
import { Provider } from 'react-redux';
import store from './Redux/store';

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <RouteGuard path ='/home' component = {Home} />
          <Route path='/404' componet={Home} />
          <Route path='/home' element={<Home />} />
          <Route path='/chatBox' element={<Chatbox />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default Router;