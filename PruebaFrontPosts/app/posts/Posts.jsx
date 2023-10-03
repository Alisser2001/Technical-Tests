"use client"
import Post from "../components/post";
import Pagination from "../components/pagination";
import { useState } from "react";

export default function Posts({ posts, comments, users }) {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 20;
    const lastIndex = currentPage * postsPerPage;
    const firsIndex = lastIndex - postsPerPage;
    const pagination = (page) => {
        setCurrentPage(page);
    }
    const currentPosts = posts.slice(firsIndex, lastIndex);
    return (
        <div className="flex min-h-screen flex-col items-center justify-between max-w-screen-xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <Post
                    key={currentPosts[0].id}
                    postId={currentPosts[0].id}
                    userId={currentPosts[0].userId}
                    user={users.filter((u) => u.id === currentPosts[0].userId)}
                    postTitle={currentPosts[0].title} postBody={currentPosts[0].body}
                    comments={comments.filter((c) => c.postId === currentPosts[0].id).length}
                    widthCard={500}
                />
                {currentPosts ?
                    currentPosts?.map((p, i) => {
                        if (i >= 1) {
                            return (
                                <Post
                                    key={p.id}
                                    postId={p.id}
                                    userId={p.userId}
                                    user={users.filter((u) => u.id === p.userId)}
                                    postTitle={p.title} postBody={p.body}
                                    comments={comments.filter((c) => c.postId === p.id).length}
                                    widthCard={500}
                                />
                            )
                        }
                    }) :
                    <div >
                        <h1>The Posts Has Not Been Found</h1>
                    </div>}
            </ul>
            <Pagination allPosts={posts} pagination={pagination} currentPage={currentPage} />
        </div>
    )
}