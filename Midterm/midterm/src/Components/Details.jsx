// import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Imagesalistar from "../Images/Alistar.jpg";
import Imagesannie from "../Images/Annie.jpg";
import Imagesashe from "../Images/Ashe.jpg";
import Imagesfiddlesticks from "../Images/Fiddlesticks.jpg";
import Imagesjax from "../Images/Jax.jpg";
import Imageskayle from "../Images/Kayle.jpg";
import Imagesmasteryi from "../Images/Master Yi.jpg";
import Imagesmorgana from "../Images/Morgana.jpg";
import Imagesnunu from "../Images/Nunu.jpg";
import Imagesryze from "../Images/Ryze.jpg";
import Imagession from "../Images/Sion.jpg";
import Imagessivir from "../Images/Sivir.jpg";
import Imagessoraka from "../Images/Soraka.jpg";
import Imagesteemo from "../Images/Teemo.jpg";
import Imagestristana from "../Images/Tristana.jpg";
import Imagestwistedfate from "../Images/Twisted Fate.jpg";
import Imageswarwick from "../Images/Warwick.jpg";
// import Images from "../Images/.jpg";
// import Images from "../Images/.jpg";
// import Images from "../Images/.jpg";
// import Images from "../Images/.jpg";
// import Images from "../Images/.jpg";
import LockInImage from "../Images/LockInActive.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Details({ champions }) {
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
  // const navigate = useNavigate();
  const { id } = useParams();
  // const [displayChampion, setDisplayChampion] = useState("");
  const selectedChampion = championList.find(
    (champ) => champ.Id === parseInt(id)
  );
  const url = `/src/Images/${selectedChampion.Name}.jpg`;
  // console.log(Imagesalistar);
  // console.log("url " + url);
  return (
    <>
      <h2 className="details">{selectedChampion.Name}</h2>
      <div className="details">
        <img src={url} alt={selectedChampion.Name} width="500" />
      </div>
      <h3 className="details">{selectedChampion.Quote}</h3>

      <div className="lockin">
        <Link to={`/`} className="details">
          <img src={LockInImage} alt="LockInActive" width="250" />
        </Link>
      </div>
    </>
  );
}

export default Details;
