import styled  from 'styled-components';


export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align:left;
    margin-bottom: 30px;
    @media screen and (max-width:800px)
    {
        align-item:center;
    }
`;


export const TitleContainer = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor:pointer;
    &:hover
    {
        color:gray;
        opacity:0.8;

    }
    @media screen and (max-width:800px)
    {
      text-align:center;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:800px)
    {
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:15px
    }
    @media screen and (min-width:801px) and (max-width:1200px)
    {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:15px
      
    }
`;