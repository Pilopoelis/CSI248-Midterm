import { useEffect, useState } from "react";
function Area() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [area, setArea] = useState(0);
  function handleLengthChange(e) {
    setLength(e.target.value);
  }
  function handleWidthChange(e) {
    setWidth(e.target.value);
  }
  useEffect(() => {
    //when dependencies are changed(length or width)
    //update area
    //this is updating correctly, unlike our other example code which was asynchronus (one number behind)
    //area is updating the same time as length and width
    const calcArea = length * width;
    setArea(calcArea);
  }),
    [length, width];
  return (
    <>
      <h2>Area</h2>
      <div>
        <label htmlFor="length">Length: </label>
        <input type="number" value={length} onChange={handleLengthChange} />
      </div>
      <div>
        <label htmlFor="width">Width: </label>
        <input type="number" value={width} onChange={handleWidthChange} />
      </div>
      <div>
        <p>Area of Rectangle: {area}</p>
      </div>
    </>
  );
}

export default Area;
