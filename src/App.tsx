import { ToolPanel } from "./features/drawing/components/ToolPanel";

const App = () => {
  const css = {
    height: "100vh",
    width: "100vw",
  };

  return (
    <div className="App" style={css}>
      <ToolPanel />
    </div>
  );
};

export default App;
