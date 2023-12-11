import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateDefault from "./StateDefault";
import "./Property1Details1.css";

type Property1Details1Type = {
  logoIcon?: string;
  alignLeft?: string;

  /** Style props */
  property1DetailsWidth?: CSSProperties["width"];
  property1DetailsPadding?: CSSProperties["padding"];
  property1DetailsGap?: CSSProperties["gap"];
  logoIconWidth?: CSSProperties["width"];
  logoIconHeight?: CSSProperties["height"];
  grovioFontSize?: CSSProperties["fontSize"];
  exportTop?: CSSProperties["top"];
  exportLeft?: CSSProperties["left"];
  exportPadding?: CSSProperties["padding"];
  alignLeftIconWidth?: CSSProperties["width"];
  alignLeftIconHeight?: CSSProperties["height"];
};

const Property1Details1: FunctionComponent<Property1Details1Type> = ({
  logoIcon,
  alignLeft,
  property1DetailsWidth,
  property1DetailsPadding,
  property1DetailsGap,
  logoIconWidth,
  logoIconHeight,
  grovioFontSize,
  exportTop,
  exportLeft,
  exportPadding,
  alignLeftIconWidth,
  alignLeftIconHeight,
}) => {
  const property1DetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: property1DetailsWidth,
      padding: property1DetailsPadding,
      gap: property1DetailsGap,
    };
  }, [property1DetailsWidth, property1DetailsPadding, property1DetailsGap]);

  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logoIconWidth,
      height: logoIconHeight,
    };
  }, [logoIconWidth, logoIconHeight]);

  const grovioStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: grovioFontSize,
    };
  }, [grovioFontSize]);

  const stateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      top: exportTop,
      left: exportLeft,
      padding: exportPadding,
    };
  }, [exportTop, exportLeft, exportPadding]);

  const downloadIconStyle: CSSProperties = useMemo(() => {
    return {
      width: alignLeftIconWidth,
      height: alignLeftIconHeight,
    };
  }, [alignLeftIconWidth, alignLeftIconHeight]);

  return (
    <div className="property-1details1" style={property1DetailsStyle}>
      <img className="logo-icon" alt="" src={logoIcon} style={logoIconStyle} />
      <div className="grovio" style={grovioStyle}>
        Grovio
      </div>
      <StateDefault
        download="/alignleft2.svg"
        stateDefaultMargin="0 !important"
        stateDefaultPosition="absolute"
        stateDefaultTop="19.92px"
        stateDefaultLeft="224px"
        stateDefaultZIndex="2"
        stateDefaultPadding="6px"
        downloadIconWidth="12px"
        downloadIconHeight="12px"
      />
    </div>
  );
};

export default Property1Details1;
