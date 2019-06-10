import styled from 'styled-components';

export default styled.div<{ url: string, tint: string; }>`
    // background-color: ${({ tint }) => tint};
    position: absolute;
    overflow: hidden;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    content: "";
    transform: rotate(45deg);
    background-image: url("${({ url }) => url}");
    opacity: .4;
    mix-blend-mode: overlay;
`;
