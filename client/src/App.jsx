import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Theme from "./utils/theme/Theme";
import Login from "./screens/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import DogsTableScreen from "./screens/Dogs/DogsTableScreen";
import DogDetail from "./screens/Dogs/DogDetail";
import DonationsTableScreen from "./screens/Donations/DonationsTableScreen";
import NewDog from "./screens/Dogs/NewDog";
import DonationDetail from "./screens/Donations/DonationsDetail";
import AdoptionsTableScreen from "./screens/Adoptions/AdoptionsTableScreen";
import AdoptionDetail from "./screens/Adoptions/AdoptionDetail";
import NewAdoption from "./screens/Adoptions/components/NewAdoption";
import MediaScreen from "./screens/Media/MediaScreen";

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
        <Route
          exact
          path="/dogs"
          element={
            <PrivateRoute>
              <DogsTableScreen />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/dog/:id"
          element={
            <PrivateRoute>
              <DogDetail />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/dogs/new"
          element={
            <PrivateRoute>
              <NewDog />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/donations"
          element={
            <PrivateRoute>
              <DonationsTableScreen />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/donation/:id"
          element={
            <PrivateRoute>
              <DonationDetail />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/adoptions"
          element={
            <PrivateRoute>
              <AdoptionsTableScreen />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/adoption/:id"
          element={
            <PrivateRoute>
              <AdoptionDetail />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/adoptions/new"
          element={
            <PrivateRoute>
              <NewAdoption />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/media"
          element={
            <PrivateRoute>
              <MediaScreen />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Theme>
  );
}

export default App;
