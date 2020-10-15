import React from 'react';
 
import {
    CartDropdownContainer,
    CartItemsContainer,
    CustomButtonContainer,
    MessageContainer
    } from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden }  from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems , history , dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? cartItems.map(item => (
                    item !== null ?<CartItem key={item.id} item={item}/>:null
                ))
                :
                <MessageContainer>Your Cart is empty</MessageContainer>
            }
            
        </CartItemsContainer>
        <CustomButtonContainer onClick={()=> {
            history.push(`/checkout`);
            dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT
        </CustomButtonContainer>
    </CartDropdownContainer>

)

const mapStatetoProps = createStructuredSelector({
    cartItems:selectCartItems
})  


export default withRouter(connect(mapStatetoProps)(CartDropdown));