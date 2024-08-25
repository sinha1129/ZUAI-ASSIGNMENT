import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/api/posts/${id}`);
      setPost(res.data);
    };

    fetchPost();
  }, [id]);

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><i>By {post.author}</i></p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PostDetail;
