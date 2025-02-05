import { Notice } from "./notice"

export type NoticePageData = {
    post: Notice
  }
  
  export type NoticesPageData = {
    posts: Notice[]
  }
  
  export type NoticesPageStaticData = {
    posts: {
      slug: string
    }[]
  }