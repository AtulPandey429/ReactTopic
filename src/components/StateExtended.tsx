import { FunctionComponent, useMemo, type CSSProperties } from "react";

type StateExtendedType = {
  navIcon?: string;
  chevronUp?: string;
  updateCount?: boolean;
  dropdown?: boolean;

  /** Style props */
  stateExtendedWidth?: CSSProperties["width"];
  stateExtendedGap?: CSSProperties["gap"];
  navItemPadding?: CSSProperties["padding"];
  navItemGap?: CSSProperties["gap"];
  titleWidth?: CSSProperties["width"];
  titleGap?: CSSProperties["gap"];
  navIconWidth?: CSSProperties["width"];
  navIconHeight?: CSSProperties["height"];
  notificationsFontSize?: CSSProperties["fontSize"];
  updateCountPadding?: CSSProperties["padding"];
  divFontSize?: CSSProperties["fontSize"];
  divLineHeight?: CSSProperties["lineHeight"];
  chevronUpIconWidth?: CSSProperties["width"];
  chevronUpIconHeight?: CSSProperties["height"];
  navItemNavDropdownItemPadding?: CSSProperties["padding"];
  navItemNavDropdownItemGap?: CSSProperties["gap"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight1?: CSSProperties["height"];
  membersColor?: CSSProperties["color"];
  membersFontSize?: CSSProperties["fontSize"];
  membersLineHeight?: CSSProperties["lineHeight"];
  membersWidth?: CSSProperties["width"];
  navItemNavDropdownItemPadding1?: CSSProperties["padding"];
  navItemNavDropdownItemGap1?: CSSProperties["gap"];
  frameDivWidth2?: CSSProperties["width"];
  frameDivHeight2?: CSSProperties["height"];
  frameDivWidth3?: CSSProperties["width"];
  frameDivHeight3?: CSSProperties["height"];
  membersColor1?: CSSProperties["color"];
  membersFontSize1?: CSSProperties["fontSize"];
  membersLineHeight1?: CSSProperties["lineHeight"];
  membersWidth1?: CSSProperties["width"];
  navItemNavDropdownItemPadding2?: CSSProperties["padding"];
  navItemNavDropdownItemGap2?: CSSProperties["gap"];
  frameDivWidth4?: CSSProperties["width"];
  frameDivHeight4?: CSSProperties["height"];
  frameDivWidth5?: CSSProperties["width"];
  frameDivHeight5?: CSSProperties["height"];
  membersColor2?: CSSProperties["color"];
  membersFontSize2?: CSSProperties["fontSize"];
  membersLineHeight2?: CSSProperties["lineHeight"];
  membersWidth2?: CSSProperties["width"];
  membersFontWeight?: CSSProperties["fontWeight"];
};

const StateExtended: FunctionComponent<StateExtendedType> = ({
  navIcon,
  chevronUp,
  stateExtendedWidth,
  stateExtendedGap,
  navItemPadding,
  navItemGap,
  titleWidth,
  titleGap,
  navIconWidth,
  navIconHeight,
  notificationsFontSize,
  updateCountPadding,
  divFontSize,
  divLineHeight,
  chevronUpIconWidth,
  chevronUpIconHeight,
  navItemNavDropdownItemPadding,
  navItemNavDropdownItemGap,
  frameDivWidth,
  frameDivHeight,
  frameDivWidth1,
  frameDivHeight1,
  membersColor,
  membersFontSize,
  membersLineHeight,
  membersWidth,
  navItemNavDropdownItemPadding1,
  navItemNavDropdownItemGap1,
  frameDivWidth2,
  frameDivHeight2,
  frameDivWidth3,
  frameDivHeight3,
  membersColor1,
  membersFontSize1,
  membersLineHeight1,
  membersWidth1,
  navItemNavDropdownItemPadding2,
  navItemNavDropdownItemGap2,
  frameDivWidth4,
  frameDivHeight4,
  frameDivWidth5,
  frameDivHeight5,
  membersColor2,
  membersFontSize2,
  membersLineHeight2,
  membersWidth2,
  membersFontWeight,
  updateCount,
  dropdown,
}) => {
  const stateExtendedStyle: CSSProperties = useMemo(() => {
    return {
      width: stateExtendedWidth,
      gap: stateExtendedGap,
    };
  }, [stateExtendedWidth, stateExtendedGap]);

  const navItem6Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding,
      gap: navItemGap,
    };
  }, [navItemPadding, navItemGap]);

  const title6Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth,
      gap: titleGap,
    };
  }, [titleWidth, titleGap]);

  const navIcon6Style: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth,
      height: navIconHeight,
    };
  }, [navIconWidth, navIconHeight]);

  const notifications6Style: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize,
    };
  }, [notificationsFontSize]);

  const updateCount6Style: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding,
    };
  }, [updateCountPadding]);

  const div6Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divFontSize, divLineHeight]);

  const chevronUpIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: chevronUpIconWidth,
      height: chevronUpIconHeight,
    };
  }, [chevronUpIconWidth, chevronUpIconHeight]);

  const navItemNavDropdownItem3Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding,
      gap: navItemNavDropdownItemGap,
    };
  }, [navItemNavDropdownItemPadding, navItemNavDropdownItemGap]);

  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const frameDiv9Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [frameDivWidth1, frameDivHeight1]);

  const members3Style: CSSProperties = useMemo(() => {
    return {
      color: membersColor,
      fontSize: membersFontSize,
      lineHeight: membersLineHeight,
      width: membersWidth,
    };
  }, [membersColor, membersFontSize, membersLineHeight, membersWidth]);

  const navItemNavDropdownItem4Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding1,
      gap: navItemNavDropdownItemGap1,
    };
  }, [navItemNavDropdownItemPadding1, navItemNavDropdownItemGap1]);

  const frameDiv10Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth2,
      height: frameDivHeight2,
    };
  }, [frameDivWidth2, frameDivHeight2]);

  const frameDiv11Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth3,
      height: frameDivHeight3,
    };
  }, [frameDivWidth3, frameDivHeight3]);

  const members4Style: CSSProperties = useMemo(() => {
    return {
      color: membersColor1,
      fontSize: membersFontSize1,
      lineHeight: membersLineHeight1,
      width: membersWidth1,
    };
  }, [membersColor1, membersFontSize1, membersLineHeight1, membersWidth1]);

  const navItemNavDropdownItem5Style: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding2,
      gap: navItemNavDropdownItemGap2,
    };
  }, [navItemNavDropdownItemPadding2, navItemNavDropdownItemGap2]);

  const frameDiv12Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth4,
      height: frameDivHeight4,
    };
  }, [frameDivWidth4, frameDivHeight4]);

  const frameDiv13Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth5,
      height: frameDivHeight5,
    };
  }, [frameDivWidth5, frameDivHeight5]);

  const members5Style: CSSProperties = useMemo(() => {
    return {
      color: membersColor2,
      fontSize: membersFontSize2,
      lineHeight: membersLineHeight2,
      width: membersWidth2,
      fontWeight: membersFontWeight,
    };
  }, [
    membersColor2,
    membersFontSize2,
    membersLineHeight2,
    membersWidth2,
    membersFontWeight,
  ]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[6px] text-left text-sm text-colors-text-title-primary-text font-inter-body-14-semibold"
      style={stateExtendedStyle}
    >
      <div
        className="rounded-border-radius-radius-8 bg-color-gray-50 flex flex-row items-center justify-start py-spacing-space-6 px-spacing-space-8 gap-[8px] border-[1px] border-solid border-colors-border-radius-primary-border-radius"
        style={navItem6Style}
      >
        <div
          className="w-[200px] flex flex-row items-center justify-start gap-[14px]"
          style={title6Style}
        >
          <img
            className="relative rounded-border-radius-radius-6 w-7 h-7 overflow-hidden shrink-0"
            alt=""
            src={navIcon}
            style={navIcon6Style}
          />
          <div className="relative font-medium" style={notifications6Style}>
            Analytics
          </div>
        </div>
        <div
          className="rounded-border-radius-radius-6 bg-color-gray-25 hidden flex-col items-start justify-start py-0.5 px-1 text-colors-text-title-secondary-text border-[1px] border-solid border-colors-border-radius-primary-border-radius"
          style={updateCount6Style}
        >
          <div className="relative leading-[18px]" style={div6Style}>
            10
          </div>
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={chevronUp}
          style={chevronUpIcon1Style}
        />
      </div>
      <div className="flex flex-col items-start justify-start">
        <div
          className="flex flex-row items-start justify-start py-2 pr-[92px] pl-[65px] gap-[7px]"
          style={navItemNavDropdownItem3Style}
        >
          <div
            className="relative w-5 h-5 overflow-hidden shrink-0"
            style={frameDiv8Style}
          >
            <div
              className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-700 w-2 h-2 overflow-hidden"
              style={frameDiv9Style}
            />
          </div>
          <div
            className="relative leading-[18px] inline-block w-[117px] shrink-0"
            style={members3Style}
          >
            Members
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start py-2 pr-[92px] pl-[65px] gap-[7px]"
          style={navItemNavDropdownItem4Style}
        >
          <div
            className="relative w-5 h-5 overflow-hidden shrink-0"
            style={frameDiv10Style}
          >
            <div
              className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-500 w-2 h-2 overflow-hidden"
              style={frameDiv11Style}
            />
          </div>
          <div
            className="relative leading-[18px] inline-block w-[117px] shrink-0"
            style={members4Style}
          >
            Messages
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start py-2 pr-[92px] pl-[65px] gap-[7px]"
          style={navItemNavDropdownItem5Style}
        >
          <div
            className="relative w-5 h-5 overflow-hidden shrink-0"
            style={frameDiv12Style}
          >
            <div
              className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] rounded-sm bg-color-primary-300 w-2 h-2 overflow-hidden"
              style={frameDiv13Style}
            />
          </div>
          <div
            className="relative leading-[18px] inline-block w-[117px] shrink-0"
            style={members5Style}
          >
            Topics
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateExtended;
