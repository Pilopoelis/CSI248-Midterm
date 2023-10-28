import { useState, useEffect } from "react";
import { fetchBeers } from "../Data/BeerRepository";

function Pagination() {
  //first track beers with useState([]) since we are taking in an array
  const [beers, setBeers] = useState([]);
  //then track what page we are on so to know what items to display
  const [currentPage, setCurrentPage] = useState[1];
  //track loading so we know when items will be displayed
  const [loading, setLoading] = useState(true);
  //useeffect is going to load the first page
  useEffect(() => {
    //first we load in the container for beers
    setLoading(true);
    //then we fill the page with beers
    fetchBeers(currentPage)
      //then we set all the data place holders with beer
      .then((data) => setBeers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [currentPage]);
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h2>Beers</h2>
      <div>
        <button onClick={setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Previous
        </button>
        <span>Page: {currentPage}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer.id}>
              <h2>{beer.name}</h2>
              <p>{beer.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pagination;
