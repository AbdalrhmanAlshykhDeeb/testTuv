import ReactToPrint from "react-to-print";
import { useRef } from "react";
import NonReleaseDocument from "./NonReleaseDocument";

const Voice = () => {
  const ref = useRef<HTMLDivElement>(null);

  // const editMode = true;
  // const Logo = "https://www.cosqc.gov.iq/images/WLOGO.svg";
  // const LogoCompany = "";
  // const conditionLogo = false;
  return (
    <>
      <ReactToPrint
        trigger={() => {
          console.log("asdasdad");
          return <button>Print this out!</button>;
        }}
        content={() => ref.current}
      />
      {/* <CocoReport ref={ref} /> */}
      {/* <NotAcceptReport ref={ref} /> */}
      {/* <ReleaseDocument ref={ref} /> */}
      <NonReleaseDocument ref={ref} />
    </>
  );
};

export default Voice;
