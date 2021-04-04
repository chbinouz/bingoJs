import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
const UploadCv = React.lazy(() => import("./UploadCv"));
const HrPage = React.lazy(() => import("./HrPage"));
export const BrowsePofiles = () => {
  return (
    <Suspense fallback={<p>...Loading page please wait</p>}>
      <Switch>
        <Route path="/profiles" render={() => <HrPage></HrPage>}></Route>
        <Route
          path="/uploadCv"
          render={(props) => <UploadCv {...props}></UploadCv>}
        ></Route>
        <Route exact render={() => <HrPage></HrPage>}></Route>
      </Switch>
    </Suspense>
  );
};
