import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';    
export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    right: 0;
    top: 80px;
    z-index: 5;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction:column;
    overflow-block: auto;
    overflow-x: hidden;
`;


export const CustomButtonContainer = styled(CustomButton)`
    margin-top: auto;
`;

export const MessageContainer = styled.span`
    margin: 70px auto;
    font-size: 18px;
`;