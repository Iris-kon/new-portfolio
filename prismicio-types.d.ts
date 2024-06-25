// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = never;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Title field in *page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * git field in *page*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: page.git
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  git: prismic.LinkToMediaField;

  /**
   * Description field in *page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type WorksDocumentDataSlicesSlice = SliderSlice;

/**
 * Content for works documents
 */
interface WorksDocumentData {
  /**
   * Title field in *works*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *works*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Lang field in *works*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Selecione o idioma
   * - **Default Value**: pt-BR
   * - **API ID Path**: works.lang
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  lang: prismic.SelectField<"pt-BR" | "en-US", "filled">;

  /**
   * Git field in *works*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works.git
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  git: prismic.LinkField;

  /**
   * Slice Zone field in *works*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: works.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WorksDocumentDataSlicesSlice>;
}

/**
 * works document from Prismic
 *
 * - **API ID**: `works`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorksDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<WorksDocumentData>, "works", Lang>;

export type AllDocumentTypes = PageDocument | WorksDocument;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Item in *Slider → Default → Primary → images*
 */
export interface SliderSliceDefaultPrimaryImagesItem {
  /**
   * Image field in *Slider → Default → Primary → images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.default.primary.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Slider → Default → Primary*
 */
export interface SliderSliceDefaultPrimary {
  /**
   * images field in *Slider → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.default.primary.images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<SliderSliceDefaultPrimaryImagesItem>>;
}

/**
 * Default variation for Slider Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SliderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Slider*
 */
type SliderSliceVariation = SliderSliceDefault;

/**
 * Slider Shared Slice
 *
 * - **API ID**: `slider`
 * - **Description**: Slider
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliderSlice = prismic.SharedSlice<"slider", SliderSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      WorksDocument,
      WorksDocumentData,
      WorksDocumentDataSlicesSlice,
      AllDocumentTypes,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SliderSlice,
      SliderSliceDefaultPrimaryImagesItem,
      SliderSliceDefaultPrimary,
      SliderSliceVariation,
      SliderSliceDefault,
    };
  }
}
