import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Row = styled.tr`
    &:hover {
        background-color: rgb(60, 142, 210);       
        font-weight: bold;        
    }    
    cursor: pointer;
    height: 2em;        
`;

export const RowCity = styled.td`
    padding: 1em;    
`;

export const StyledLink = styled(Link)`  
    text-decoration: none;   
    color: #000000;    
`;
