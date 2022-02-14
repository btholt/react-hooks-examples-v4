import { createRoot } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Callback from "./Callback";
import LayoutEffect from "./LayoutEffect";
import ImperativeHandle from "./ImperativeHandle";
import DebugValue from "./DebugValue";
import Id from "./Id";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
      <LayoutEffect />
      <hr />
      <ImperativeHandle />
      <hr />
      <DebugValue />
      <hr />
      <Id />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
