import React from 'react';
import ReactDOM from 'react-dom';
import Justification from './Justification.jsx';
import HardwareList from './HardwareList.jsx';
import Options from './Option.jsx';
import SvdCheck from './SvdCheck.jsx';
import OrderSummary from './OrderSummary.jsx';

export default class Content extends React.Component {
  constructor(){
    super();
    var userinfo;
    try {
      userinfo = JSON.parse(localStorage.info)
    }catch (e){
      userinfo = 'ok' //undefined
    }
    this.state = {
      justification: 'all',
      filterHardware: 'all',
      info: userinfo
    }

  }

  handleJustificationChange(option){
    this.setState({
      justification: option
    })
  }

  handleFilterChange(e){
    this.setState({
      filterHardware: e.target.value
    })
  }

  handleContinue(e){
    var elem = $('.hardwareItemHighlight');
    var order = {
      justification: $("#justification").val(),
      items: []
    }

    $('.hardwareItemHighlight').each(function(i, item){
      order.items.push(
        {
          id: $(item).data('id'),
          type: $(item).data('type'),
          quantity: $(item).find('input[type=number]').val(),
          name: $(item).data('name')
        }
      );
    });
    console.log(1, order);
    sessionStorage.setItem('order', JSON.stringify(order));
    this.postToServer();
  }

  postToServer(){
    console.log(2, 'post');
    var page_url = '/hardwarerequest/order'
    var items = JSON.parse(sessionStorage.order).items
    for(var i=0; i < items.length; i++){
      if (items[i].type==='Thin Client') {
        page_url = '/hardwarerequest/svdcheck'
        // for(var j=0; j<groups.length; j++){
        //   if((groups[j].indexOf('CCVO_BA') > -1) || (groups[j].indexOf('DVD') > -1)){
        //     page_url = '/hardwarerequest/ordersummary';
        //   }
        // }
      }
    }
    console.log(22, page_url);
    window.location.replace(page_url);
  }




  render(){
    if(this.state.info === undefined){
      return (
        <div className='container'>
          <div className='row'>
            <p>No user information found. Please ensure your NTID is correct.</p>
          </div>
        </div>
      )
    }
    var options = [{className:'filterClass', value:'all', option:'All'},
                   {className:'filterClass', value:'laptop', option:'Laptop'},
                   {className:'filterClass', value:'desktop', option:'Desktop'},
                   {className:'filterClass', value:'apple', option:'Apple'},
                   {className:'filterClass', value:'tablet', option:'Tablet'},
                   {className:'filterClass', value:'thinclient', option:'Thin Client'}]
                   .map(function(option, index, array){
                     return(<Options className={option.className} value={option.value} option={option.option} key={index} />)
                   })
    if(this.state.info.co === 'India'){
      options = [{className:'filterClass', value:'all', option:'All'},
                     {className:'filterClass', value:'laptop', option:'Laptop'},
                     {className:'filterClass', value:'desktop', option:'Desktop'},
                     {className:'filterClass', value:'apple', option:'Apple'},
                     {className:'filterClass', value:'tablet', option:'Tablet'}]
                     .map(function(option, index, array){
                       return(<Options className={option.className} value={option.value} option={option.option} key={index} />)
                     })
    }
    return(
      <div className='container'>
        <Justification location={this.state.info.co} handleJustificationChange={this.handleJustificationChange.bind(this)}/>

        <br />
        <div className='row'>
          <div className='col-md-2'>
            <select id='hardwarefilter' className='form-control' onChange={this.handleFilterChange.bind(this)}>
              {options}
            </select>
          </div>
        </div>

        <HardwareList filterHardware={this.state.filterHardware} justification={this.state.justification} location={this.state.info.co}/>

        <div className='row'>
          <div className='col-md-1'>
            <a href='/' className='btn btn--dismiss'>Cancel</a>
          </div>
          <div className='col-md-2'>
            <button className='btn btn-primary' id='continue_order' onClick={this.handleContinue.bind(this)}>Continue</button>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}

// if(window.location.pathname==='/hardwarerequest'){
//   ReactDOM.render(<Content />, document.getElementById('entry-point'));
// }
