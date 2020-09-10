import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
    console.log(token);
    alert('Payment Successfull');
}

const StripeCheckoutButton = ({price}) => 
{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HPkMVBf4AmbN1sAC3RZTUu0uaLhgwQWu64pEBzIuvzk0D9rT7093ZY2wlPXMuLSG26TOcqPbDDYLKIUbCGayBOl00rWQgcJEo';
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;