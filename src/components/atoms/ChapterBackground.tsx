import styled from 'styled-components';

export default styled.div<{ url: string }>`
    position: absolute;
    overflow: hidden;
    top: -100vh;
    bottom: -100vh;
    left: -100%;
    right: -100%;
    content: "";
    transform: rotate(45deg);
    background-image: url("${({ url }) => url}");
    background-repeat: repeat;
    opacity: .6;
    mix-blend-mode: overlay;
    pointer-events: none;
`;
