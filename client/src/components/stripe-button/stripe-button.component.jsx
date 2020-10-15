import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price}) => 
{
    const finalPrice = price * 100;
    const publishableKey = 'pk_test_51HPkMVBf4AmbN1sAC3RZTUu0uaLhgwQWu64pEBzIuvzk0D9rT7093ZY2wlPXMuLSG26TOcqPbDDYLKIUbCGayBOl00rWQgcJEo';

    const onToken = (token) => {
        axios({
          method:'post',
          url:'/payment',
          data:{
            amount:finalPrice,
            token
          }
        }).then(response => {
          alert("Payment Successful")
        }).catch(error => {
          console.log('Payment Error :- ',error);
          alert("There was an issue with your payment . Please use the correct credit card");
        })
      };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={finalPrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;