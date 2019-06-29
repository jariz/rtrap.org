import { graphql } from 'gatsby';
import styled from 'styled-components';
import ChapterBackground from '../atoms/ChapterBackground';
import { ChapterHeaderFragment } from '../../entities/operationResults';
import React, { FC } from 'react';
import { darken } from 'polished';
import Layout from '../organisms/Layout';
import { Element } from 'react-scroll';

export const query = graphql`
    fragment ChapterHeaderFragment on Craft_ChapterChapterType {
        title
        uri
        tint {
            hex
        }
        chapterBackground {
            url(transform: articleImage)
        }
        chapterAuthor {
            ... on Craft_ChapterAuthor {
                redditHandle
            }
        }
        editors {
            ... on Craft_ChapterAuthor {
                redditHandle
            }
        }
    }
`;

interface Props {
    data: ChapterHeaderFragment;
}

const ChapterHeader: FC<Props> = ({ data: { chapterBackground, tint, title, uri } }) => {
    const bg = chapterBackground && chapterBackground[0];
    const tintHex = (tint && tint.hex) || 'red';

    return (
        <Element name={uri || ''}>
            <Container tint={tintHex}>
                {bg && (
                    <ChapterBackground
                        url={bg.url || 'https://via.placeholder.com/150'}
                    />
                )}

                <Layout>
                    <Title>{title}</Title>
                </Layout>
            </Container>
        </Element>
    );
};

const Container = styled.section<{ tint: string; }>`
    overflow: hidden;
    position: relative;
    background-color: ${({ tint }) => darken(.15, tint)};
`;

const Title = styled.h1`
    font-family: "Miedinger-Bold", Helvetica, sans-serif;
    font-size: 61px;
    color: #FFF;
    line-height: 65px;
`;

export default ChapterHeader;