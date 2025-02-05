import { NoticePageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import NoticeDetails from "@/components/notice/notice-details";
import { notFound } from "next/navigation";
import React from "react";

type NoticeProps = {
  params: {
    slug: string;
  };
};

const getNoticeDetails = async (slug: string): Promise<NoticePageData> => {
  const query = `
    query Post {
      post(where: {slug: "${slug}"}) {
        content {
          raw
          text
        }
        coverImage {
          url
        }
        date
        subtitle
        title
        author {
          name
          avatar {
            url
          }
        }
      }
    }
`;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24 hours
  );
};

export default async function Notice({ params: { slug } }: NoticeProps) {
  const { post } = await getNoticeDetails(slug);
  if (!post) return notFound();

  return (
    <>
      <NoticeDetails notice={post} />
    </>
  );
}
