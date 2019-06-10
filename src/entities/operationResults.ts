/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_craft_intro_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType";
}

export interface IndexQuery_craft_intro_Craft_Intro_contentField {
  __typename: "Craft_RedactorFieldData";
  content: string | null;
}

export interface IndexQuery_craft_intro_Craft_Intro {
  __typename: "Craft_Intro";
  contentField: IndexQuery_craft_intro_Craft_Intro_contentField | null;
}

export type IndexQuery_craft_intro = IndexQuery_craft_intro_Craft_ChapterAuthor | IndexQuery_craft_intro_Craft_Intro;

export interface IndexQuery_craft_chapters_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor" | "Craft_Intro";
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  url: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor" | "Craft_Intro";
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  url: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_tint | null;
  chapterBackground: (IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterBackground | null)[] | null;
  uri: string | null;
}

export type IndexQuery_craft_chapters_Craft_ChapterChapterType_children = IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterAuthor | IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType;

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: IndexQuery_craft_chapters_Craft_ChapterChapterType_tint | null;
  chapterBackground: (IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterBackground | null)[] | null;
  uri: string | null;
  children: (IndexQuery_craft_chapters_Craft_ChapterChapterType_children | null)[] | null;
}

export type IndexQuery_craft_chapters = IndexQuery_craft_chapters_Craft_ChapterAuthor | IndexQuery_craft_chapters_Craft_ChapterChapterType;

export interface IndexQuery_craft {
  __typename: "Craft";
  intro: IndexQuery_craft_intro | null;
  chapters: (IndexQuery_craft_chapters | null)[] | null;
}

export interface IndexQuery {
  craft: IndexQuery_craft | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ParentChapterButtonFragment
// ====================================================

export interface ParentChapterButtonFragment_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ParentChapterButtonFragment_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  url: string | null;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor" | "Craft_Intro";
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  url: string | null;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: ParentChapterButtonFragment_children_Craft_ChapterChapterType_tint | null;
  chapterBackground: (ParentChapterButtonFragment_children_Craft_ChapterChapterType_chapterBackground | null)[] | null;
  uri: string | null;
}

export type ParentChapterButtonFragment_children = ParentChapterButtonFragment_children_Craft_ChapterAuthor | ParentChapterButtonFragment_children_Craft_ChapterChapterType;

export interface ParentChapterButtonFragment {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: ParentChapterButtonFragment_tint | null;
  chapterBackground: (ParentChapterButtonFragment_chapterBackground | null)[] | null;
  uri: string | null;
  children: (ParentChapterButtonFragment_children | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ChapterButtonFragment
// ====================================================

export interface ChapterButtonFragment_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ChapterButtonFragment_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  url: string | null;
}

export interface ChapterButtonFragment {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: ChapterButtonFragment_tint | null;
  chapterBackground: (ChapterButtonFragment_chapterBackground | null)[] | null;
  uri: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: IntroBlockFragment
// ====================================================

export interface IntroBlockFragment_contentField {
  __typename: "Craft_RedactorFieldData";
  content: string | null;
}

export interface IntroBlockFragment {
  __typename: "Craft_Intro";
  contentField: IntroBlockFragment_contentField | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
