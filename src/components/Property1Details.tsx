import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Property1Details.css";

type Property1DetailsType = {
  avatar?: string;
  logOut?: string;

  /** Style props */
  property1DetailsWidth?: CSSProperties["width"];
  property1DetailsPadding?: CSSProperties["padding"];
  property1DetailsGap?: CSSProperties["gap"];
  frameDivGap?: CSSProperties["gap"];
  avatarIconWidth?: CSSProperties["width"];
  avatarIconHeight?: CSSProperties["height"];
  nameEmailGap?: CSSProperties["gap"];
  nameFontSize?: CSSProperties["fontSize"];
  eMailFontSize?: CSSProperties["fontSize"];
  eMailLineHeight?: CSSProperties["lineHeight"];
  logOutIconWidth?: CSSProperties["width"];
  logOutIconHeight?: CSSProperties["height"];
};

const Property1Details: FunctionComponent<Property1DetailsType> = ({
  avatar,
  logOut,
  property1DetailsWidth,
  property1DetailsPadding,
  property1DetailsGap,
  frameDivGap,
  avatarIconWidth,
  avatarIconHeight,
  nameEmailGap,
  nameFontSize,
  eMailFontSize,
  eMailLineHeight,
  logOutIconWidth,
  logOutIconHeight,
}) => {
  const property1Details1Style: CSSProperties = useMemo(() => {
    return {
      width: property1DetailsWidth,
      padding: property1DetailsPadding,
      gap: property1DetailsGap,
    };
  }, [property1DetailsWidth, property1DetailsPadding, property1DetailsGap]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const avatarIconStyle: CSSProperties = useMemo(() => {
    return {
      width: avatarIconWidth,
      height: avatarIconHeight,
    };
  }, [avatarIconWidth, avatarIconHeight]);

  const nameEmailStyle: CSSProperties = useMemo(() => {
    return {
      gap: nameEmailGap,
    };
  }, [nameEmailGap]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: nameFontSize,
    };
  }, [nameFontSize]);

  const eMailStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: eMailFontSize,
      lineHeight: eMailLineHeight,
    };
  }, [eMailFontSize, eMailLineHeight]);

  const logOutIconStyle: CSSProperties = useMemo(() => {
    return {
      width: logOutIconWidth,
      height: logOutIconHeight,
    };
  }, [logOutIconWidth, logOutIconHeight]);

  return (
    <div className="property-1details" style={property1Details1Style}>
      <div className="avatar-parent" style={frameDiv2Style}>
        <img
          className="avatar-icon"
          alt=""
          src={avatar}
          style={avatarIconStyle}
        />
        <div className="name-email" style={nameEmailStyle}>
          <div className="name" style={nameStyle}>
            Jack Finnigan
          </div>
          <div className="e-mail" style={eMailStyle}>
            jackfinnigan@grovio.x..
          </div>
        </div>
      </div>
      <img
        className="log-out-icon"
        alt=""
        src={logOut}
        style={logOutIconStyle}
      />
    </div>
  );
};

export default Property1Details;
