import React from 'react';
import { Col, Container, Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const WalletPage = (props) => {
  return (
    <Container>
     <Form>
      <FormGroup row>
        <Label for="bitcoinBalance" sm={2}>Bitcoin balance</Label>
        <Col sm={10}>
          <Input type="text" name="sendTo" id="sendTo" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="sendTo" sm={2}>Send to</Label>
        <Col sm={10}>
          <Input type="text" name="sendTo" id="sendTo" placeholder="" />
          
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="amount" sm={2}>Amount</Label>
        <Col sm={10}>
          <Input type="number" name="amount" id="amount" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="transactionCost" sm={2}>Transaction cost</Label>
        <Col sm={10}>
          <Input type="text" name="sendTo" id="sendTo" placeholder="" />
          </Col>
      </FormGroup>
      <FormGroup>    
        <Button type="submit" color="primary" size="lg">
            Send
        </Button>
      </FormGroup>
      <FormGroup>
          <td></td>
      </FormGroup>
    </Form>

    </Container>
    
  );
  }

export default WalletPage;