import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./NavItemNavDropdownItem.css";

type NavItemNavDropdownItemType = {
  members?: string;

  /** Style props */
  navItemNavDropdownItemPadding?: CSSProperties["padding"];
  navItemNavDropdownItemGap?: CSSProperties["gap"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight1?: CSSProperties["height"];
  membersColor?: CSSProperties["color"];
  membersFontSize?: CSSProperties["fontSize"];
  membersLineHeight?: CSSProperties["lineHeight"];
  membersWidth?: CSSProperties["width"];
  membersFontWeight?: CSSProperties["fontWeight"];
};

const NavItemNavDropdownItem: FunctionComponent<NavItemNavDropdownItemType> = ({
  members,
  navItemNavDropdownItemPadding,
  navItemNavDropdownItemGap,
  frameDivWidth,
  frameDivHeight,
  frameDivBackgroundColor,
  frameDivWidth1,
  frameDivHeight1,
  membersColor,
  membersFontSize,
  membersLineHeight,
  membersWidth,
  membersFontWeight,
}) => {
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
      backgroundColor: frameDivBackgroundColor,
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [frameDivBackgroundColor, frameDivWidth1, frameDivHeight1]);

  const membersStyle: CSSProperties = useMemo(() => {
    return {
      color: membersColor,
      fontSize: membersFontSize,
      lineHeight: membersLineHeight,
      width: membersWidth,
      fontWeight: membersFontWeight,
    };
  }, [
    membersColor,
    membersFontSize,
    membersLineHeight,
    membersWidth,
    membersFontWeight,
  ]);

  return (
    <div
      className="nav-itemnav-dropdown-item"
      style={navItemNavDropdownItemStyle}
    >
      <div className="nav-itemnav-dropdown-item-inner" style={frameDivStyle}>
        <div className="frame-inner" style={frameDiv1Style} />
      </div>
      <div className="members" style={membersStyle}>
        {members}
      </div>
    </div>
  );
};

export default NavItemNavDropdownItem;
