type Article = {
  title: string
  /**
   * `date`(optional) is the publication date-time
   * `series`(optional) is the name of the series the article belongs to
   * `canonical_url`(optional) is the canonical URL of the article
   * `cover_image` is the main image of the article
   * 
   * If the markdown contains a front matter, it will take precedence on the equivalent params given in the payload.
   */
  body_markdown: string
  series?: string
  /** Defaults to false */
  published?: boolean
  /** Image Url */
  main_image?: string
  canonical_url?: string
  description?: string
  tags?: string[]
  organization_id?: number
}

type url = string
/** e.g. '2022-09-16T08:01:48Z' */
type dateTime = string

export namespace DevtoApi {
  export namespace Create {
    export type Body = {
      article: Article
    };
    export type Response = {
      type_of: 'article'
      id: number
      title: string
      description: string
      slug: string
      /** Url path i.e. /username/slug */
      path: string
      url: url
      collection_id: null
      /** Presumably an epoch, might be a string */
      published_timestamp: string
      // cover_image: null,
      social_image: url
      canonical_url: url
      created_at: dateTime
      edited_at: dateTime
      crossposted_at: dateTime
      published_at: dateTime
      reading_time_minutes: number
      tag_list: string
      tags: string[]
      body_html: string
      body_markdown: string
      user: {
        name: string
        username: string
        user_id: number
      }
    };
  }
}