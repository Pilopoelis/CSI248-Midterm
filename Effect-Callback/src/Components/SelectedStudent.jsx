function SelectStudent(props) {
  return (
    <>
      <h2>Select Student</h2>
      <label htmlFor="">Select a Student</label>
      <select name="" id="">
        <option value="">--Select--</option>
        {props.student.map((student, index) => {
          return (
            <option key={index} value={student}>
              {student}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectStudent;
