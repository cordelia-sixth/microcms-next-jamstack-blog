import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <h1>トップページ</h1>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ブログデータをテンプレートに渡す処理
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog"});

  // propsとして返す
  return {
    props: {
      blog: data.contents
    }
  }
}