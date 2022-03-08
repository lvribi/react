const testDate = "test date 2022";
const TestComponent = (props) => {
  return (
  <div>
      {props.donne[0].title}
      <button onClick={props.onSaveData(testDate)}>Get data from child!</button>
      </div>
      )
};

export default TestComponent;
