import React, { useState } from 'react';

const PostForm = () => {
  const [text, setText] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted opinion:', text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Din åsikt..." />
      <button type="submit">Skicka drag</button>
    </form>
  );
};

export default PostForm;
