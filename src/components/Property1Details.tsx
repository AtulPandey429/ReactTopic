import { FunctionComponent, useMemo, type CSSProperties } from "react";

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
  const property1DetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: property1DetailsWidth,
      padding: property1DetailsPadding,
      gap: property1DetailsGap,
    };
  }, [property1DetailsWidth, property1DetailsPadding, property1DetailsGap]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const avatarIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: avatarIconWidth,
      height: avatarIconHeight,
    };
  }, [avatarIconWidth, avatarIconHeight]);

  const nameEmail1Style: CSSProperties = useMemo(() => {
    return {
      gap: nameEmailGap,
    };
  }, [nameEmailGap]);

  const name1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: nameFontSize,
    };
  }, [nameFontSize]);

  const eMail1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: eMailFontSize,
      lineHeight: eMailLineHeight,
    };
  }, [eMailFontSize, eMailLineHeight]);

  const logOutIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: logOutIconWidth,
      height: logOutIconHeight,
    };
  }, [logOutIconWidth, logOutIconHeight]);

  return (
    <div
      className="rounded-border-radius-radius-16 bg-base-white box-border w-64 flex flex-row items-center justify-start p-4 gap-[24px] text-left text-sm text-colors-text-title-primary-text font-inter-body-14-semibold border-[1px] border-solid border-colors-border-radius-primary-border-radius"
      style={property1DetailsStyle}
    >
      <div
        className="flex flex-row items-center justify-start gap-[8px]"
        style={frameDiv7Style}
      >
        <img
          className="relative rounded-[10.32px] w-[42px] h-[42px] object-cover"
          alt=""
          src={avatar}
          style={avatarIcon1Style}
        />
        <div
          className="flex flex-col items-start justify-start gap-[4px]"
          style={nameEmail1Style}
        >
          <div className="self-stretch relative font-medium" style={name1Style}>
            Jack Finnigan
          </div>
          <div
            className="self-stretch relative text-xs leading-[16px] text-colors-text-body-primary-text overflow-hidden text-ellipsis whitespace-nowrap"
            style={eMail1Style}
          >
            jackfinnigan@grovio.x..
          </div>
        </div>
      </div>
      <img
        className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
        alt=""
        src={logOut}
        style={logOutIcon1Style}
      />
    </div>
  );
};

export default Property1Details;
