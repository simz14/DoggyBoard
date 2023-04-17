import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Theme from "./utils/theme/Theme";

function App() {
  return (
    <Theme>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Theme>
  );
}

export default App;
