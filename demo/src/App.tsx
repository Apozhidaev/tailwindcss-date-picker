import DatePicker from "../../src/index";
import RangePicker from "../../src/range";


function App() {
  return (
    <div className="p-10 grid grid-cols-2 gap-4">
      <DatePicker
        minDate={"2020-01-01"}
        maxDate={"2023-01-01"}
        onSelect={(date) => {
          console.log(date);
        }}
        filter
      />
      <RangePicker
        minDate={"2020-01-01"}
        maxDate={"2023-01-01"}
        onSelect={(start, end) => {
          console.log(start, end);
        }}
        customPreset={{
          "Last Week": [new Date("2021-01-01"), new Date()],
          "Last Month": [new Date("2022-01-01"), new Date()],
          "Last Year": [new Date("2019-01-01"), new Date()],
        }}
        filter
        position="right"
        // autoApply={false}
      />
    </div>
  );
}

export default App;
