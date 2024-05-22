function User({ avatar, email, first_name, last_name }) {
  return (
    <div style={{backgroundColor: "orange", padding: "4px", margin: "8px"}}>
      <img src={avatar} alt={first_name} />
      <div>
        Name : {first_name} {last_name}
      </div>
      <div>Email : {email}</div>
    </div>
  );
}

export default User;
