import styled, { css } from 'styled-components';
import { ChapterFragment_chapterBackground } from '../../entities/operationResults';

export const calculateFocalPoint = (bg: ChapterFragment_chapterBackground): FocalPointPx => {
    return {
        x: `${Math.round(bg.focalPoint!.x! * 100)}%`,
        y: `${Math.round(bg.focalPoint!.y! * 100)}%`,
    };
};

export interface FocalPointPx {
    x: string;
    y: string;
}

export default styled.div<{
    url: string;
    isAlbumCovers: boolean;
    focalPoint: FocalPointPx;
}>`
    position: absolute;
    overflow: hidden;
    content: "";
    background-image: url("${({ url }) => url}");
    opacity: .6;
    mix-blend-mode: overlay;
    pointer-events: none;
    ${({ isAlbumCovers }) => (isAlbumCovers ? albumCovers : normal)};
    ${({ focalPoint }) => (focalPoint ? `background-position: ${focalPoint.x} ${focalPoint.y}` : '')};
`;

const albumCovers = css`
    top: -100vh;
    bottom: -100vh;
    left: -100%;
    right: -100%;
    transform: rotate(45deg);
    background-repeat: repeat;
`;

const normal = css`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
`;
