import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Order from './components/Order';

function App() {
  return (
    
      <div className="App">
        <div className="container-fluid">
              <div className='form-row'>
                  <div className='form-group col mt-2'>
                    <label for='telefono' className='font-weight-bold'>Nome</label>  
                  </div>
                  <div className='form-group col mt-2'>
                    <label for='telefono' className='font-weight-bold'>Telefono</label>  
                  </div>
                  <div className='form-group col mt-2'>
                    <label for='telefono' className='font-weight-bold'>Ordine</label>  
                  </div>
                  <div className='form-group col mt-2'>
                    <label for='telefono' className='font-weight-bold'>Stato</label>  
                  </div>
                  <div className='form-group col mt-2'>
                    <label for='telefono' className='font-weight-bold'>Prezzo</label>  
                  </div>
                </div>
                <Order></Order>
          </div>
      </div>
  );
}

export default App;
