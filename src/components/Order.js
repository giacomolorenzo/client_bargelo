import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Order extends Component{
    constructor(props){
        super(props);
        this.state={apiResponse:"",
                    jsonDatas: "",
                    value: '?'};
    }

    componentDidMount(){
        this.callAPI();
    }

callAPI(){
     fetch("http://localhost:5000/orders")
    .then(response => response.json())
  .then((jsonData) => {
      const items = [];
    // jsonData is parsed json object received from url
    console.log(jsonData)

  for (const [index, value] of jsonData.entries()) {
    items.push(
        <div className='form-row' id={value._id}>
            <div className='form-group col mt-6'>
             <input type='text' id={'name_'+value._id} name='name' value={value.user} readOnly  className='form-control shadow p-1  bg-white rounded' />
            </div>
            <div className='form-group col mt-6'>
             <input type='text' id={'telefono_'+value._id}  name='telefono' value={value.phone} readOnly  className='form-control shadow p-1  bg-white rounded' />
            </div>
            
            <div className='form-group col mt-6'>
             <input type='text' id={'ordine_'+value._id} name='ordine' value={value.message} readOnly className='form-control shadow p-1  bg-white rounded' />
            </div>
            
            <div className='form-group col mt-6'>
             <select id={'selection_'+value._id} name='stato' className='form-control shadow p-1  bg-white rounded' onChange={this.handleChange} >
                <option value="Aperto" selected>Aperto</option>
                <option value="Gestito">Gestito</option>
                <option value="Chiuso">Chiuso</option>
                <option value ="Pagato">Pagato</option>
             </select>
            </div>
            
            <div className='form-group col mt-6'>
             <input type='text'  id={'prezzo_'+value._id} name='prezzo' value={value.prezzo}  className='form-control shadow p-1  bg-white rounded' />
            </div>
            </div>
    )
    }
    this.setState({apiResponse:items});
    this.setState({jsonDatas:jsonData});
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
}
handleChange = (event) => {
    console.log(event.target.value+ " " +event.target.id)
    const id = event.target.id.replace("selection_", "");
    
    this.setState({ value: event.target.value });
    let json = this.state.jsonDatas
    console.log(json)
    for (const [index, value] of json.entries()) {
      if(value._id == id){
        //to do put orders
      }
  }
}
render(){
    return (
        <div>
            {this.state.apiResponse}
        </div>
    )
}
}

export default Order;