import React, { FC, Fragment } from 'react';
import { graphql } from 'gatsby';
import { ChapterFragment } from '../../entities/operationResults';
import ChapterHeader from '../molecules/ChapterHeader';
import CmsContent from '../molecules/CmsContent';
import Layout from './Layout';
import styled from 'styled-components';

export const query = graphql`
    fragment ChapterFragment on Craft_ChapterChapterType {
        ...ChapterContentFragment

        children {
            ...ChapterContentFragment
        }
    }

    fragment ChapterContentFragment on Craft_ChapterChapterType {
        ...ChapterHeaderFragment

        title
        level
        contentField {
            content
        }
    }
`;

interface Props {
    data: ChapterFragment;
}

const Chapter: FC<Props> = ({ data: { contentField, level, children, ...header } }) => {
    if (level === 1) {
        return (
            <Fragment>
                <ParentChapterHeader>
                    <StyledLayout>{header.title}</StyledLayout>
                </ParentChapterHeader>
                {children &&
                    children.map(
                        child =>
                            child &&
                            child.__typename === 'Craft_ChapterChapterType' && (
                                <Chapter
                                    key={child.uri || ''}
                                    data={{
                                        ...child,
                                        children: null,
                                    }}
                                />
                            )
                    )}
            </Fragment>
        );
    }

    return (
        <Fragment>
            <ChapterHeader data={header} />
            <Layout>
                {contentField && contentField.content && (
                    <CmsContent
                        dangerouslySetInnerHTML={{
                            __html: contentField.content,
                        }}
                    />
                )}
            </Layout>
        </Fragment>
    );
};

const ParentChapterHeader = styled.h1`
    background: #4960bc;
    line-height: 55px;
    margin: 0;
    position: sticky;
    top: 0;
    z-index: 1;
`;

const StyledLayout = styled(Layout)`
    margin: 0 auto;
`;

export default Chapter;
