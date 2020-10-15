import React from 'react';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    ImageContainer,
    NameContainer,
    PriceContainer,
    CustomButtonContainer
    } from './collection-item.styles';

import {connect} from 'react-redux';
import {addItem , removeItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item,addItem})=> {
    const {id,name,price,imageUrl} = item;
    return (
        <CollectionItemContainer key={id}>    
            <ImageContainer style={{backgroundImage:`url(${imageUrl})`}}>
            </ImageContainer>
            
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>  
            <CustomButtonContainer inverted onClick={()=> addItem(item)}>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer>
    );

}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => (dispatch(addItem(item))),
    removeItem: (item) => (dispatch(removeItem(item)))
})

export default connect(null , mapDispatchToProps)(CollectionItem);