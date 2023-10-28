import { useState, useEffect } from "react";
function Joke() {
  const [joke, setJoke] = useState("");
  //useeffect pulls data, like api, database, localstorage, file
  useEffect(() => {
    //async function
    async function fetchJoke() {
      try {
        //first, make request
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        //then parse to json
        const data = await response.json();
        setJoke(data.value);
      } catch (error) {
        //apis are known to have unreliable connection
        console.log("Error: The joke was that bad");
      }
    }
    //fetch is also an api which retreives data
    fetchJoke();
  }, []);
  return (
    <>
      <h2>Chuck Norris Joke</h2>
      <p>{joke}</p>
    </>
  );
}

export default Joke;
