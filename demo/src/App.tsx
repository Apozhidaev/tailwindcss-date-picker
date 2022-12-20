import DatePicker from "../../src/index";

function App() {
  return (
    <div className="p-10">
      <DatePicker
        minDate={new Date("2020-01-01")}
        maxDate={new Date()}
        onSelect={(date) => {
          console.log(date);
        }}
        filter
      />
    </div>
  );
}

export default App;
