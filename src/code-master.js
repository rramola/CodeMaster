import JsonHandler from "./components/json-handler";

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
