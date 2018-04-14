import React, { Component } from 'react';
import { getAddresses, sendNewAddress, updateChangeMessage } from '../actions';
import { connect } from 'react-redux';
import Login from '../noRedirect/login';
import CreateAccount from '../noRedirect/createAccount';
import AddressForm from '../noRedirect/addressForm';
import { Button,
         Checkbox
 } from 'react-bootstrap';

//name
//address
//apartment
//country
//zip
//additional info


 class makeOrder extends Component {

   constructor(props) {
   super(props);
   this.state = {nameValue: '', addressValue: '', apartmentValue: '', countryValue: '', zipValue: '', additionalValue: '', isDefaultValue: true};
   if (localStorage.getItem('token')) {
     this.props.getAddresses();
   }
   console.log(this.props.addresses);
 }


isDefaultChange() {
  console.log(this.state.isDefaultValue)
  if (this.state.isDefaultValue === true) {
  this.setState({isDefaultValue: false});
} else if (this.state.isDefaultValue === false) {
  this.setState({isDefaultValue: true});
}
}

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.nameValue.length < 2) {
      this.props.updateChangeMessage('you need to enter a name');
    } else if (this.state.addressValue.length < 2) {
      this.props.updateChangeMessage('please enter a valid address');
    } else {
      this.setState({nameValue: '', addressValue: '', apartmentValue: '', countryValue: '', zipValue: '', additionalValue: '', isDefaultValue: true});
      if (this.state.isDefaultValue === true) {
        this.props.sendNewAddress(
          this.state.nameValue,
           this.state.apartmentValue,
          this.state.addressValue,
           this.state.countryValue,
           this.state.zipValue,
           this.state.additionalValue,
           false);
    } else if (this.state.isDefaultValue === false) {
      this.props.sendNewAddress(
        this.state.nameValue,
         this.state.apartmentValue,
        this.state.addressValue,
         this.state.countryValue,
         this.state.zipValue,
         this.state.additionalValue,
         true);
    }
    }
  }

  checked(bool) {
   if (bool === true) {
     return (
     <Checkbox inline readOnly checked>is default</Checkbox>
     )
   } return (
     <Button>make default</Button>
   )
  }

renderImage() {
  console.log(this.props.imageUrl);
  console.log(localStorage.getItem('screenshot_url'));
  if (localStorage.getItem('screenshot_url') !== null) {
    return (
      <img src={this.props.imageUrl} alt="loaded" />
      )
    } return (
      <img src="/home/conlloc/btcbuy/btcbuyer/spiral.gif" alt="spinner" />
    )
  }

  render() {
     if (localStorage.getItem('token') === null) {
       return (
       <div>
         {this.renderImage()}
         <CreateAccount />
         <Login />
       </div>
     )
     }
     if (localStorage.getItem('token') !== null) {
       return (
       <div>
         {this.renderImage()}
         <AddressForm />
         this is where the order form goes
       </div>
     )
     }
   }
 }


const mapStateToProps = state => {
  console.log(state)
return {
  changeMessage: state.auth.changeMessage,
  addresses: state.auth.addresses,
  imageUrl: state.auth.orderImg
 };
};

export default connect(mapStateToProps, {
 getAddresses,
 sendNewAddress,
 updateChangeMessage
})(makeOrder);
