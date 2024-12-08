import Comments from '@/app/components/comments';
import getAllPosts from '@/lib/getAllPosts';
import getPostComments from '@/lib/getPostCommnet';
import getPosts from '@/lib/getPosts';
import React, { Suspense } from 'react'

export async function generateMetadata({ params }) {

    const { id } = params;
    const post = await getPosts(id);

    return {
        title: post.title,
        description: post.body
    }
}


export default async function PostPage({ params }) {
    const { id } = params;
    const postPromise = getPosts(id);
    const commentsPromise = getPostComments(id);

    // const [post, comments] = await Promise.all([postPromise, commentsPromise])

    const post = await postPromise

    return (
        <div className="mt-6">
            <h2 className='text-blue-500'>{post.title}</h2>
            <p className='mt-3'>{post.body}</p>


            <hr />
            <Suspense fallback="<h1>Loading Comments...</h1>">

                <Comments promise={commentsPromise} />

            </Suspense>

        </div>
    )
}


export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.mao(post => ({
        id: post.id.toString()
    }))
}

