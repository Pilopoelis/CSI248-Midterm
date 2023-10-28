function UpdateMessage(props) {
  return (
    <>
      <h3>Change the Message</h3>
      <button onClick={() => props.setMessage("Hola")}>Hello</button>
    </>
  );
}

export default UpdateMessage;
