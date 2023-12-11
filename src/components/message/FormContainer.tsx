import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FormContainer.css";

type FormContainerType = {
  navIconImage?: string;
  pageTitle?: string;
  dropdown?: boolean;
  updateCount?: boolean;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propGap1?: CSSProperties["gap"];
  propWidth2?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propFontSize?: CSSProperties["fontSize"];
  propPadding1?: CSSProperties["padding"];
  propFontSize1?: CSSProperties["fontSize"];
  propLineHeight?: CSSProperties["lineHeight"];
  propWidth3?: CSSProperties["width"];
  propHeight1?: CSSProperties["height"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  navIconImage,
  pageTitle = "Settings",
  dropdown = true,
  updateCount = false,
  propPadding,
  propGap,
  propWidth,
  propWidth1,
  propGap1,
  propWidth2,
  propHeight,
  propFontSize,
  propPadding1,
  propFontSize1,
  propLineHeight,
  propWidth3,
  propHeight1,
}) => {
  const navItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      width: propWidth,
    };
  }, [propPadding, propGap, propWidth]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      gap: propGap1,
    };
  }, [propWidth1, propGap1]);

  const navIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight,
    };
  }, [propWidth2, propHeight]);

  const notificationsStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
    };
  }, [propFontSize]);

  const updateCountStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize1,
      lineHeight: propLineHeight,
    };
  }, [propFontSize1, propLineHeight]);

  const blankStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight1,
    };
  }, [propWidth3, propHeight1]);

  return (
    <div className="nav-item" style={navItemStyle}>
      <div className="title2" style={titleStyle}>
        <img
          className="nav-icon2"
          alt=""
          src={navIconImage}
          style={navIconStyle}
        />
        <div className="notifications2" style={notificationsStyle}>
          {pageTitle}
        </div>
      </div>
      {updateCount && (
        <div className="update-count2" style={updateCountStyle}>
          <div className="div12" style={divStyle}>
            10
          </div>
        </div>
      )}
      {dropdown && <div className="blank1" style={blankStyle} />}
    </div>
  );
};

export default FormContainer;
