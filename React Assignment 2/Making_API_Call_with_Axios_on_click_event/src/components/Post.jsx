function Post({ name, year, color, pantone_value }) {
  return (
    <div className="Posts" style={{backgroundColor: {color}}}>
      <p>name : {name}</p>
      <p>year : {year}</p>
      <p>color : {color}</p>
      <p>pantone value : {pantone_value}</p>
    </div>
  );
}

export default Post;
