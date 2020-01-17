import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import data from './data/Data'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


// class BuyPage extends React.Component {
export class BuyPage extends Component {

  // constructor(props){
  //   super(props);

    state = {
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].initial,
      currencyBval: data.currencies[1].initial
    }

  // }

  onChangeHandler(e, currency){

    const {currencyA} = this.state;
    const kshformat = (x) => Number.parseFloat(x).toFixed(2).toLocaleString();
    const btcformat = (x) => Number.parseFloat(x).toFixed(8).toLocaleString();

    function currencyFormat(num) {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    if(currency === 'A'){
      
      const newValueA = e.target.value;
      // roundTo(newValueA, 2)
      this.setState({
        currencyAval: newValueA,
        currencyBval: btcformat(newValueA / currencyA.buyRate)
      })

    } else if(currency === 'B'){
      
      const newValueB = e.target.value;
      this.setState({
        currencyAval: currencyFormat(newValueB * currencyA.buyRate),
        currencyBval: newValueB
      })

    }

  }

  render(){
    const {currencyA, currencyB, currencyAval, currencyBval} = this.state;
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
                
                <Input placeholder="Amount of Ksh" step="0.01" value ={currencyAval} type={Number} onChange={(e) => 
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
          <Col md={6}>
            <p>
              Exchange Rate: {`${currencyA.sellRate} ${currencyA.code}`} = {`${currencyB.sellRate} ${currencyB.code}`}
            </p>
          </Col>

          <Col md={6}>
            <p>
              Exchange Rate: 1 {currencyB.code} = {`${currencyA.buyRate} ${currencyA.code}`}
            </p>
          </Col>
      </Row>
      </Form>
      

  </Container>
  );
 }
}
export default BuyPage;


