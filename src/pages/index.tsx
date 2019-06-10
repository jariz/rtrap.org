import { graphql } from 'gatsby';
import styled from 'styled-components';
import * as React from 'react';
import { FC, Fragment } from 'react';
import { IndexQuery } from '../entities/operationResults';
import { IntroBlock } from '../components/organisms/IntroBlock';
import ChapterButton from '../components/molecules/ChapterButton';

export const query = graphql`
    query IndexQuery {
        craft {
            intro: entry(type:Intro) {
                ...IntroBlockFragment
            }
            chapters: entries(type: ChapterChapterType, level: 1) { # wtf is this type name lol
                ...ParentChapterButtonFragment
            }
        }
    }
`;

interface Props {
    data: IndexQuery;
}

const IndexPage: FC<Props> = ({ data }) => {
    const intro = data.craft && data.craft.intro;

    return (
        <Fragment>
            {intro && intro.__typename === 'Craft_Intro' && (
                <IntroBlock
                    data={intro}
                />
            )}
            <Chapters>
                {data.craft && data.craft.chapters && data.craft.chapters.map(chapter =>
                    chapter && chapter.__typename === 'Craft_ChapterChapterType' && (
                        <Fragment key={chapter.id}>
                            <ChapterHeader>{chapter.title}</ChapterHeader>
                            <ChapterButtons>
                                {chapter.children && chapter.children.map(child =>
                                    child && child.__typename === 'Craft_ChapterChapterType' && (
                                        <ChapterButton
                                            key={child.id}
                                            data={child}
                                        />
                                    ))}
                            </ChapterButtons>
                        </Fragment>
                    ))}
            </Chapters>
        </Fragment>
    );
};

export default IndexPage;

const ChapterButtons = styled.section`
    display: flex;
    margin: -8px;
    padding-left:5px;
    
    > * {
        margin: 8px;
    }
`;

const ChapterHeader = styled.h1`
    width: 100%;
    margin-top: 26px;
    
    &:first-child {
        margin-top: 0;
    }
    
`;

const Chapters = styled.div`
    margin-left: 46px;
    width: 66.66%;
`;