import { useState } from "react";
// import ChampionListItem from "./ChampionListItem";
// goal, pass the values inside of lane and role(starting with lane)
// into championList or championlistitem (unsure which)
// that way
function FilterLane({ selectedLane }) {
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
      Rol: "Fighter",
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
      Rol: "ADC",
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
  // const [filteredChampions, setFilteredChampions] = useState(champions);
  const [lane, setLane] = useState("");
  const [filteredLane, setFilteredLane] = useState([]);
  // const [role, setRole] = useState("");
  const filterLane = (e) => {
    e.preventDefault();
    //this is messin up the code because it continues to revert to choose lane
    //because it doesnt update on time/ doesnt grab the desired state
    // const selectedLaneValue = e.target.value;
    // setLane(selectedLaneValue);
    const filteredLanes = championList.filter((champs) => champs.Lane === lane);
    setFilteredLane(filteredLanes);
    selectedLane(lane);
    console.log(lane);
    // selectedLane(filteredLane);
    // console.log(filteredLane);
  };
  return (
    <>
      <div className="lane-container">
        <form>
          <div>
            {/* learned htmlfor is like a personalized div for the form */}
            <label htmlFor="lane" className="lane">
              Choose Lane{" "}
            </label>
            <select
              className="lane"
              name="lane"
              id="lane"
              value={lane}
              onChange={(e) => setLane(e.target.value)}
            >
              <option value=""></option>
              <option value="Top">Top</option>
              <option value="Jungle">Jungle</option>
              <option value="Middle">Middle</option>
              <option value="Bottom">Bottom</option>
            </select>
            <button onClick={filterLane}>Search Lane</button>
          </div>
        </form>
      </div>
      {/* {filteredLane.length > 0 && (
        <>
          <h2>Champion Lanes</h2>
          <ul>
            {filteredLane.map((champ) => (
              <li key={champ.Id}>{champ.Name}</li>
            ))}
          </ul>
        </>
      )} */}
    </>
  );
}

export default FilterLane;
