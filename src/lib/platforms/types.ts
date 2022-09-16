export enum PlatformResponseStatus { Success, Failure }

type DefaultSuccessBody = {
  url: PublishedUrl
  /** For detecting when we have uncommitted changes */
  publishedAt: string
}

export type PlatformResponse<SuccessBody = {}, FailureBody = {}> = (
  | DefaultSuccessBody & SuccessBody & { status: PlatformResponseStatus.Success }
  | FailureBody & { status: PlatformResponseStatus.Failure }
)

export interface PlatformConstructor {
  new(apiKey: string): Platform;
}

export interface Platform {
  publish(article: Article): Promise<PlatformResponse<{}, {}>>
  update(article: Partial<Article>): Promise<PlatformResponse<{}, {}>>
  unPublish(): Promise<PlatformResponse<{}, {}>>
}

export type Article = {
  title: string
  body_markdown: string
}

export enum PlatformName {
  DevTo = 'DevTo',
  HashNode = 'HashNode',
  Medium = 'Medium',
}

// Hmm this will get confusing.
export type PlatformUnion = (
  | {
    name: PlatformName.DevTo
    apiKey: string
  }
  | {
    name: PlatformName.HashNode
    apiKey: string
  }
  | {
    name: PlatformName.Medium
    apiKey: string
  }
)

export type Body = {
  platform: PlatformUnion[]
  article: Article
}

type PublishedUrl = {
  path: string
  slug: string
}

export type Response = {
  id: string
  // string is PlatformName
  platforms: {
    // Add data to specific platform like this
    // [PlatformName.DevTo]: PlatformResponse
    [platform: string | PlatformName]: PlatformResponse
  }
}

