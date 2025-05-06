// pages/index.js

import Link from 'next/link';
import posts from '../data/posts';

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📘 Blog Yazıları</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '20px' }}>
            <h2>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.description}</p>
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
