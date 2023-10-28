import SelectStudent from "./SelectedStudent";
import { useState } from "react";
function StudentList() {
  const student = [John, Kyle, Liam, Rylan, Ryan, Anchan];
  const [selectedStudent, setSelectedStudent] = useState("");
  function handleSelectedStudent(event) {
    setSelectedStudent(event.target.value);
  }
  return (
    <>
      <h2>StuList</h2>
      <h4>Selected Student: {selectedStudent}</h4>
      <SelectStudent onSelect={handleSelectedStudent} student={student} />
    </>
  );
}

export default StudentList;
