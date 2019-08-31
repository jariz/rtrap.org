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
  id: number;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterBackground_focalPoint | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor" | "Craft_Intro";
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterBackground_focalPoint | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterAuthor = IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterChapterType | IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterAuthor;

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_editors_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_editors_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_editors = IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_editors_Craft_ChapterChapterType | IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_editors_Craft_ChapterAuthor;

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_contentField {
  __typename: "Craft_RedactorFieldData";
  content: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_tint | null;
  chapterBackground: (IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterBackground | null)[] | null;
  parent: IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_parent | null;
  uri: string | null;
  slug: string;
  chapterAuthor: (IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_chapterAuthor | null)[] | null;
  editors: (IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_editors | null)[] | null;
  level: number | null;
  contentField: IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType_contentField | null;
}

export type IndexQuery_craft_chapters_Craft_ChapterChapterType_children = IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterAuthor | IndexQuery_craft_chapters_Craft_ChapterChapterType_children_Craft_ChapterChapterType;

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterAuthor = IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterChapterType | IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterAuthor;

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_editors_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_editors_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type IndexQuery_craft_chapters_Craft_ChapterChapterType_editors = IndexQuery_craft_chapters_Craft_ChapterChapterType_editors_Craft_ChapterChapterType | IndexQuery_craft_chapters_Craft_ChapterChapterType_editors_Craft_ChapterAuthor;

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType_contentField {
  __typename: "Craft_RedactorFieldData";
  content: string | null;
}

export interface IndexQuery_craft_chapters_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: IndexQuery_craft_chapters_Craft_ChapterChapterType_tint | null;
  chapterBackground: (IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterBackground | null)[] | null;
  parent: IndexQuery_craft_chapters_Craft_ChapterChapterType_parent | null;
  uri: string | null;
  children: (IndexQuery_craft_chapters_Craft_ChapterChapterType_children | null)[] | null;
  slug: string;
  chapterAuthor: (IndexQuery_craft_chapters_Craft_ChapterChapterType_chapterAuthor | null)[] | null;
  editors: (IndexQuery_craft_chapters_Craft_ChapterChapterType_editors | null)[] | null;
  level: number | null;
  contentField: IndexQuery_craft_chapters_Craft_ChapterChapterType_contentField | null;
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

export interface ParentChapterButtonFragment_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface ParentChapterButtonFragment_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: ParentChapterButtonFragment_chapterBackground_focalPoint | null;
}

export interface ParentChapterButtonFragment_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor" | "Craft_Intro";
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: ParentChapterButtonFragment_children_Craft_ChapterChapterType_chapterBackground_focalPoint | null;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface ParentChapterButtonFragment_children_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: ParentChapterButtonFragment_children_Craft_ChapterChapterType_tint | null;
  chapterBackground: (ParentChapterButtonFragment_children_Craft_ChapterChapterType_chapterBackground | null)[] | null;
  parent: ParentChapterButtonFragment_children_Craft_ChapterChapterType_parent | null;
  uri: string | null;
}

export type ParentChapterButtonFragment_children = ParentChapterButtonFragment_children_Craft_ChapterAuthor | ParentChapterButtonFragment_children_Craft_ChapterChapterType;

export interface ParentChapterButtonFragment {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: ParentChapterButtonFragment_tint | null;
  chapterBackground: (ParentChapterButtonFragment_chapterBackground | null)[] | null;
  parent: ParentChapterButtonFragment_parent | null;
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

export interface ChapterButtonFragment_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface ChapterButtonFragment_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: ChapterButtonFragment_chapterBackground_focalPoint | null;
}

export interface ChapterButtonFragment_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface ChapterButtonFragment {
  __typename: "Craft_ChapterChapterType";
  id: number;
  title: string;
  tint: ChapterButtonFragment_tint | null;
  chapterBackground: (ChapterButtonFragment_chapterBackground | null)[] | null;
  parent: ChapterButtonFragment_parent | null;
  uri: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ChapterHeaderFragment
// ====================================================

export interface ChapterHeaderFragment_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ChapterHeaderFragment_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface ChapterHeaderFragment_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: ChapterHeaderFragment_chapterBackground_focalPoint | null;
}

export interface ChapterHeaderFragment_chapterAuthor_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterHeaderFragment_chapterAuthor_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterHeaderFragment_chapterAuthor = ChapterHeaderFragment_chapterAuthor_Craft_ChapterChapterType | ChapterHeaderFragment_chapterAuthor_Craft_ChapterAuthor;

export interface ChapterHeaderFragment_editors_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterHeaderFragment_editors_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterHeaderFragment_editors = ChapterHeaderFragment_editors_Craft_ChapterChapterType | ChapterHeaderFragment_editors_Craft_ChapterAuthor;

export interface ChapterHeaderFragment_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface ChapterHeaderFragment {
  __typename: "Craft_ChapterChapterType";
  title: string;
  uri: string | null;
  slug: string;
  tint: ChapterHeaderFragment_tint | null;
  chapterBackground: (ChapterHeaderFragment_chapterBackground | null)[] | null;
  chapterAuthor: (ChapterHeaderFragment_chapterAuthor | null)[] | null;
  editors: (ChapterHeaderFragment_editors | null)[] | null;
  parent: ChapterHeaderFragment_parent | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ChapterFragment
// ====================================================

export interface ChapterFragment_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ChapterFragment_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface ChapterFragment_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: ChapterFragment_chapterBackground_focalPoint | null;
}

