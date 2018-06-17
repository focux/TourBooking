import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PayPalButton = paypal.Button.driver('react', {
  React,
  ReactDOM
});

class PaypalButton extends Component {
    state = {
      env: 'sandbox',
      client: {
        sandbox: 'Ad3ggzxy08U6L0T_cwS-dclhyT5oaraN2DW9OIZh2BbfE9_Og4e6waRPElr2V-IOmfY2uvo1FP0kG8hQ',
        production: 'Ae21hqP9531E01besU94Ae00iqTtD8SbITrMGPyNmAmsQ-wL7mXwy_4-T63kxGAgIpgu7-0g-MiVlkls'
      },
      commit: true
    };

    onAuthorize = (data, actions) => actions.payment.execute().then((paymentData) => {
      console.log('AQUI PAYMENT DATA', data);
      this.props.onAuthorize(data);
    });

    payment = (data, actions) => actions.payment.create({
      transactions: [{
        amount: {
          total: '0.30',
          currency: 'USD'
        }
      }]
    });

    render() {
      return (
        <PayPalButton
          commit={this.state.commit}
          env={this.state.env}
          client={this.state.client}
          payment={(data, actions) => this.payment(data, actions)}
          onAuthorize={(data, actions) => this.onAuthorize(data, actions)}
          locale="es_DO"
          style={{
            size: 'responsive',
            layout: 'vertical',
            branding: true
          }}
          funding={{ allowed: [paypal.FUNDING.CARD] }}
          fundingicons
        />
      );
    }
}

export default PaypalButton;
