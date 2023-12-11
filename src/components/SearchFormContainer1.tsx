import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateDefaultSizeLgIconD from "./StateDefaultSizeLgIconD";
import SentimentHappy from "./SentimentHappy";
import SocialChannel from "./SocialChannel";
import "./SearchFormContainer1.css";

type SearchFormContainer1Type = {
  iconName?: string;
  dropdownIconName?: string;
  dropdownIconSize?: string;
  iconName2?: string;
  socialIconName?: string;
  iconNameText?: string;
  frameIconName?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBoxSizing?: CSSProperties["boxSizing"];
  propPadding?: CSSProperties["padding"];
};

const SearchFormContainer1: FunctionComponent<SearchFormContainer1Type> = ({
  iconName,
  dropdownIconName,
  dropdownIconSize,
  iconName2,
  socialIconName,
  iconNameText,
  frameIconName,
  propBorderRadius,
  propBackgroundColor,
  propBorder,
  propBoxSizing,
  propPadding,
}) => {
  const frameDiv19Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      boxSizing: propBoxSizing,
      padding: propPadding,
    };
  }, [
    propBorderRadius,
    propBackgroundColor,
    propBorder,
    propBoxSizing,
    propPadding,
  ]);

  return (
    <div className="frame-parent22" style={frameDiv19Style}>
      <div className="frame-parent23">
        <div className="frame-parent24">
          <img className="frame-icon" alt="" src={iconName} />
          <div className="frame-parent25">
            <div className="jessica-felicia-group">
              <div className="jessica-felicia1">Jessica Felicia</div>
              <div className="days-ago2">4 days ago</div>
            </div>
            <div className="hello-everybody-i-container2">
              <p className="hello-everybody2">Hello, everybody!</p>
              <p className="hello-everybody2">
                I wanted to offer some great information about how the EdTech
                sector is being transformed by data analytics...
              </p>
            </div>
            <div className="see-more">See More</div>
          </div>
        </div>
        <div className="button-group">
          <StateDefaultSizeLgIconD
            chevronDown="/social.svg"
            buttonText="Feedback"
            chevronDown1="/social.svg"
            showLeftIcon={false}
            showRightIcon={false}
            stateDefaultSizeLgIconDWidth="4.75rem"
            stateDefaultSizeLgIconDHeight="1.5rem"
            stateDefaultSizeLgIconDPadding="0.25rem 0.5rem"
            stateDefaultSizeLgIconDGap="0.5rem"
            stateDefaultSizeLgIconDBorder="1px solid #f2f4f7"
            stateDefaultSizeLgIconDBoxShadow="unset"
            stateDefaultSizeLgIconDBackgroundColor="#fff"
            iconTextGap="0.5rem"
            iconTextFlex="unset"
            chevronDownIconWidth="0.75rem"
            chevronDownIconHeight="0.75rem"
            buttonFontSize="0.75rem"
            buttonLineHeight="1rem"
            buttonFontWeight="unset"
            buttonColor="#344054"
            chevronDownIconWidth1="0.75rem"
            chevronDownIconHeight1="0.75rem"
          />
          <SentimentHappy
            faceHappy="/faceneutral.svg"
            sentimentHappyBorder="1px solid #eaecf0"
            sentimentHappyWidth="1.5rem"
            sentimentHappyHeight="1.5rem"
            sentimentHappyPadding="0.25rem"
            faceHappyIconWidth="0.75rem"
            faceHappyIconHeight="0.75rem"
          />
          <SocialChannel
            social="/social1.svg"
            socialChannel="#general"
            socialChannelBorderRadius="6px"
            socialChannelPadding="0.25rem 0.38rem"
            socialChannelGap="0.25rem"
            socialChannelBackgroundColor="#fff"
            socialChannelHeight="1.5rem"
            socialChannelBorder="1px solid #eaecf0"
            socialIconWidth="0.79rem"
            socialIconHeight="0.79rem"
            channelFontSize="0.5rem"
          />
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="like-parent">
          <div className="like">
            <img className="heart-icon2" alt="" src={iconNameText} />
            <div className="div10">323</div>
          </div>
          <div className="like">
            <img className="heart-icon2" alt="" src={frameIconName} />
            <div className="div10">323</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer1;
