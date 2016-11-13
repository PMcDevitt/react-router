'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import OrderedItem from './OrderedItem.jsx'

export default class OrderSummary extends React.Component{
  constructor(){
    super();
    this.state = {
      order: JSON.parse(sessionStorage.order),
      items: []
    }
  }
  _displaySelectedItems(){
    return this.state.order.items.map(function(item, index, array){
      return (
        <OrderedItem key={item.id} name={item.name} id={item.id} quantity={item.quantity}/>
      )
    });
  }
  render(){
    return (
      <div className='container'>
        <div className='row'>
          {this._displaySelectedItems()}
        </div>
      </div>
    )
  }
}

// if(window.location.pathname==='/hardwarerequest/ordersummary'){
//   ReactDOM.render(<OrderSummary />, document.getElementById('entry-point'));
// }
