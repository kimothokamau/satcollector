import React, { Component } from 'react';
import data from './data/Data'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


// class BuyPage extends React.Component {
export class BuyPage extends Component {

    state = {
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate
    }

  onChangeHandler(e, currency){

    const {currencyB} = this.state;

    if(currency === 'A'){
      
      const newValueA = e.target.value;
      this.setState({
        currencyAval: newValueA,
        currencyBval: newValueA * currencyB.sellRate
      })

    } else if(currency === 'B'){
      
      const newValueB = e.target.value;
      this.setState({
        currencyAval: newValueB / currencyB.sellRate,
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
                
                <Input placeholder="Amount of Ksh" min={0} max={100000} type="number" step="any" value={currencyAval}  onChange={(e) => 
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
              
              <Input placeholder="Amount of bitcoins" max={1000} type="number" step="any" value={currencyBval}  onChange={(e) => {
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


