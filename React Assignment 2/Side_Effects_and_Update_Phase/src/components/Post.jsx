function Post({ title, body, id }) {
  return (
    <div style={{backgroundColor: "tomato", padding: "4px", margin: "8px"}}>
      <p>Id: {id}</p>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
