import { graphql } from 'gatsby';
import { ChapterButtonFragment } from '../../entities/operationResults';
import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import ChapterBackground, { calculateFocalPoint } from '../atoms/ChapterBackground';
import { darken } from 'polished';

export const fragment = graphql`
    fragment ParentChapterButtonFragment on Craft_ChapterChapterType {
        ...ChapterButtonFragment
        children {
            ...ChapterButtonFragment
        }
    }

    fragment ChapterButtonFragment on Craft_ChapterChapterType {
        id
        title
        tint {
            hex
        }
        chapterBackground {
            bgUrl: url

            width
            height

            focalPoint {
                x
                y
            }
        }
        parent {
            slug
        }
        uri
    }
`;

interface Props {
    data: ChapterButtonFragment;
}

const getFontSize = (slug: string) => {
    switch (slug) {
        case 'foreword':
            return '29px';
        case 'essential-artists':
            return '19px';
        default:
            return '39px';
    }
};

const Button = styled(Link)<{ tint: string; parentSlug: string }>`
    font-family: 'Miedinger-Bold', Helvetica, sans-serif;
    font-size: ${({ parentSlug }) => getFontSize(parentSlug)};
    line-height: 1;
    letter-spacing: 0;
    text-align: center;
    width: 100%;
    position: relative;
    height: 135px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ tint }) => darken(0.15, tint)};
    border-radius: 27px;
    overflow: hidden;
    padding: 16px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.27);
    cursor: pointer;

    @media screen and (min-width: 400px) {
        width: calc(50% - 16px);
    }

    @media screen and (min-width: 1024px) {
        width: calc(33.33% - 16px);
    }
    
    @media screen and (min-width: 1324px) {
        width: calc(25% - 16px);
    }

    span {
        position: relative;
        z-index: 1;
    }
`;

const ChapterButton: FC<Props> = ({ data: { title, chapterBackground, tint, uri, parent } }) => {
    const bg = chapterBackground && chapterBackground[0];
    const tintHex = (tint && tint.hex) || 'red';
    const parentSlug = (parent && parent.slug) || '';

    return (
        <Button tint={tintHex} to={uri || ''} smooth offset={-55} parentSlug={parentSlug}>
            {bg && (
                <ChapterBackground
                    url={bg.bgUrl || 'https://via.placeholder.com/150'}
                    focalPoint={calculateFocalPoint(bg)}
                    isAlbumCovers={parentSlug !== 'essential-artists'}
                />
            )}
            <span>{title}</span>
        </Button>
    );
};

export default ChapterButton;
