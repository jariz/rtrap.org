import { IntroBlockFragment, ParentChapterButtonFragment } from '../../entities/operationResults';
import React, { FC, Fragment } from 'react';
import { IntroBlock } from './IntroBlock';
import ChapterButton from '../molecules/ChapterButton';
import Layout from './Layout';
import styled from 'styled-components';
import { Element } from 'react-scroll';

interface Props {
    intro: IntroBlockFragment;
    chapters: Array<ParentChapterButtonFragment | null>;
}

const TableOfContents: FC<Props> = ({ intro, chapters }) => (
    <StyledLayout>
        {intro && <IntroBlock data={intro} />}
        <Chapters name="toc">
            {chapters.map(
                chapter =>
                    chapter &&
                    chapter.__typename === 'Craft_ChapterChapterType' && (
                        <Fragment key={chapter.id}>
                            <ChapterHeader>{chapter.title}</ChapterHeader>
                            <ChapterButtons>
                                {chapter.children &&
                                    chapter.children.map(
                                        child =>
                                            child &&
                                            child.__typename === 'Craft_ChapterChapterType' && (
                                                <ChapterButton key={child.id} data={child} />
                                            )
                                    )}
                            </ChapterButtons>
                        </Fragment>
                    )
            )}
        </Chapters>
    </StyledLayout>
);

const StyledLayout = styled(Layout)`
    max-width: 1424px;
`;

const ChapterButtons = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    padding-left: 5px;

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

const Chapters = styled(Element)`
    margin-top: 20px;

    @media screen and (min-width: 900px) {
        width: 66.66%;
        margin-left: 46px;
        margin-top: 0;
    }
`;

export default TableOfContents;
