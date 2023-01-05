import { DatePicker } from "../../src/index";
import { RangePicker } from "../../src/index";

function App() {
  return (
    <div className="p-10 grid grid-cols-2 gap-4">
      <DatePicker
        onSelect={(date) => {
          console.log(date);
        }}
        filter
      />
      <RangePicker
        onSelect={(start, end) => {
          console.log(start, end);
        }}
        defaultOptions={{
          position: "right",
          lockOptions: {
            minDate: "2020-01-01"
          },
          presetOptions: {
            presets: [
              {
                label: "Last Week",
                start: "2022-01-01",
                end: "2023-01-01",
              },
              {
                label: "Last Month",
                start: "2021-01-01",
                end: "2023-01-01",
              },
              {
                label: "Last Year",
                start: "2019-01-01",
                end: "2023-01-01",
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default App;
