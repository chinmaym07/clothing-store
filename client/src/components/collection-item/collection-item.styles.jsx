import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CustomButtonContainer = styled(CustomButton)`
    width: 70%;
    opacity: 0.7;
    position: absolute;
    top: 300px;
    display: none;
    @media screen and (max-width:800px)
    { 
        display:block;
        opacity: 0.9;
        min-width:unset;
        padding: 0px 10px;
        
    }
`;
export const ImageContainer = styled.div`

    display: flex;
    margin-bottom: 5px;
    width: 100%;
    height:90%;
    background-size: cover;
    background-position: center;

`;
export const CollectionItemContainer = styled.div`

    height: 500px;
    display: flex;
    flex-direction: column;
    width:22vw;
    align-items: center;
    position: relative;
    
    &:hover 
    {

        ${ImageContainer} 
        {
            opacity: 0.8;
        }
        
        ${CustomButtonContainer}
        {
            display: flex;
            opacity: 0.85;
        }
    }
    @media screen and (max-width:800px){
        width:45vw;
        &:hover 
        {

            ${ImageContainer} 
            {
                opacity: unset;
            }
            
            ${CustomButtonContainer}
            {
                display: flex;
                opacity: unset;
            }
        }
    }
    @media screen and (min-width:801px) and (max-width:1200px){
        width:31vw;
        &:hover 
        {

            ${ImageContainer} 
            {
                opacity: unset;
            }
            
            ${CustomButtonContainer}
            {
                display: flex;
                opacity: unset;
            }
        }
}
`;



export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-size:18px;
`;

export const NameContainer = styled.span`
    font-weight: bold;
    width: 90%;
    color:#4a4a4a;
    margin-bottom: 15px; 
    @media screen and (max-width:800px)
    { 
        width: 85%;
    }
`;
export const PriceContainer = styled.span`
 
    width: 10%;
    font-weight: bold;
    color:#4a4a4a; 
    @media screen and (max-width:800px)
    { 
        width: 15%;
    }
`;

