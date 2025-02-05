import { RichTextContent } from '@graphcms/rich-text-types'

export type Notice = {
    id: string
    slug: string
    subtitle: string
    title: string
    author: {
        avatar: {
            url: string
        }
        name: string
    }
    coverImage: {
        url: string
    }
    content: {
        raw: RichTextContent
        text: string
    }
    date: string
}