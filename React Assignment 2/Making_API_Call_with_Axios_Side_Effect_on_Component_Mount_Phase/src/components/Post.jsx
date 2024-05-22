function Post({ title, body }) {
  return (
    <div style={{backgroundColor: "orange", padding: "4px", margin: "8px"}}>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
