import styled from 'styled-components';

export default styled.div`
    line-height: 22px;
    
    h1:first-of-type {
        margin-top: 2em;
    }
    
    h1 {
        margin-top: 1.5em;
    }
    
    p {
        margin: 0;
        font-size: 14px;
        line-height: 23px;
    }
    
    p + p {
        margin-top: 1.5em;
    }
    
    figure {
        margin: 14px -30px;
        width: calc(100% + 59px);
        
        img {
            width: 100%;
        }
        
        figcaption {
            text-align: right;
            font-style: italic;
            margin: 0 10px;
        }
    
        @media screen and (min-width: 900px) {
            margin: 14px -20px 14px 40px;
            float: right;
            width: auto;
            
            img {
                width: auto;
            } 
            
            figcaption {
                margin: 0;
            }
        }
    }
    
`;
