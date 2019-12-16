import React from 'react';
import data from './data/Data'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


class BuyPage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate
    }

  }

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

  }

  render(){
    const {currencies, currencyA, currencyB, currencyAval, currencyBval} = this.state;
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
            {/* <h3 className={`currency-flag ${currencyA.code}`}>{currencyA.name}</h3> */}
            <h3> I want to spend </h3>
            <InputGroup>
                
                <Input placeholder="Amount of Ksh" min={0} max={100000} type="number" step="1" value={currencyAval} pattern="\d\.\d{2}" onChange={(e) => 
                  {this.onChangeHandler(e, 'A');
                }}/>
                {/* <InputGroupAddon addonType="append">.00</InputGroupAddon> */}
                <InputGroupAddon addonType="prepend">{currencyA.code}</InputGroupAddon>
            </InputGroup>
            </Col>
            
            <Col md={5}>
            {/* <h3 className={`currency-flag ${currencyB.code}`}>{currencyB.name}</h3> */}
            <h3> To buy bitcoins </h3>
            <InputGroup>
                
                <Input placeholder="Amount of bitcoins" min={0} max={1000} type="number" step="1" value={currencyBval} pattern="\d\.\d{2}" onChange={(e) => {
                  this.onChangeHandler(e, 'B');
                  }}  />
                {/* <InputGroupAddon addonType="append">.00</InputGroupAddon> */}
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
    );
 }
}
export default BuyPage;
      
//           <div className="row">
//             <div className="col-sm-6 currency-from-input">
//               <h3 className={`currency-flag ${currencyA.code}`}>{currencyA.name}</h3>
             
//               </div>
//               <div className="input-group">
//                 <span className="input-group-addon">{currencyA.sign}</span>
//                 <input type="number" value={currencyAval} className="form-control" aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}" onChange={(e) => {
//                   this.onChangeHandler(e, 'A');
//                 }} />
//                 <span className="input-group-addon" id="basic-addon2">{currencyA.code}</span>
//               </div>

//             </div>
//             <div className="col-sm-6 currency-to-input">
//               <h3 className={`currency-flag ${currencyB.code}`}>{currencyB.name}</h3>
//               {
//                   //Currency B input
//               }
//               <div className="input-group">
//                 <span className="input-group-addon">{currencyB.sign}</span>
//                 <input type="number" value={currencyBval} className="form-control" aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"  onChange={(e) => {
//                   this.onChangeHandler(e, 'B');
//                 }}/>
//                 <span className="input-group-addon" id="basic-addon3">{currencyB.code}</span>
//               </div>

//             </div>
//           </div>
//           <div className="row">
//           <div className="col-sm-6">
//               <p>
//                 Exchange Rate: {`${currencyA.sellRate} ${currencyA.code}`} = {`${currencyB.sellRate} ${currencyB.code}`}
//               </p>
//               </div>
//               <div className="col-sm-6">
//               {/* <p>
//                 Exchange Rate: 1 {currencyB.code} = {`${currencyA.buyRate} ${currencyA.code}`}
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

