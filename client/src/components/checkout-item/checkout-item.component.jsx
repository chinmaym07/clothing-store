import React from 'react';

import {connect} from 'react-redux';
import {clearItemFromCart ,addItem , removeItem} from '../../redux/cart/cart.actions';
import {
    CheckoutItemContainer,
    ImageContainer,
    StyledImage,
    NamePriceSpan,
    ArrowContainer,
    QuantityContainer,
    RemoveButtonContainer,
    ValueContainer
} from './checkout-item.styles';




const CheckoutItem = ({item , clearItem , addItem ,removeItem}) => {
    const {name,price , imageUrl , quantity} = item;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <StyledImage src={imageUrl} alt="item"/>
            </ImageContainer>
            <NamePriceSpan>{name}</NamePriceSpan>
            
            <QuantityContainer>
                <ArrowContainer onClick={()=>removeItem(item)}>&#10094;</ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={()=>addItem(item)}>&#10095;</ArrowContainer>
            </QuantityContainer>
            
            <NamePriceSpan>${price}</NamePriceSpan>
            <RemoveButtonContainer onClick={()=>clearItem(item)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))

})

export default connect(null,mapDispatchToProps)(CheckoutItem);