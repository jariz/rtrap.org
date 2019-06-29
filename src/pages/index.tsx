import { graphql } from 'gatsby';
import * as React from 'react';
import { FC, Fragment } from 'react';
import { IndexQuery, IndexQuery_craft_chapters_Craft_ChapterChapterType } from '../entities/operationResults';
import TableOfContents from '../components/organisms/TableOfContents';
import Chapter from '../components/organisms/Chapter';

export const query = graphql`
    query IndexQuery {
        craft {
            intro: entry(type:Intro) {
                ...IntroBlockFragment
            }
            chapters: entries(type: ChapterChapterType, level: 1) { # wtf is this type name lol
                id
                ...ParentChapterButtonFragment
                ...ChapterFragment
            }
        }
    }
`;

interface Props {
    data: IndexQuery;
}

const IndexPage: FC<Props> = ({ data }) => {
    const intro = data.craft && data.craft.intro;
    const chapters = data.craft
        && data.craft.chapters
        && data.craft.chapters
            .filter((chapter): chapter is IndexQuery_craft_chapters_Craft_ChapterChapterType =>
                !!chapter && chapter.__typename === 'Craft_ChapterChapterType'
            );

    if (intro && intro.__typename !== 'Craft_Intro') {
        return null;
    }

    return (
        <Fragment>
            {intro && chapters && (
                <TableOfContents
                    intro={intro}
                    chapters={chapters}
                />
            )}

            {chapters && chapters.map(chapter => (
                <Chapter
                    key={chapter.id}
                    data={chapter}
                />
            ))}
        </Fragment>
    );
};

export default IndexPage;
