import { useState, useEffect } from "react";
import FilterLane from "./Components/FilterLane";
import ChampionListItem from "./Components/ChampionListItem";
import FilterRole from "./Components/FilterRole";
import Details from "./Components/Details";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
function App() {
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

  const [filteredChampions, setFilteredChampions] = useState(championList);
  const [lane, setLane] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState(0);
  const filterChampions = () => {
    let filteredChampionList = championList;
    if (lane != "") {
      filteredChampionList = championList.filter(
        (champs) => champs.Lane === lane
      );
    }
    if (role !== "") {
      filteredChampionList = championList.filter(
        (champs) => champs.Role === role
      );
    }
    setFilteredChampions(filteredChampionList);
  };
  useEffect(() => {
    console.log("---");
    filterChampions();
  }, [lane, role]);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        {/* I have no clue how usestate works */}
        {/* <ChampionListItem lane={lane} role={role}></ChampionListItem> */}
        {/* <BrowserRouter>
      <Router> */}
        <Routes>
          <Route
            path="/details/:id"
            element={<Details champions={championList} />}
          />
          <Route
            path="/"
            element={
              <>
                <FilterLane selectedLane={setLane}></FilterLane>
                <FilterRole selectedRole={setRole}></FilterRole>
                <ChampionListItem lane={lane} role={role} />
              </>
            }
          />
        </Routes>
        {/* <Route
          path="/"
          element={<ChampionListItem lane={lane} role={role} />}
        />
      </Router>
      </BrowserRouter> */}
      </BrowserRouter>
    </>
  );
}

export default App;
