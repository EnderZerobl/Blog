// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for autor documents
 */
interface AutorDocumentData {
  /**
   * title3 field in *autor*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: autor.title3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title3: prismic.RichTextField;

  /**
   * icon field in *autor*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: autor.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * resumo field in *autor*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Recomendo texto minimamente grande
   * - **API ID Path**: autor.resumo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  resumo: prismic.RichTextField;

  /**
   * foto1 field in *autor*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: autor.foto1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto1: prismic.ImageField<never>;

  /**
   * foto2 field in *autor*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: autor.foto2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto2: prismic.ImageField<never>;

  /**
   * foto3 field in *autor*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: autor.foto3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto3: prismic.ImageField<never>;

  /**
   * foto 4 field in *autor*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: autor.foto_4
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto_4: prismic.ImageField<never>;

  /**
   * foto5 field in *autor*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: autor.foto5
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto5: prismic.ImageField<never>;
}

/**
 * autor document from Prismic
 *
 * - **API ID**: `autor`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AutorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AutorDocumentData>, "autor", Lang>;

/**
 * Content for Base documents
 */
interface BaseDocumentData {
  /**
   * title field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: base.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * subtitle field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: base.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Imagem field in *Base*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: base.imagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imagem: prismic.ImageField<never>;

  /**
   * cotent field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: base.cotent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cotent: prismic.RichTextField;

  /**
   * animeatual field in *Base*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: base.animeatual
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  animeatual: prismic.ImageField<never>;

  /**
   * animename field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Nome do anime
   * - **API ID Path**: base.animename
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  animename: prismic.RichTextField;

  /**
   * legenda field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: base.legenda
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  legenda: prismic.RichTextField;

  /**
   * persfav field in *Base*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: base.persfav
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  persfav: prismic.ImageField<never>;

  /**
   * personame field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Nome e anime do personagem
   * - **API ID Path**: base.personame
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  personame: prismic.RichTextField;

  /**
   * animefav field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: base.animefav
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  animefav: prismic.RichTextField;

  /**
   * qtdanimes field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Insira um número de preferência
   * - **API ID Path**: base.qtdanimes
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  qtdanimes: prismic.RichTextField;

  /**
   * qtdeps field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Insira um número de preferência
   * - **API ID Path**: base.qtdeps
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  qtdeps: prismic.RichTextField;

  /**
   * genfav field in *Base*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: base.genfav
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  genfav: prismic.RichTextField;

  /**
   * insta field in *Base*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: base.insta
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  insta: prismic.LinkField;

  /**
   * twitter field in *Base*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: base.twitter
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter: prismic.LinkField;

  /**
   * myanimelist field in *Base*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: base.myanimelist
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  myanimelist: prismic.LinkField;
}

/**
 * Base document from Prismic
 *
 * - **API ID**: `base`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BaseDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BaseDocumentData>, "base", Lang>;

/**
 * Content for posta documents
 */
interface PostaDocumentData {
  /**
   * title2 field in *posta*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.title2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title2: prismic.RichTextField;

  /**
   * subtitle2 field in *posta*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.subtitle2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle2: prismic.RichTextField;

  /**
   * imgbas field in *posta*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.imgbas
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imgbas: prismic.ImageField<never>;

  /**
   * contentador1 field in *posta*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.contentador1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contentador1: prismic.RichTextField;

  /**
   * subsecao field in *posta*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.subsecao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subsecao: prismic.RichTextField;

  /**
   * imgbas2 field in *posta*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.imgbas2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  imgbas2: prismic.ImageField<never>;

  /**
   * contentador2 field in *posta*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.contentador2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contentador2: prismic.RichTextField;

  /**
   * ultimaimg field in *posta*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.ultimaimg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  ultimaimg: prismic.ImageField<never>;

  /**
   * contentador3 field in *posta*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posta.contentador3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contentador3: prismic.RichTextField;
}

/**
 * posta document from Prismic
 *
 * - **API ID**: `posta`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostaDocumentData>, "posta", Lang>;

type TitleDocumentDataSlicesSlice = never;

/**
 * Content for title documents
 */
interface TitleDocumentData {
  /**
   * Slice Zone field in *title*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: title.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TitleDocumentDataSlicesSlice> /**
   * Meta Description field in *title*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: title.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *title*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: title.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *title*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: title.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * title document from Prismic
 *
 * - **API ID**: `title`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TitleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<TitleDocumentData>, "title", Lang>;

export type AllDocumentTypes =
  | AutorDocument
  | BaseDocument
  | PostaDocument
  | TitleDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AutorDocument,
      AutorDocumentData,
      BaseDocument,
      BaseDocumentData,
      PostaDocument,
      PostaDocumentData,
      TitleDocument,
      TitleDocumentData,
      TitleDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
