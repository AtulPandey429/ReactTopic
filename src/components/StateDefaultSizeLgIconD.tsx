import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StateDefaultSizeLgIconD.css";

type StateDefaultSizeLgIconDType = {
  chevronDown?: string;
  buttonText?: string;
  chevronDown1?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;

  /** Style props */
  stateDefaultSizeLgIconDWidth?: CSSProperties["width"];
  stateDefaultSizeLgIconDHeight?: CSSProperties["height"];
  stateDefaultSizeLgIconDPadding?: CSSProperties["padding"];
  stateDefaultSizeLgIconDGap?: CSSProperties["gap"];
  stateDefaultSizeLgIconDBorder?: CSSProperties["border"];
  stateDefaultSizeLgIconDBoxShadow?: CSSProperties["boxShadow"];
  stateDefaultSizeLgIconDBackgroundColor?: CSSProperties["backgroundColor"];
  iconTextGap?: CSSProperties["gap"];
  iconTextFlex?: CSSProperties["flex"];
  chevronDownIconWidth?: CSSProperties["width"];
  chevronDownIconHeight?: CSSProperties["height"];
  buttonFontSize?: CSSProperties["fontSize"];
  buttonLineHeight?: CSSProperties["lineHeight"];
  buttonFontWeight?: CSSProperties["fontWeight"];
  buttonColor?: CSSProperties["color"];
  chevronDownIconWidth1?: CSSProperties["width"];
  chevronDownIconHeight1?: CSSProperties["height"];
};

const StateDefaultSizeLgIconD: FunctionComponent<
  StateDefaultSizeLgIconDType
> = ({
  chevronDown,
  buttonText = "Button",
  chevronDown1,
  showLeftIcon = true,
  showRightIcon = true,
  stateDefaultSizeLgIconDWidth,
  stateDefaultSizeLgIconDHeight,
  stateDefaultSizeLgIconDPadding,
  stateDefaultSizeLgIconDGap,
  stateDefaultSizeLgIconDBorder,
  stateDefaultSizeLgIconDBoxShadow,
  stateDefaultSizeLgIconDBackgroundColor,
  iconTextGap,
  iconTextFlex,
  chevronDownIconWidth,
  chevronDownIconHeight,
  buttonFontSize,
  buttonLineHeight,
  buttonFontWeight,
  buttonColor,
  chevronDownIconWidth1,
  chevronDownIconHeight1,
}) => {
  const stateDefaultSizeLgIconDStyle: CSSProperties = useMemo(() => {
    return {
      width: stateDefaultSizeLgIconDWidth,
      height: stateDefaultSizeLgIconDHeight,
      padding: stateDefaultSizeLgIconDPadding,
      gap: stateDefaultSizeLgIconDGap,
      border: stateDefaultSizeLgIconDBorder,
      boxShadow: stateDefaultSizeLgIconDBoxShadow,
      backgroundColor: stateDefaultSizeLgIconDBackgroundColor,
    };
  }, [
    stateDefaultSizeLgIconDWidth,
    stateDefaultSizeLgIconDHeight,
    stateDefaultSizeLgIconDPadding,
    stateDefaultSizeLgIconDGap,
    stateDefaultSizeLgIconDBorder,
    stateDefaultSizeLgIconDBoxShadow,
    stateDefaultSizeLgIconDBackgroundColor,
  ]);

  const iconTextStyle: CSSProperties = useMemo(() => {
    return {
      gap: iconTextGap,
      flex: iconTextFlex,
    };
  }, [iconTextGap, iconTextFlex]);

  const chevronDownIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: chevronDownIconWidth,
      height: chevronDownIconHeight,
    };
  }, [chevronDownIconWidth, chevronDownIconHeight]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
      fontWeight: buttonFontWeight,
      color: buttonColor,
    };
  }, [buttonFontSize, buttonLineHeight, buttonFontWeight, buttonColor]);

  const chevronDownIcon2Style: CSSProperties = useMemo(() => {
    return {
      width: chevronDownIconWidth1,
      height: chevronDownIconHeight1,
    };
  }, [chevronDownIconWidth1, chevronDownIconHeight1]);

  return (
    <div
      className="statedefault-sizelg-icond"
      style={stateDefaultSizeLgIconDStyle}
    >
      <div className="icon-text" style={iconTextStyle}>
        {showLeftIcon && (
          <img
            className="chevron-down-icon2"
            alt=""
            src={chevronDown}
            style={chevronDownIcon1Style}
          />
        )}
        <div className="button" style={buttonStyle}>
          {buttonText}
        </div>
      </div>
      {showRightIcon && (
        <img
          className="chevron-down-icon3"
          alt=""
          src={chevronDown1}
          style={chevronDownIcon2Style}
        />
      )}
    </div>
  );
};

export default StateDefaultSizeLgIconD;
