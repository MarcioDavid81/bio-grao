"use client";

import { Notice } from "@/app/types/notice";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/section-title";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

type NoticeDetailsProps = {
  notice: Notice;
};

export default function NoticeDetails({ notice }: NoticeDetailsProps) {
  return (
    <section className="w-full container sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <SectionTitle title={notice.subtitle} subtitle={notice.title} />
      <motion.div
        className="w-full mt-5 bg-white p-6 rounded-lg shadow-lg items-center justify-between flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={notice.coverImage.url}
          alt={`Imagem da noticia ${notice.slug}`}
          className="rounded-t-xl justify-center my-10"
        />
        <RichText content={notice.content.raw} />
        <span>{`Publicado por: ${notice.author.name}, dia ${format(
          new Date(notice.date),
          "dd/MM/yyyy"
        )}`}</span>
        <p>Boas informações produzem bons negócios!</p>
      </motion.div>
      <Link href="/news">
        <Button className="mt-10 text-zinc-50">
            <HiArrowNarrowLeft size={20} className="mr-[4px]" />
            Voltar
        </Button>
      </Link>
    </section>
  );
}
