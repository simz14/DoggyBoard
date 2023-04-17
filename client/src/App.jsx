import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Theme from "./utils/theme/Theme";
import Login from "./screens/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <Theme>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Theme>
  );
}

export default App;
