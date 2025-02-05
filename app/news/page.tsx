import React from "react";
import { NoticesPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import NoticesList from "@/components/notices/notices-list";
import SectionTitle from "@/components/section-title";


export const metadata = {
  title: "Notícias",
}

const getPageData = async (): Promise<NoticesPageData> => {
  const query = `
    query MyQuery {
      posts {
        id
        slug
        subtitle
        title
        author {
          avatar {
            url
          }
          name
        }
        coverImage {
          url
        }
        content {
          raw
          text
        }
        date
    }
  }
`

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24 hours
    
  );
}

export default async function News() {
  const { posts } = await getPageData();
  console.log(posts)


  return (
    <div className="container items-center justify-between py-5">
      <SectionTitle subtitle="notícias" title="Fique bem informado"/>
      <NoticesList notices={posts} />
    </div>
  );
}
