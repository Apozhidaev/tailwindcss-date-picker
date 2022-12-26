import { DatePicker } from "../../src/route/index";
import { RangePicker } from "../../src/route/index";

function App() {
  return (
    <div className="p-10 grid grid-cols-2 gap-4">
      <DatePicker
        minDate="2020-01-01"
        maxDate="2023-01-01"
        onSelect={(date) => {
          console.log(date);
        }}
        filter
      />
      <RangePicker
        minDate="2020-01-01"
        maxDate="2023-01-01"
        onSelect={(start, end) => {
          console.log(start, end);
        }}
        presets={[
          {
            label: "Last Week",
            startDate: "2022-01-01",
            endDate: "2023-01-01",
          },
          {
            label: "Last Month",
            startDate: "2021-01-01",
            endDate: "2023-01-01",
          },
          {
            label: "Last Year",
            startDate: "2019-01-01",
            endDate: "2023-01-01",
          },
        ]}
        position="right"
      />
    </div>
  );
}

export default App;
