import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
width: 70px;
height: 100%;
padding: 25px;

`;


export const OptionsContainer = styled.div`
    width: 50%;
    display: flex;
    height: 100%;
    align-items:center ;
    justify-content: flex-end;
`;


export const OptionLink = styled(Link)`
    padding :10px 15px;
    cursor: pointer;
`;
