import React, { Component } from 'react';
import { getAddresses, sendNewAddress, updateChangeMessage } from '../actions';
import { connect } from 'react-redux';
import { Form,
         FormGroup,
         Col,
         ControlLabel,
         FormControl,
         Button,
         HelpBlock,
         Grid,
         Row,
         Checkbox
 } from 'react-bootstrap';

//name
//address
//apartment
//country
//zip
//additional info


 class addressForm extends Component {

   constructor(props) {
   super(props);
   this.state = {nameValue: '', addressValue: '', apartmentValue: '', countryValue: '', zipValue: '', additionalValue: '', isDefaultValue: true};
   this.props.getAddresses();
   this.nameChange = this.nameChange.bind(this);
   this.addressChange = this.addressChange.bind(this);
   this.apartmentChange = this.apartmentChange.bind(this);
   this.countryChange = this.countryChange.bind(this);
   this.zipChange = this.zipChange.bind(this);
   this.additionalChange = this.additionalChange.bind(this);
   this.isDefaultChange = this.isDefaultChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }


nameChange(event) {
    this.setState({nameValue: event.target.value});
  }

addressChange(event) {
    this.setState({addressValue: event.target.value});
  }

 apartmentChange(event) {
     this.setState({apartmentValue: event.target.value});
   }

countryChange(event) {
  this.setState({countryValue: event.target.value});
}

zipChange(event) {
  this.setState({zipValue: event.target.value});
}

additionalChange(event) {
  this.setState({additionalValue: event.target.value});
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

 returnAddresses() {

   if (this.props.addresses.objects !== undefined) {
     const addressesToMap = this.props.addresses.objects
   return (
     <Grid style={{ marginTop: '5%', marginBottom: '3%'}}>
       <Row className="show-grid">
       {addressesToMap.map((object, i) =>
         <div style={{colStyle}} key={i}>

        <Col sm={6} md={3} key={i} style={{"borderWidth":"1px", 'borderRadius': '3%',  'borderStyle':'solid', margin: '1%'}}>
          <br />
          {object.name} <br />
          {object.address} <br />
          {object.apartment}<br />
          {object.country}<br />
           {object.zipCode}<br />
           {object.additionalInfo}
           <FormControl>
           <Checkbox >
           <FormControl
          <br />
        </Col>
        </div>
       )}
       </Row>
     </Grid>

 )
}
 }


   render () {
   return (
    <div style={divStyle}>
    <Grid>
      <Row className="show-grid">
       {this.returnAddresses()}
      </Row>
    </Grid>
  <Form horizontal onSubmit={this.handleSubmit}>
  <FormGroup  >
    <Col componentClass={ControlLabel} sm={2}>
      name
    </Col>
    <Col sm={3}>
      <FormControl value={this.state.nameValue} onChange={this.nameChange} type="text" placeholder="john smith" />
    </Col>
  </FormGroup>

   <FormGroup controlId="formHorizontalPassword" >
     <Col componentClass={ControlLabel} sm={2}>
       address
     </Col>
     <Col sm={2}>
       <FormControl value={this.state.addressValue} onChange={this.addressChange} componentClass="textarea" placeholder="1000 Wayne Manor         Gotham City, USA" />
     </Col>
   </FormGroup>
   <FormGroup controlId="formHorizontalPassword12">
     <Col componentClass={ControlLabel} sm={2}>
      apartment
     </Col>
     <Col sm={3}>
       <FormControl value={this.state.apartmentValue} onChange={this.apartmentChange} type="text" placeholder="b5" />
     </Col>
   </FormGroup>
   <FormGroup controlId="formHorizontalPassword12" >
     <Col componentClass={ControlLabel} sm={2}>
      country
     </Col>
     <Col sm={4}>
       <FormControl value={this.state.countryValue} onChange={this.countryChange} type="text" placeholder="country" />
     </Col>
   </FormGroup>
   <FormGroup controlId="formHorizontalPassword12" >
     <Col componentClass={ControlLabel} sm={2}>
      zip code
     </Col>
     <Col sm={2}>
       <FormControl value={this.state.zipValue} onChange={this.zipChange} type="text" placeholder="zip code" />
     </Col>
   </FormGroup>
   <FormGroup controlId="formHorizontalPassword12" >
     <Col componentClass={ControlLabel} sm={2}>
      additional info
     </Col>
     <Col sm={3}>
       <FormControl value={this.state.additionalValue} onChange={this.additionalChange} componentClass="textarea" placeholder="additional info" />
     </Col>
   </FormGroup>
   <HelpBlock>{this.props.changeMessage}</HelpBlock>
   <FormGroup>
     <Col smOffset={0} sm={10}>
       <Button type="submit">Save Address</Button>
     </Col>
   </FormGroup>
 </Form>
 </div>
   )
 }
 }

 const divStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '5%'
 };

 const colStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 0.5
 };

const mapStateToProps = state => {
  console.log(state)
return {
  changeMessage: state.auth.changeMessage,
  addresses: state.auth.addresses
 };
};

export default connect(mapStateToProps, {
 getAddresses,
 sendNewAddress,
 updateChangeMessage
})(addressForm);
