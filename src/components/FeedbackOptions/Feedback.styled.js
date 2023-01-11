import styled from 'styled-components';

export const ButtonContainer = styled.div`
display: flex;
gap: 20px;
justify-content: center;
`;

export const Button = styled.button`
margin: 0 5px;
padding: 5px 10px;
font-size: 25px;
font-weight: 600;
border: none;
border-radius: 15%;
background-color: pink;
&:hover,
&:focus {
    background: darkred;
}
`;