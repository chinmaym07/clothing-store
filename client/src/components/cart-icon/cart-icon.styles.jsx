import styled from 'styled-components';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'; 
export const CartIconContainer = styled.div`
    height: 45px;
    width: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
    height: 24px;
    width: 24px;
`;
export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;