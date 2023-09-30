import UserCard from "./Components/UserCard";
import StyledInComponent from "./Components/StyledInComponent";
import StyledInProps from "./Components/StyledInProps";
import "./App.css";
function App() {
  const users = [
    {
      userName: "john_doe",
      phoneNumber: "123-456-7890",
      email: "john@example.com",
      address: "123 Main Street, Cityville",
    },
    {
      userName: "jane_smith",
      phoneNumber: "987-654-3210",
      email: "jane@example.com",
      address: "456 Elm Street, Townsville",
    },
    {
      userName: "bob_jackson",
      phoneNumber: "555-123-4567",
      email: "bob@example.com",
      address: "789 Oak Street, Villageton",
    },
  ];
  return (
    <>
      <h2>App</h2>

      <UserCard
        userName={"User"}
        phoneNumber={"123-456-7890"}
        email={"johntoon@mail.com"}
        address={"123 anywhere lane"}
      ></UserCard>

      <StyledInComponent
        userName={"Components"}
        phoneNumber={"123-456-7890"}
        email={"johntoon@mail.com"}
        address={"123 anywhere lane"}
      ></StyledInComponent>

      <StyledInProps
        userName={"Props"}
        phoneNumber={"123-456-7890"}
        email={"johntoon@mail.com"}
        address={"123 anywhere lane"}
      ></StyledInProps>

      {users.map((user, index) => {
        //return a component to each user
        return (
          <UserCard
            key={index}
            userName={user.userName}
            phoneNumber={user.phoneNumber}
            email={user.email}
            address={"123 anywhere lane"}
          ></UserCard>
        );
      })}
    </>
  );
}

export default App;
