import React, { Component } from 'react'
import DonatedNumber from './donatedNumber';
import BankStatements from '../components/BankStatements';
import CardPurchase from '../components/CardPurchase';

import ReactBootstrap, {ButtonToolbar, Button, Modal} from 'react-bootstrap'

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CardPurchase />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export class donate extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
      modalShow: false,
      displayPurchase: false,
      totalDonated: 0,
      bankStatements : [
      {
        charge: 21.35,
      },
      {
        charge: 34.40
      },
      {
        charge: 5.24
      }
      ]
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  calculateRound = (charge) => {
    return Math.round(charge)
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
        <div>
            <h1 >Donations</h1>
            <DonatedNumber />
            <BankStatements bankStatements={this.state.bankStatements}/>
            <ButtonToolbar>
            <Button
              variant="primary"
              onClick={() => this.setState({ modalShow: true })}
            >
              Make a donation
            </Button>

            <MyVerticallyCenteredModal
              show={this.state.modalShow}
              onHide={modalClose}
            />
            </ButtonToolbar>
        </div>
    )
  }
}
export default donate
