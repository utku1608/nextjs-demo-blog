// pages/posts/[id].js

import { useState } from 'react';
import posts from '../../data/posts';

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id === params.id);

  return {
    props: {
      post,
    },
  };
}

export default function PostDetail({ post }) {
  // Yorumlar için useState
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Yorum ekleme fonksiyonu
  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <small>{post.date}</small>

      <hr style={{ margin: '30px 0' }} />

      <h3>💬 Yorumlar</h3>

      <ul>
        {comments.map((comment, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{comment}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Yorum yaz..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        style={{ padding: '8px', width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleAddComment} style={{ padding: '8px 16px' }}>
        Ekle
      </button>
    </div>
  );
}
