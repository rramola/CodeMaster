import JsonHandler from "./components/import-json";

function CodeMaster() {
  return (
    <div className="App">
      <div className="test-header">
        <p>Hello CoderMaster!</p>
      </div>

      <div className="test-json">
        <JsonHandler />
      </div>
    </div>
  );
}

export default CodeMaster;
