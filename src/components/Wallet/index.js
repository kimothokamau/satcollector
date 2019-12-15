import React from 'react';
import { Col, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const WalletPage = (props) => {
  return (
    <Container>
        <Form>
      <FormGroup row>
        <Label for="bitcoinBalance" sm={2}>Bitcoin balance</Label>
        <Col sm={10}>
          <Input type="email" name="bitcoinBalance" id="bitcoinBalance" placeholder="0.057 BTC" />
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
          <Input type="number" name="transactionCost" id="transactionCost" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup>
                
            <Button type="submit" color="primary" size="lg">
              Send
            </Button>
            </FormGroup>
    </Form>

    </Container>
    
  );
  }

export default WalletPage;