// pages/api/posts.js

import posts from '../../data/posts';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
