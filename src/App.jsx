import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detail from './components/Detail';
import Featured from './components/Featured';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
       <BrowserRouter>

        <Routes>
          <Route exact path = '/' element={<Featured/>}> </Route>
          <Route exact path = '/detail/:id' element={<Detail/>}> </Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App