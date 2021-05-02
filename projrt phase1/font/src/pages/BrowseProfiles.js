import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Calendar from "../components/calendar/Calendar";
import Chat from "../components/chatbox/Chat/Chat";
import Join from "../components/chatbox/Join/Join";
const BackEnd = React.lazy(() => import("../components/folders/BackEnd"));
const UploadCv = React.lazy(() => import("./UploadCv"));
const HrPage = React.lazy(() => import("./HrPage"));
const DevelopmentAndIT = React.lazy(() =>
  import("../components/folders/Development&IT")
);
const DesignAndCreative = React.lazy(() =>
  import("../components/folders/Design&Creative")
);
const SalesAndMarketing = React.lazy(() =>
  import("../components/folders/Sales&Marketing")
);
const WritingAndTranslation = React.lazy(() =>
  import("../components/folders/Writing&Translation")
);
const AdminAndCustomerSupport = React.lazy(() =>
  import("../components/folders/Admin&CustomerSupport")
);
const FinanceAndAccounting = React.lazy(() =>
  import("../components/folders/Finance&Accounting")
);
const FrontEnd = React.lazy(() => import("../components/folders/FrontEnd"));
const FullStack = React.lazy(() => import("../components/folders/FullStack"));
const UxUi = React.lazy(() => import("../components/folders/UxUi"));
const GraphicDesigners = React.lazy(() =>
  import("../components/folders/GraphicDesigners")
);
const WebDesigners = React.lazy(() =>
  import("../components/folders/WebDesigners")
);
const VideoEditors = React.lazy(() =>
  import("../components/folders/VideoEditors")
);
const SEMSpecialists = React.lazy(() =>
  import("../components/folders/SEMSpecialists")
);
const SEOSpecialists = React.lazy(() =>
  import("../components/folders/SEOSpecialists")
);
const MarketingAnalysts = React.lazy(() =>
  import("../components/folders/MarketingAnalysts")
);
const MarketResearchers = React.lazy(() =>
  import("../components/folders/MarketResearchers")
);
const ContentWriters = React.lazy(() =>
  import("../components/folders/ContentWriters")
);
const Translators = React.lazy(() =>
  import("../components/folders/Translators")
);
const Editors = React.lazy(() => import("../components/folders/Editors"));
const CopyWriters = React.lazy(() =>
  import("../components/folders/CopyWriters")
);
const VirtualAssistants = React.lazy(() =>
  import("../components/folders/VirtualAssistants")
);
const DataEntrySpecialists = React.lazy(() =>
  import("../components/folders/DataEntrySpecialists")
);
const ProjectManagers = React.lazy(() =>
  import("../components/folders/ProjectManagers")
);
const TechSupportSpecialists = React.lazy(() =>
  import("../components/folders/TechSupportSpecialists")
);
const Accountants = React.lazy(() =>
  import("../components/folders/Accountants")
);
const FinancialAnalysts = React.lazy(() =>
  import("../components/folders/FinancialAnalysts")
);
const TaxConsultants = React.lazy(() =>
  import("../components/folders/TaxConsultants")
);
const FinancialModelers = React.lazy(() =>
  import("../components/folders/FinancialModelers")
);

