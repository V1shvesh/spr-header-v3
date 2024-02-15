import Header from "./website-components/dist/esm/components/header";
import Footer from "./website-components/dist/esm/components/footer";
import { ExternalComponentContextProvider } from "./website-components/dist/esm/components/externalComponent/ExternalComponent";
import headerProps from "./headerProps";
import "./website-components/dist/styles.css";
import { Fragment } from "react";
import footerProps from "./footerProps";

const backgroundStyles = {
  background:
    "linear-gradient(270deg, rgba(28, 108, 253, 0.2) 3%, rgba(92, 200, 195, 0.2) 100%)",
  backgroundColor: "white",
};

function App() {
  console.log("Header", Header);
  return (
    <div className="font-sans">
      <ExternalComponentContextProvider value={{
        CTAComponent: (props) => {
          if(props.action === 'NAVIGATE') {
            return <a href={props.url}>{props.children}</a>
          }

          return <Fragment>{props.children}</Fragment>
        }
      }}>
        <Header {...headerProps}
        scrollOffsetYForHeaderCollapse={400}
        backgroundStyles={backgroundStyles}
        searchEl={
          <div
            style={{
              border: "solid 1px #333",
              width: "100%",
              height: "45px",
              padding: "8px 16px",
              zIndex: 5,
            }}
          >
            Search
          </div>
        }/>
        <main style={{
          height: '200vh',
        }}/>
        <Footer {...footerProps} />
      </ExternalComponentContextProvider>
    </div>
  );
}

export default App;
