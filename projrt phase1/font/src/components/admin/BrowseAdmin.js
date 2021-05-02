import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { ScrappingConf } from "../../pages/ScrappingConf";
const Confighr = React.lazy(() => import("./ConfigHr"));
export const BrowseAdmin = () => {
  const loader = () => {
    return (
      <Spinner className="d-flex justify-content-center">
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Spinner>
    );
  };
  return (
    <Suspense fallback={loader()}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Confighr></Confighr>}
        ></Route>
        <Route path="/scrapping" render={() => <ScrappingConf/>}></Route>
      </Switch>
    </Suspense>
  );
};

const Spinner = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
