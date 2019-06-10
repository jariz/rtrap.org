import { graphql } from 'gatsby';
import { ChapterButtonFragment } from '../../entities/operationResults';
import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import ChapterBackground from '../atoms/ChapterBackground';
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
            url(transform: articleImage)
        }
        uri
    }
`;

interface Props {
    data: ChapterButtonFragment;
}

const Button = styled(Link)<{ tint: string; }>`
    font-family: "Miedinger-Bold", Helvetica, sans-serif;
    font-size: 39px;
    letter-spacing: 0;
    text-align: center;
    line-height: 43px;
    width: 33.33%;
    position: relative;
    height: 135px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ tint }) => darken(.15, tint)};
    border-radius: 27px;
    overflow: hidden;
    padding: 16px;
    box-shadow: 0 0 7px rgba(0,0,0,0.27);
    
    span {
        position: relative;
        z-index: 1;
    }
`;

const ChapterButton: FC<Props> = ({ data: { title, chapterBackground, tint, uri } }) => {
    const bg = chapterBackground && chapterBackground[0];
    const tintHex = (tint && tint.hex) || 'red';
    return (
        <Button tint={tintHex} to={uri || ''}>
            {bg && tint && (
                <ChapterBackground
                    url={bg.url || 'https://via.placeholder.com/150'}
                    tint={tintHex}
                />
            )}
            <span>{title}</span>
        </Button>
    );
};

export default ChapterButton;