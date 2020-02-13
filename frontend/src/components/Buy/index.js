import React, { Component } from 'react';
import pesa from './data/Data';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input,InputGroup, InputGroupAddon} from 'reactstrap';
import {btckesapiurl} from '../../config'; 



export class BuyPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      currencyA: pesa.currencies[0],
      currencyB: pesa.currencies[1],
      currencyAval: pesa.currencies[0].initial,
      currencyBval: pesa.currencies[1].initial,
      rate: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  /// Using fetch /techiediaries
  componentDidMount () {
    fetch(`${btckesapiurl}$/rate`)
      .then(response => response.json())
      .then((data) => {
        this.setState({ rate: data.btckes });
        console.log(data)
        console.log(this.state.rate)
  })
  
  }


  onChangeHandler(e, currency){
  
    const {currencyA, rate} = this.state;
    const btcformat = (x) => Number.parseFloat(x).toFixed(8).toLocaleString();

    function currencyFormat(num) {
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    if(currency === 'A'){
      const newValueA = e.currentTarget.value;
      const rate = this.state;
      this.setState({
        currencyAval: newValueA,
        currencyBval:btcformat(newValueA / this.state.rate)
    
      })

    } else if(currency === 'B'){
      const newValueB = e.currentTarget.value;
      const rate = this.state;
      this.setState({
        currencyAval: currencyFormat(newValueB * this.state.rate),
        currencyBval: newValueB,
        
      })

    }

  };

  componentDidMount () {
    fetch('http://localhost:3001/rate',{
    headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
      })
      .then(response => response.json())
      .then((data) => {
        this.setState({ rate: data.btckes });
        console.log(data)
        console.log(this.state.rate)
  })
  
  }

  render(){
    const {currencyA, currencyB, currencyAval, currencyBval, rate,newValueA, newValueB} = this.state;
   
    return (
      <Container>
      <Form>
      <Row>
         <Col sm="12" md={{ size: 6, offset: 3 }}><h2>Buy bitcoins via M-Pesa</h2></Col>
      </Row>
      <br/>
      <br/>
      <br/>

      <Row form>
          <Col md={5}>
            <FormGroup>
            <Label for="exampleEmail">I want to spend</Label>
            </FormGroup>

            <InputGroup>
                
                <Input placeholder="Amount of Ksh" step="0.01" value = {currencyAval} type={Number} onChange={(e) => 
                  {this.onChangeHandler(e, 'A');
                }}/>
                <InputGroupAddon addonType="prepend">{currencyA.code}</InputGroupAddon>
            </InputGroup>
          </Col>
          
          <Col md={5}>
            <FormGroup>
            <Label for="exampleEmail">I want to buy</Label>
            </FormGroup>
  
          <InputGroup>
              
              <Input placeholder="Amount of bitcoins" max={1000} step="any" value={currencyBval} type= {Number} onChange={(e) => {
                this.onChangeHandler(e, 'B');
                }}  />
    
              <InputGroupAddon addonType="prepend">{currencyB.code}</InputGroupAddon>
          </InputGroup>
          </Col>
      </Row>
      <br/>
      <br/>
      
      <FormGroup>
        <Button type="submit" color="primary" size="lg">
          NEXT
        </Button>
      </FormGroup>
      <br/>

      <Row>
          {/* <Col md={6}>
            <p>
              Exchange Rate: {`${currencyA.sellRate} ${currencyA.code}`} = {`${1/rate} ${currencyB.code}`}
            </p>
          </Col> */}

          <Col md={12}>
            <p>
            Exchange Rate: 1 {currencyB.code} = {`${rate} ${currencyA.code}`}
            </p>
          </Col>
      </Row>
      </Form>
      

  </Container>
  );
 }
}
export default BuyPage;