export const BrowsePofiles = () => {
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
    <Suspense fallback={<p>...Loading page please wait</p>}>
      <Switch> 
        <Route path="/hr/profiles" render={() => <HrPage></HrPage>}></Route>
        <Route
          path="/hr/uploadCv"
          render={(props) => <UploadCv {...props}></UploadCv>}
        ></Route>
        <Route
          path="/hr/DevelopmentAndIT"
          render={(props) => <DevelopmentAndIT {...props}></DevelopmentAndIT>}
        ></Route>
        <Route
          path="/hr/DesignAndCreative"
          render={(props) => <DesignAndCreative {...props}></DesignAndCreative>}
        ></Route>
        <Route
          path="/hr/SalesAndMarketing"
          render={(props) => <SalesAndMarketing {...props}></SalesAndMarketing>}
        ></Route>
        <Route
          path="/hr/WritingAndTranslation"
          render={(props) => (
            <WritingAndTranslation {...props}></WritingAndTranslation>
          )}
        ></Route>
        <Route
          path="/hr/AdminAndCustomerSupport"
          render={(props) => (
            <AdminAndCustomerSupport {...props}></AdminAndCustomerSupport>
          )}
        ></Route>
        <Route
          path="/hr/FinanceAndAccounting"
          render={(props) => (
            <FinanceAndAccounting {...props}></FinanceAndAccounting>
          )}
        ></Route>
        <Route
          path="/hr/FrontEnd"
          render={(props) => <FrontEnd {...props}></FrontEnd>}
        ></Route>
        <Route
          path="/hr/BackEnd"
          render={(props) => <BackEnd {...props}></BackEnd>}
        ></Route>
        <Route
          path="/hr/FullStack"
          render={(props) => <FullStack {...props}></FullStack>}
        ></Route>
        <Route
          path="/hr/UxUi"
          render={(props) => <UxUi {...props}></UxUi>}
        ></Route>
        <Route
          path="/hr/GraphicDesigners"
          render={(props) => <GraphicDesigners {...props}></GraphicDesigners>}
        ></Route>
        <Route
          path="/hr/WebDesigners"
          render={(props) => <WebDesigners {...props}></WebDesigners>}
        ></Route>
        <Route
          path="/hr/VideoEditors"
          render={(props) => <VideoEditors {...props}></VideoEditors>}
        ></Route>
        <Route
          path="/hr/SEMSpecialists"
          render={(props) => <SEMSpecialists {...props}></SEMSpecialists>}
        ></Route>
        <Route
          path="/hr/SEOSpecialists"
          render={(props) => <SEOSpecialists {...props}></SEOSpecialists>}
        ></Route>
        <Route
          path="/hr/MarketingAnalysts"
          render={(props) => <MarketingAnalysts {...props}></MarketingAnalysts>}
        ></Route>
        <Route
          path="/hr/MarketResearchers"
          render={(props) => <MarketResearchers {...props}></MarketResearchers>}
        ></Route>
        <Route
          path="/hr/ContentWriters"
          render={(props) => <ContentWriters {...props}></ContentWriters>}
        ></Route>
        <Route
          path="/hr/Translators"
          render={(props) => <Translators {...props}></Translators>}
        ></Route>
        <Route
          path="/hr/Editors"
          render={(props) => <Editors {...props}></Editors>}
        ></Route>
        <Route
          path="/hr/CopyWriters"
          render={(props) => <CopyWriters {...props}></CopyWriters>}
        ></Route>
        <Route
          path="/hr/VirtualAssistants"
          render={(props) => <VirtualAssistants {...props}></VirtualAssistants>}
        ></Route>
        <Route
          path="/hr/DataEntrySpecialists"
          render={(props) => (
            <DataEntrySpecialists {...props}></DataEntrySpecialists>
          )}
        ></Route>
        <Route
          path="/hr/ProjectManagers"
          render={(props) => <ProjectManagers {...props}></ProjectManagers>}
        ></Route>
        <Route
          path="/hr/TechSupportSpecialists"
          render={(props) => (
            <TechSupportSpecialists {...props}></TechSupportSpecialists>
          )}
        ></Route>
        <Route
          path="/hr/Accountants"
          render={(props) => <Accountants {...props}></Accountants>}
        ></Route>
        <Route
          path="/hr/FinancialAnalysts"
          render={(props) => <FinancialAnalysts {...props}></FinancialAnalysts>}
        ></Route>
        <Route
          path="/hr/TaxConsultants"
          render={(props) => <TaxConsultants {...props}></TaxConsultants>}
        ></Route>
        <Route
          path="/hr/FinancialModelers"
          render={(props) => <FinancialModelers {...props}></FinancialModelers>}
        ></Route>
        <Route path="/Calendar" render={() => <Calendar></Calendar>} />
        <Route path="/join" exact component={Join} />
        <Route path="/chat" component={Chat} />
        <Route exact render={() => <HrPage></HrPage>}></Route>
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
