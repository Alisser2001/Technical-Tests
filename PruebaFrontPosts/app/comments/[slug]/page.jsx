import CommentsPost from "../../components/comments";
import axios from "axios";
import Post from "@/app/components/post";
import Link from 'next/link';
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Info from "../../info/info.json"

export default async function Page({ params }) {
    let comments = []
    let posts = []
    let users = []
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.slug}/comments`);
        comments = res.data
    } catch (error) {
        console.error("Error al obtener los comentarios:", error);
    }
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
        posts = res.data
    } catch (error) {
        console.error("Error al obtener los publicaciones:", error);
    }
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
        users = res.data
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
    users.push(Info['myUser']);
    posts.unshift(Info['myPost']);
    comments.push(...Info['myComments']);
    return (
        <div className="flex min-h-screen flex-col items-center justify-between max-w-screen-xl mx-auto p-12">
            <ul>{posts?.map((p, i) => {
                if (p.id == params.slug) {
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
            })}</ul>
            <h1 className="mt-10">Comments</h1>
            <Divider className="my-4 mb-10" />
            <CommentsPost postId={params.slug} comments={comments} />
            <Button color="primary" variant="solid">
                <Link href={'/'}>Volver</Link>
            </Button>
        </div>
    )
}