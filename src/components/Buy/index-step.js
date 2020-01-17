import React, { Component } from 'react';
import data from './data/Data'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


// class BuyPage extends React.Component {
export class BuyPage extends Component {

    state = {
      step: 1,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate
    }

    // Proceed to next step

  
    nextStep =  () => {
      const { step} = this.state;
      this.setState({
        step: step + 1
      });
    }

    // Go back to previous step

    prevStep =  () => {
      const { step} = this.state;
      this.setState({
        step: step - 1
      });
    }

    // Handle fields change


};

  onChangeHandler(e, currency){

    const {currencyA, currencyB} = this.state;

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

  };

  render() {
    const { step } = this.state
    const {currencyA, currencyB, currencyAval, currencyBval} = this.state;
    const values = { currencyAval, currencyBval };
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
                      
                      <Input placeholder="Amount of Ksh" min={0} max={100000} type="number" step="any" placeholder=" 0 " value={currencyAval}  onChange={(e) => 
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
                    
                    <Input placeholder="Amount of bitcoins" max={1000} type="number" step="any" placeholder=" " value={currencyBval}  onChange={(e) => {
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
                BUY
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
    )
  };
export default BuyPage;