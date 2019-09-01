import { graphql } from 'gatsby';
import styled from 'styled-components';
import ChapterBackground, { calculateFocalPoint } from '../atoms/ChapterBackground';
import {
    ChapterHeaderFragment,
    ChapterHeaderFragment_chapterAuthor,
    ChapterHeaderFragment_chapterAuthor_Craft_ChapterAuthor as ChapterAuthor,
} from '../../entities/operationResults';
import React, { FC } from 'react';
import { darken } from 'polished';
import Layout from '../organisms/Layout';
import { Element } from 'react-scroll';

export const query = graphql`
    fragment ChapterHeaderFragment on Craft_ChapterChapterType {
        title
        uri
        slug
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
        parent {
            slug
        }
    }
`;

interface Props {
    data: ChapterHeaderFragment;
}

const ChapterHeader: FC<Props> = ({
    data: { chapterBackground, tint, title, uri, chapterAuthor, editors, slug, parent },
}) => {
    const bg = chapterBackground && chapterBackground[0];
    const tintHex = (tint && tint.hex) || 'red';
    const parentSlug = (parent && parent.slug) || '';

    const renderAuthors = (label: string, authors: Array<ChapterHeaderFragment_chapterAuthor | null> | null) =>
        authors &&
        authors.length > 0 && (
            <div>
                <dt>
                    {label}
                    {authors.length > 1 ? 's' : ''}
                </dt>
                <dd>
                    {authors
                        .filter(
                            (author): author is ChapterAuthor => !!author && author.__typename === 'Craft_ChapterAuthor'
                        )
                        .map(({ redditHandle }, i) => (
                            <>
                                <a
                                    key={redditHandle || ''}
                                    target="_blank"
                                    href={`https://reddit.com/u/${redditHandle}`}
                                >
                                    {redditHandle}
                                </a>
                                {authors.length > 1 && i !== authors.length - 1 ? ', ' : ''}
                            </>
                        ))}
                </dd>
            </div>
        );

    return (
        <Element name={uri || ''} id={slug}>
            <Container tint={tintHex}>
                {bg && (
                    <ChapterBackground
                        url={bg.bgUrl || 'https://via.placeholder.com/150'}
                        isAlbumCovers={parentSlug !== 'essential-artists'}
                        focalPoint={calculateFocalPoint(bg)}
                    />
                )}

                <HeaderLayout>
                    <Title>{title}</Title>
                    <Metas>
                        <Meta>{renderAuthors('Author', chapterAuthor)}</Meta>
                        <Meta>{renderAuthors('Editor', editors)}</Meta>
                    </Metas>
                </HeaderLayout>
            </Container>
        </Element>
    );
};

const Container = styled.section<{ tint: string }>`
    overflow: hidden;
    position: relative;
    background-color: ${({ tint }) => darken(0.15, tint)};
`;

const Title = styled.h1`
    font-family: 'Miedinger-Bold', Helvetica, sans-serif;
    font-size: 55px;
    color: #fff;
    line-height: 1.1;
    max-width: 50%;
    margin: 0;

    @media screen and (max-width: 1200px) {
        max-width: 550px;
        font-size: 50px;
    }

    @media screen and (max-width: 900px) {
        max-width: 450px;
        font-size: 40px;
    }

    @media screen and (max-width: 390px) {
        max-width: 240px;
        font-size: 28px;
    }
`;

const Metas = styled.div`
    display: flex;
    flex-direction: row;
`;

const Meta = styled.dl`
    display: flex;
    flex-direction: column;
    margin: 14px 0 0;

    & + & {
        margin-left: 35px;
    }

    dt {
        font-size: 12px;
        letter-spacing: 2.47px;
        text-transform: uppercase;
        margin: 0 0 3px 0;
    }

    dd {
        margin: 0;
        font-weight: bold;
    }
`;

const HeaderLayout = styled(Layout)`
    margin: 130px auto;
    flex-direction: column !important;

    @media screen and (max-width: 900px) {
        margin: 66px auto;
    }
`;

export default ChapterHeader;
