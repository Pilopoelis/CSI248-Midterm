//tried to use createcontext. still dont get it
// import { useEffect, useState } from "react";
import Details from "./Details";
import { Link } from "react-router-dom";
function ChampionListItem({ lane, role }) {
  const championList = [
    {
      Id: 17,
      Name: "Alistar",
      Lane: "Bottom",
      Role: "Tank",
      Quote: "You can't milk those.",
    },
    {
      Id: 16,
      Name: "Annie",
      Lane: "Middle",
      Role: "Mage",
      Quote: "You wanna play too? It'll be fun!",
    },
    {
      Id: 15,
      Name: "Ashe",
      Lane: "Bottom",
      Role: "ADC",
      Quote: "All the world on one arrow.",
    },
    {
      Id: 14,
      Name: "Fiddlesticks",
      Lane: "Jungle",
      Role: "Mage",
      Quote: "Fear...",
    },
    {
      Id: 13,
      Name: "Jax",
      Lane: "Top",
      Role: "Fighter",
      Quote: "Who wants a piece of the champ?",
    },
    {
      Id: 12,
      Name: "Kayle",
      Lane: "Top",
      Role: "Fighter",
      Quote: "I see you lack judgement.",
    },
    {
      Id: 11,
      Name: "Master Yi",
      Lane: "Jungle",
      Role: "Fighter",
      Quote: "My blade is yours.",
    },
    {
      Id: 10,
      Name: "Morgana",
      Lane: "Bottom",
      Role: "Support",
      Quote: "I am bound, but I will not break.",
    },
    {
      Id: 9,
      Name: "Nunu",
      Lane: "Jungle",
      Role: "Tank",
      Quote: "Don't make the Yeti angry. You won't like him when he's angry.",
    },
    {
      Id: 8,
      Name: "Ryze",
      Lane: "Middle",
      Role: "Mage",
      Quote: "A step ahead of cataclysm.",
    },
    {
      Id: 7,
      Name: "Sion",
      Lane: "Top",
      Role: "Fighter",
      Quote: "Get on my Chopper!",
    },
    {
      Id: 6,
      Name: "Sivir",
      Lane: "Bottom",
      Role: "ADC",
      Quote: "Honor is the rust on a dull blade.",
    },
    {
      Id: 5,
      Name: "Soraka",
      Lane: "Bottom",
      Role: "Support",
      Quote: "What must be done.",
    },
    {
      Id: 4,
      Name: "Teemo",
      Lane: "Top",
      Role: "Fighter",
      Quote: "Captain Teemo on duty.",
    },
    {
      Id: 3,
      Name: "Tristana",
      Lane: "Bottom",
      Role: "ADC",
      Quote: "Once a Bandle gunner, always a Bandle gunner!",
    },
    {
      Id: 2,
      Name: "Twisted Fate",
      Lane: "Middle",
      Role: "Mage",
      Quote: "Deal me in.",
    },
    {
      Id: 1,
      Name: "Warwick",
      Lane: "Jungle",
      Role: "Fighter",
      Quote: "It's only fun.. if they run.",
    },
  ];
  return (
    <>
      <h2 className="CLI">
        {lane} | {role}
      </h2>
      <table className="CLI-container">
        {/* I have no clue why i had to add a tbody */}
        <tbody>
          <tr>
            {championList
              .filter((champs) => champs.Role === role || champs.Lane === lane)
              .map((champ) => (
                // console.log(name);
                <th key={champ.Id} className="CLI">
                  {/* {champ.Name} */}
                  <Link to={`/details/${champ.Id}`}>{champ.Name}</Link>
                </th>
              ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ChampionListItem;
