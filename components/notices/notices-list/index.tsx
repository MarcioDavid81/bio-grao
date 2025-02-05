import { Notice } from '@/app/types/notice'
import React from 'react'
import NoticeCard from './notice-card'

type NoticesListProps = {
    notices: Notice[]
}

export default function NoticesList({ notices }: NoticesListProps) {
  return (
    <section className='container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-6 gap-y-6'>
        {notices.map(notice => (
            <div key={notice.id}>
                <NoticeCard notice={notice} />
            </div>
        ))}
    </section>
  )
}
