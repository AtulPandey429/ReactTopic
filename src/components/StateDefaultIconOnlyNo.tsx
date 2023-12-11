import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefaultIconOnlyNo.css";

type StateDefaultIconOnlyNoType = {
  navIcon?: string;
  navTitle?: string;
  chevronDown?: string;
  dropdown?: boolean;
  updateCount?: boolean;

  /** Style props */
  stateDefaultIconOnlyNoBackgroundColor?: CSSProperties["backgroundColor"];
  stateDefaultIconOnlyNoBorderRadius?: CSSProperties["borderRadius"];
  stateDefaultIconOnlyNoBorder?: CSSProperties["border"];
  stateDefaultIconOnlyNoPadding?: CSSProperties["padding"];
  stateDefaultIconOnlyNoGap?: CSSProperties["gap"];
  titleWidth?: CSSProperties["width"];
  titleGap?: CSSProperties["gap"];
  navIconWidth?: CSSProperties["width"];
  navIconHeight?: CSSProperties["height"];
  notificationsFontSize?: CSSProperties["fontSize"];
  updateCountBackgroundColor?: CSSProperties["backgroundColor"];
  updateCountPadding?: CSSProperties["padding"];
  divFontSize?: CSSProperties["fontSize"];
  divLineHeight?: CSSProperties["lineHeight"];
  chevronDownIconWidth?: CSSProperties["width"];
  chevronDownIconHeight?: CSSProperties["height"];
};

const StateDefaultIconOnlyNo: FunctionComponent<StateDefaultIconOnlyNoType> = ({
  navIcon,
  navTitle = "Notifications",
  chevronDown,
  dropdown = true,
  updateCount = true,
  stateDefaultIconOnlyNoBackgroundColor,
  stateDefaultIconOnlyNoBorderRadius,
  stateDefaultIconOnlyNoBorder,
  stateDefaultIconOnlyNoPadding,
  stateDefaultIconOnlyNoGap,
  titleWidth,
  titleGap,
  navIconWidth,
  navIconHeight,
  notificationsFontSize,
  updateCountBackgroundColor,
  updateCountPadding,
  divFontSize,
  divLineHeight,
  chevronDownIconWidth,
  chevronDownIconHeight,
}) => {
  const stateDefaultIconOnlyNoStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: stateDefaultIconOnlyNoBackgroundColor,
      borderRadius: stateDefaultIconOnlyNoBorderRadius,
      border: stateDefaultIconOnlyNoBorder,
      padding: stateDefaultIconOnlyNoPadding,
      gap: stateDefaultIconOnlyNoGap,
    };
  }, [
    stateDefaultIconOnlyNoBackgroundColor,
    stateDefaultIconOnlyNoBorderRadius,
    stateDefaultIconOnlyNoBorder,
    stateDefaultIconOnlyNoPadding,
    stateDefaultIconOnlyNoGap,
  ]);

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
      backgroundColor: updateCountBackgroundColor,
      padding: updateCountPadding,
    };
  }, [updateCountBackgroundColor, updateCountPadding]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divFontSize, divLineHeight]);

  const chevronDownIconStyle: CSSProperties = useMemo(() => {
    return {
      width: chevronDownIconWidth,
      height: chevronDownIconHeight,
    };
  }, [chevronDownIconWidth, chevronDownIconHeight]);

  return (
    <div
      className="statedefault-icon-onlyno"
      style={stateDefaultIconOnlyNoStyle}
    >
      <div className="title" style={title1Style}>
        <img className="nav-icon" alt="" src={navIcon} style={navIcon1Style} />
        <div className="notifications" style={notifications1Style}>
          {navTitle}
        </div>
      </div>
      {updateCount && (
        <div className="update-count" style={updateCount1Style}>
          <div className="div1" style={div1Style}>
            10
          </div>
        </div>
      )}
      {dropdown && (
        <img
          className="chevron-down-icon"
          alt=""
          src={chevronDown}
          style={chevronDownIconStyle}
        />
      )}
    </div>
  );
};

export default StateDefaultIconOnlyNo;
