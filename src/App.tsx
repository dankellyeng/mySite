import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomNavBar from "./components/CustomNavBar";
import Router from "./router";
import { Layout } from "./layouts/Layout";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App: React.FC = () => {
  return (
    <div>
      <CustomNavBar />
      <Layout>
        <React.Fragment>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </React.Fragment>
      </Layout>
      {/* <AmplifySignOut /> */}
    </div>
  );
};

// export default withAuthenticator(App);
export default App;
