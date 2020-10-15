import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerContainer = styled.div`
    height: 50px;
    width: 50px;
    display: inline-block;
    border: 5px solid rgba(195,195,195,0.6);
    border-radius:50%;
    border-top-color:#636767;
    animation:spin 1s ease-in-out infinite;
    -webkit-animation:spin 1s ease-in-out infinite;

    @keyframes spin {
        from{
            -webkit-transform:rotate(0deg);
        }
        to{
            -webkit-transform:rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        from{
            -webkit-transform:rotate(0deg);
        }
        to{
            -webkit-transform:rotate(360deg);
        }
    }
`;

