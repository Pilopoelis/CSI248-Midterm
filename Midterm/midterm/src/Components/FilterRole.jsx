import { useState } from "react";
// import ChampionListItem from "./ChampionListItem";
function FilterRole({ selectedRole }) {
  const champions = [
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
  const [role, setRole] = useState("");
  const [filteredRoles, setFilteredRoles] = useState([]);

  const filterRole = (e) => {
    e.preventDefault();

    const filteredRoles = champions.filter((champs) => champs.Role === role);
    setFilteredRoles(filteredRoles);
    selectedRole(role);
    console.log(role);
  };
  return (
    <>
      <div className="role-container">
        <form>
          <div>
            <label htmlFor="role" className="role">
              Choose Role{" "}
            </label>
            <select
              className="role"
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value=""></option>
              <option value="Fighter">Fighter</option>
              <option value="Tank">Tank</option>
              <option value="Mage">Mage</option>
              <option value="ADC">ADC</option>
              <option value="Support">Support</option>
            </select>
            <button onClick={filterRole}>Search Role</button>
          </div>
        </form>
      </div>
      {/* {filteredRoles.length > 0 && (
        <>
          <h2>Champion Roles</h2>
          <ul>
            {filteredRoles.map((champ) => (
              <li key={champ.Id}>{champ.Name}</li>
            ))}
          </ul>
        </>
      )} */}
    </>
  );
}

export default FilterRole;
