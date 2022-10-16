
import './App.css';
import Aside from './components/Aside';

import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Auth from './components/Auth';
// const Main = React.lazy(() => import('./components/Main'));

function App() {
  return (
    <BrowserRouter>



      <Routes>
        
       
        <Route path='/login' element={<Login></Login>}></Route>

       
        <Route path='/signup' element={<Signup/>}></Route>
        <Route element={<Auth></Auth>}>
          <Route path='/*' element={<Aside></Aside>}></Route>
        </Route>
        
      </Routes>


    </BrowserRouter>
  );
}

export default App;
