import React from 'react';
import '../collection-item/collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem , removeItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item,addItem , removeItem})=> {
    const {id,name,price,imageUrl} = item;
    return (
        <div className="collection-item" key={id}>    
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}>
            </div>
            
            <div className="collection-footer" >
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>  
            <CustomButton inverted onClick={()=> addItem(item)}>ADD TO CART</CustomButton>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => (dispatch(addItem(item))),
    removeItem: (item) => (dispatch(removeItem(item)))
})

export default connect(null , mapDispatchToProps)(CollectionItem);