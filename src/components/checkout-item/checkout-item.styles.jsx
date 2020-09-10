import styled from 'styled-components';



export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom:1px solid darkgray;
    padding:15px 0px;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    margin:5px 0px 5px;
`;

export const StyledImage = styled.img`
    height:100%;
    width: 100%;
`;

export const QuantityContainer = styled.span`
    display: flex;
    justify-content: center;
    width:23%;

` 
export const NamePriceSpan = styled.span`
    width:23%;
`;

export const ValueContainer = styled.div`
    margin: 0 10px;
`;

export const ArrowContainer = styled.div`
    margin-top:-1px;
    cursor: pointer;
`;

export const RemoveButtonContainer = styled.div`
    font-size:24px;
    width: 8%;
    padding: 12px;
    cursor: pointer;
`;