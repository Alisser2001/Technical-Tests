import Posts from "./posts/Posts";
import axios from "axios";
import Info from "./info/info.json";

export default async function Home() {
  let comments = []
  let posts = []
  let users = []
  try {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
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
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Posts comments={comments} posts={posts} users={users} />
    </main>
  )
}
