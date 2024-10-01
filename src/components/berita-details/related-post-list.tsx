import React from 'react'
import RelatedPost from './related-post'

export default function RelatedPostList() {
  return (
    <div className="w-full space-y-4">
      <h4 className='font-semibold text-xl text-primary'>Berita Terkait</h4>
      <div className="grid grid-rows-3 grid-flow-col gap-y-4 gap-x-8">
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
      </div>
    </div>
  )
}
