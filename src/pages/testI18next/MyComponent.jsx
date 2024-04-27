import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class MyComponent extends Component {

  getLang = ()=>{

   return   this.props.i18n.language;
 }

  translat =(kye)=>{
    return this.props.t(kye);
  }
  render() {
    return (
      <div>
        <h1>{this.translat('hello')}</h1> {/* Using the renamed 'translate' function */}
        <p>Current language: {this.getLang()}</p>
        <input type='number'   />
      </div>
    );
  }
}

export default withTranslation()(MyComponent);

