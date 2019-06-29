import styled from 'styled-components';

export default styled.main`
    max-width: 1260px;
    margin: 40px auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    
    @media screen and (min-width: 900px) {
        flex-direction: row;
        padding: 0 50px; 
    }
`;