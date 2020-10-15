import React from 'react';

import {CartItemContainer , StyledImage , ItemDetailsContainer} from './cart-item.styles';

const CartItem = ({item : {imageUrl , id , quantity , price , name}}) => (
    <CartItemContainer>
        <StyledImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default React.memo(CartItem);