import { ToolPanel } from "./features/drawing/components/ToolPanel";

const App = () => {
  const innerHeight = window.innerHeight;
  const css = {
    height: innerHeight,
    width: "100vw",
  };

  return (
    <div className="App" style={css}>
      <ToolPanel />
    </div>
  );
};

export default App;
