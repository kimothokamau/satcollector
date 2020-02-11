import React, { Component } from 'react';
import pesa from './data/Data';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input,InputGroup, InputGroupAddon} from 'reactstrap';

export class BuyPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      currencyA: pesa.currencies[0],
      currencyB: pesa.currencies[1],
      currencyAval: pesa.currencies[0].initial,
      currencyBval: pesa.currencies[1].initial,
      rate: [980000],
    };
  }







  /// Using fetch /techiediaries
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
    // .catch(console.log)
  }

  

  // componentDidMount () {
  //   this.rate()
  //     .then(res => this.setState({ response: res.rate }))
  //     .catch(err => console.log(err));
  // }


  
//   rate = async () => {
//     const response = await fetch('/rate');
//     const body = await response.json();
//     if (response.status !== 200 ) throw Error(body.message);
//     return body;
// }

  onChangeHandler(e, currency){
    // const rate = this.state;

    const {currencyA} = this.state;
    // // const kshformat = (x) => Number.parseFloat(x).toFixed(2).toLocaleString();
    const btcformat = (x) => Number.parseFloat(x).toFixed(8).toLocaleString();
    // const kshbtc = currencyFormat(currencyA.buyRate);

    function currencyFormat(num) {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    if(currency === 'A'){
      const rate = this.state;
      const newValueA = e.target.value;
      // roundTo(newValueA, 2)
      this.setState({
        currencyAval: newValueA,
        currencyBval: btcformat(newValueA / currencyA.buyRate)
    
      })

    } else if(currency === 'B'){
      
      const newValueB = e.target.value;
      const rate = this.state;
      this.setState({
        currencyAval: currencyFormat(newValueB * currencyA.buyRate),
        currencyBval: newValueB
      })

    }

  };

  render(){
    const {currencyA, currencyB, currencyAval, currencyBval, rate} = this.state;
   
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


