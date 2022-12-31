import { client } from "../../libs/client";

export default function blogId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.id}</p>
      <div
        dangerouslySetInnerHTML={{
          __html:  `${blog.body}`,
        }}
      />
    </main>
  );
}

// コンテンツのパスを取得
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
}

// コンテンツをテンプレートに渡す
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};