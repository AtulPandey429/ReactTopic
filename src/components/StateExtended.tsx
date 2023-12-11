import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateDefaultIconOnlyNo from "./StateDefaultIconOnlyNo";
import NavItemNavDropdownItem from "./NavItemNavDropdownItem";
import "./StateExtended.css";

type StateExtendedType = {
  navIcon?: string;
  chevronUp?: string;

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
  membersFontWeight?: CSSProperties["fontWeight"];
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
  membersFontWeight,
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
}) => {
  const stateExtendedStyle: CSSProperties = useMemo(() => {
    return {
      width: stateExtendedWidth,
      gap: stateExtendedGap,
    };
  }, [stateExtendedWidth, stateExtendedGap]);

  const stateDefaultIconOnlyNoStyle: CSSProperties = useMemo(() => {
    return {
      padding: navItemPadding,
      gap: navItemGap,
    };
  }, [navItemPadding, navItemGap]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      width: titleWidth,
      gap: titleGap,
    };
  }, [titleWidth, titleGap]);

  const navIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: navIconWidth,
      height: navIconHeight,
    };
  }, [navIconWidth, navIconHeight]);

  const notifications1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: notificationsFontSize,
    };
  }, [notificationsFontSize]);

  const updateCount1Style: CSSProperties = useMemo(() => {
    return {
      padding: updateCountPadding,
    };
  }, [updateCountPadding]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divFontSize, divLineHeight]);

  const chevronDownIconStyle: CSSProperties = useMemo(() => {
    return {
      width: chevronUpIconWidth,
      height: chevronUpIconHeight,
    };
  }, [chevronUpIconWidth, chevronUpIconHeight]);

  const navItemNavDropdownItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding,
      gap: navItemNavDropdownItemGap,
    };
  }, [navItemNavDropdownItemPadding, navItemNavDropdownItemGap]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [frameDivWidth1, frameDivHeight1]);

  const membersStyle: CSSProperties = useMemo(() => {
    return {
      color: membersColor,
      fontSize: membersFontSize,
      lineHeight: membersLineHeight,
      width: membersWidth,
    };
  }, [membersColor, membersFontSize, membersLineHeight, membersWidth]);

  const navItemNavDropdownItemStyle1: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding1,
      gap: navItemNavDropdownItemGap1,
    };
  }, [navItemNavDropdownItemPadding1, navItemNavDropdownItemGap1]);

  const frameDivStyle1: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth2,
      height: frameDivHeight2,
    };
  }, [frameDivWidth2, frameDivHeight2]);

  const frameDiv1Style1: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth3,
      height: frameDivHeight3,
    };
  }, [frameDivWidth3, frameDivHeight3]);

  const membersStyle1: CSSProperties = useMemo(() => {
    return {
      color: membersColor1,
      fontSize: membersFontSize1,
      lineHeight: membersLineHeight1,
      width: membersWidth1,
      fontWeight: membersFontWeight,
    };
  }, [
    membersColor1,
    membersFontSize1,
    membersLineHeight1,
    membersWidth1,
    membersFontWeight,
  ]);

  const navItemNavDropdownItemStyle2: CSSProperties = useMemo(() => {
    return {
      padding: navItemNavDropdownItemPadding2,
      gap: navItemNavDropdownItemGap2,
    };
  }, [navItemNavDropdownItemPadding2, navItemNavDropdownItemGap2]);

  const frameDivStyle2: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth4,
      height: frameDivHeight4,
    };
  }, [frameDivWidth4, frameDivHeight4]);

  const frameDiv1Style2: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth5,
      height: frameDivHeight5,
    };
  }, [frameDivWidth5, frameDivHeight5]);

  const membersStyle2: CSSProperties = useMemo(() => {
    return {
      color: membersColor2,
      fontSize: membersFontSize2,
      lineHeight: membersLineHeight2,
      width: membersWidth2,
    };
  }, [membersColor2, membersFontSize2, membersLineHeight2, membersWidth2]);

  return (
    <div className="stateextended" style={stateExtendedStyle}>
      <StateDefaultIconOnlyNo
        navIcon="/nav-icon13.svg"
        navTitle="Analytics"
        chevronDown="/chevronup.svg"
        dropdown
        updateCount={false}
        stateDefaultIconOnlyNoBackgroundColor="#f9fafb"
        stateDefaultIconOnlyNoBorderRadius="8px"
        stateDefaultIconOnlyNoBorder="1px solid #eaecf0"
        stateDefaultIconOnlyNoPadding="6px 8px"
        stateDefaultIconOnlyNoGap="8px"
        titleWidth="200px"
        titleGap="14px"
        navIconWidth="28px"
        navIconHeight="28px"
        notificationsFontSize="14px"
        updateCountBackgroundColor="#fcfcfd"
        updateCountPadding="2px 4px"
        divFontSize="14px"
        divLineHeight="18px"
        chevronDownIconWidth="24px"
        chevronDownIconHeight="24px"
      />
      <div className="nav-dropdown">
        <NavItemNavDropdownItem
          members="Members"
          navItemNavDropdownItemPadding="8px 92px 8px 65px"
          navItemNavDropdownItemGap="7px"
          frameDivWidth="20px"
          frameDivHeight="20px"
          frameDivBackgroundColor="#5925dc"
          frameDivWidth1="8px"
          frameDivHeight1="8px"
          membersColor="#101828"
          membersFontSize="14px"
          membersLineHeight="18px"
          membersWidth="117px"
          membersFontWeight="unset"
        />
        <NavItemNavDropdownItem
          members="Messages"
          navItemNavDropdownItemPadding="8px 92px 8px 65px"
          navItemNavDropdownItemGap="7px"
          frameDivWidth="20px"
          frameDivHeight="20px"
          frameDivBackgroundColor="#7a5af8"
          frameDivWidth1="8px"
          frameDivHeight1="8px"
          membersColor="#101828"
          membersFontSize="14px"
          membersLineHeight="18px"
          membersWidth="117px"
          membersFontWeight="unset"
        />
        <NavItemNavDropdownItem
          members="Topics"
          navItemNavDropdownItemPadding="8px 92px 8px 65px"
          navItemNavDropdownItemGap="7px"
          frameDivWidth="20px"
          frameDivHeight="20px"
          frameDivBackgroundColor="#bdb4fe"
          frameDivWidth1="8px"
          frameDivHeight1="8px"
          membersColor="#101828"
          membersFontSize="14px"
          membersLineHeight="18px"
          membersWidth="117px"
          membersFontWeight="unset"
        />
      </div>
    </div>
  );
};

export default StateExtended;
