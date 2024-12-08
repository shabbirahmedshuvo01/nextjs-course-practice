import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link'
import React from 'react'

export default async function Posts() {

    const posts = await getAllPosts()
    return (
        <div>
            <div className='mt-6'>

                <h1>all posts</h1>


                <ul className="mt-6">
                    {posts.map(post => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
                </ul>

            </div>
        </div>
    )
}
