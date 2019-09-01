import { Link } from 'react-scroll';
import styled from 'styled-components';

export default styled(Link)`
    background: #FFFFFF;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.30);
    border-radius: 7px;
    padding: 5px 13px;
    font-size: 12px;
    color: #35477D;
    line-height: 1;
    font-weight: 600;
    cursor: pointer;
    
    > * {
        margin-right: 10px;
        vertical-align: middle;
    }
`;