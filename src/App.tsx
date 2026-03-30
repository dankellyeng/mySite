import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomNavBar from "./components/CustomNavBar";
import Router from "./router";
import { Layout } from "./layouts/Layout";

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
    </div>
  );
};

export default App;
