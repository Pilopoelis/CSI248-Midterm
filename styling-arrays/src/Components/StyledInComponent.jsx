function StyledInComponent(props) {
  //create style object
  const styleObject = {
    backgroundColor: "lightblue",
    padding: "15",
    //cp
    borderRadius: "20px",
    boxShadow: "0px 4px 6px #000",
  };

  return (
    // <!-- {/* <h3>User Card</h3> */} -->
    //match style name
    <div style={styleObject} className="card">
      <h2 className="card-title"> {props.userName}</h2>
      <div className="card-body">
        <div className="card-label">Email: </div>
        <div>{props.email}</div>
        <div className="card-label">Phone: </div>
        <div>{props.phoneNumber}</div>
        <div className="card-label">Address: </div>
        <div>{props.address}</div>
      </div>
    </div>
  );
}
export default StyledInComponent;