export interface ChapterFragment_chapterAuthor_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterFragment_chapterAuthor_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterFragment_chapterAuthor = ChapterFragment_chapterAuthor_Craft_ChapterChapterType | ChapterFragment_chapterAuthor_Craft_ChapterAuthor;

export interface ChapterFragment_editors_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterFragment_editors_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterFragment_editors = ChapterFragment_editors_Craft_ChapterChapterType | ChapterFragment_editors_Craft_ChapterAuthor;

export interface ChapterFragment_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface ChapterFragment_contentField {
  __typename: "Craft_RedactorFieldData";
  content: string | null;
}

export interface ChapterFragment_children_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor" | "Craft_Intro";
}

export interface ChapterFragment_children_Craft_ChapterChapterType_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ChapterFragment_children_Craft_ChapterChapterType_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface ChapterFragment_children_Craft_ChapterChapterType_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: ChapterFragment_children_Craft_ChapterChapterType_chapterBackground_focalPoint | null;
}

export interface ChapterFragment_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterFragment_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterFragment_children_Craft_ChapterChapterType_chapterAuthor = ChapterFragment_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterChapterType | ChapterFragment_children_Craft_ChapterChapterType_chapterAuthor_Craft_ChapterAuthor;

export interface ChapterFragment_children_Craft_ChapterChapterType_editors_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterFragment_children_Craft_ChapterChapterType_editors_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterFragment_children_Craft_ChapterChapterType_editors = ChapterFragment_children_Craft_ChapterChapterType_editors_Craft_ChapterChapterType | ChapterFragment_children_Craft_ChapterChapterType_editors_Craft_ChapterAuthor;

export interface ChapterFragment_children_Craft_ChapterChapterType_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface ChapterFragment_children_Craft_ChapterChapterType_contentField {
  __typename: "Craft_RedactorFieldData";
  content: string | null;
}

export interface ChapterFragment_children_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType";
  title: string;
  uri: string | null;
  slug: string;
  tint: ChapterFragment_children_Craft_ChapterChapterType_tint | null;
  chapterBackground: (ChapterFragment_children_Craft_ChapterChapterType_chapterBackground | null)[] | null;
  chapterAuthor: (ChapterFragment_children_Craft_ChapterChapterType_chapterAuthor | null)[] | null;
  editors: (ChapterFragment_children_Craft_ChapterChapterType_editors | null)[] | null;
  parent: ChapterFragment_children_Craft_ChapterChapterType_parent | null;
  level: number | null;
  contentField: ChapterFragment_children_Craft_ChapterChapterType_contentField | null;
}

export type ChapterFragment_children = ChapterFragment_children_Craft_ChapterAuthor | ChapterFragment_children_Craft_ChapterChapterType;

export interface ChapterFragment {
  __typename: "Craft_ChapterChapterType";
  title: string;
  uri: string | null;
  slug: string;
  tint: ChapterFragment_tint | null;
  chapterBackground: (ChapterFragment_chapterBackground | null)[] | null;
  chapterAuthor: (ChapterFragment_chapterAuthor | null)[] | null;
  editors: (ChapterFragment_editors | null)[] | null;
  parent: ChapterFragment_parent | null;
  level: number | null;
  contentField: ChapterFragment_contentField | null;
  children: (ChapterFragment_children | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ChapterContentFragment
// ====================================================

export interface ChapterContentFragment_tint {
  __typename: "Craft_Color";
  hex: string | null;
}

export interface ChapterContentFragment_chapterBackground_focalPoint {
  __typename: "Craft_AssetFocalPoint";
  x: number | null;
  y: number | null;
}

export interface ChapterContentFragment_chapterBackground {
  __typename: "Craft_ArticleImagesVolume" | "Craft_ChapterVolume";
  bgUrl: string | null;
  width: string | null;
  height: string | null;
  focalPoint: ChapterContentFragment_chapterBackground_focalPoint | null;
}

export interface ChapterContentFragment_chapterAuthor_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterContentFragment_chapterAuthor_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterContentFragment_chapterAuthor = ChapterContentFragment_chapterAuthor_Craft_ChapterChapterType | ChapterContentFragment_chapterAuthor_Craft_ChapterAuthor;

export interface ChapterContentFragment_editors_Craft_ChapterChapterType {
  __typename: "Craft_ChapterChapterType" | "Craft_Intro";
}

export interface ChapterContentFragment_editors_Craft_ChapterAuthor {
  __typename: "Craft_ChapterAuthor";
  redditHandle: string | null;
}

export type ChapterContentFragment_editors = ChapterContentFragment_editors_Craft_ChapterChapterType | ChapterContentFragment_editors_Craft_ChapterAuthor;

export interface ChapterContentFragment_parent {
  __typename: "Craft_ChapterAuthor" | "Craft_ChapterChapterType" | "Craft_Intro";
  slug: string;
}

export interface ChapterContentFragment_contentField {
  __typename: "Craft_RedactorFieldData";
  content: string | null;
}

export interface ChapterContentFragment {
  __typename: "Craft_ChapterChapterType";
  title: string;
  uri: string | null;
  slug: string;
  tint: ChapterContentFragment_tint | null;
  chapterBackground: (ChapterContentFragment_chapterBackground | null)[] | null;
  chapterAuthor: (ChapterContentFragment_chapterAuthor | null)[] | null;
  editors: (ChapterContentFragment_editors | null)[] | null;
  parent: ChapterContentFragment_parent | null;
  level: number | null;
  contentField: ChapterContentFragment_contentField | null;
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
