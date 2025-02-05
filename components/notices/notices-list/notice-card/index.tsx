import { Notice } from "@/app/types/notice";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

type NoticeCardProps = {
  notice: Notice;
};

export default function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <div className="group flex flex-col rounded-lg overflow-hidden shadow-lg min-h-[580px] mt-10">
      <Image
        src={notice.coverImage.url}
        alt={`Thumbnail da notícia ${notice.title}`}
        width={500}
        height={340}
        unoptimized
        className="rounded-t-lg w-full h-full object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
      />
      <div className="flex-1 flex flex-col p-8 relative">
        <Badge className="mb-4 w-20 bg-transparent border border-primary flex items-center justify-center text-primary hover:bg-transparent font-extralight">
          Notícias
        </Badge>
        <div className="flex items-center mb-4 gap-2">
          <CalendarDays size={14} />
          <p className="text-xs font-extralight">{format(new Date(notice.date), "MM/dd/yyyy")}</p>
        </div>
        <strong className="font-medium text-lg text-zinc-700">
          {notice.title}
        </strong>
        <p className="mt-2 text-zinc-700 line-clamp-4">{notice.subtitle}</p>
        <div className=" absolute left-8 bottom-8 mt-4 flex justify-between items-center bg-primary rounded-lg py-2 px-6 max-w-[fit-content] hover:bg-primary/80 text-gray-200">
          <Link href={`/news/${notice.slug}`}>Ler mais</Link>
        </div>
      </div>
    </div>
  );
}
