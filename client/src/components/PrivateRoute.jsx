import { PropTypes } from "prop-types";

export const PrivateRoute = ({ children }) => {
  //ONCE THERE IS A TOKEN GONNA COMPLETE IT
  /*if (token) {
    return <Navigate to="/" />;
  }*/
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
