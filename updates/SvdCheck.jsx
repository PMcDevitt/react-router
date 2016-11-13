import React from 'react';
import ReactDOM from 'react-dom';

export default class SVD_Check extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className='container'>
        <div className='row'>
          <p>You have ordered a Thin Client device and it has been detected that your NTID is not associated with a SVD or DVD account which is required for this device.</p>
          <p>Please use the catalog service <a target='_blank' href='https://allstate.service-now.com/nav_to.do?uri=%2Fcom.glideapp.servicecatalog_cat_item_view.do%3Fv%3D1%26sysparm_id%3D2f4a015625617100d0a001b5ab7a40e3%26sysparm_link_parent%3Ddb105a9441e474004e89d3a4eb4fad0d%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4%26sysparm_catalog_view%3Dcatalog_default%26sys_id%3D2f4a015625617100d0a001b5ab7a40e3'>
            <strong>Shared Virtual Desktop (SVD) Software - Request Access</strong></a> to order one. (Service reqeust will open in a new window)
          </p>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <a className='btn btn-primary' href="/hardwarerequest/order">Continue With Order</a>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}

// if(window.location.pathname==='/hardwarerequest/svdcheck'){
//   ReactDOM.render(<SVD_Check />, document.getElementById('entry-point'));
// }
