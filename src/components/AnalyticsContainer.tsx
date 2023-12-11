import { FunctionComponent } from "react";
import ChipWhatsApp from "./ChipWhatsApp";
import StateDefaultSizeLgIconD from "./StateDefaultSizeLgIconD";
import "./AnalyticsContainer.css";

const AnalyticsContainer: FunctionComponent = () => {
  return (
    <div className="messages-inner1">
      <div className="messages-parent">
        <div className="messages2">Messages</div>
        <div className="frame-parent31">
          <div className="community-chip-parent">
            <ChipWhatsApp
              social="/social5.svg"
              productIconClose="/product-iconclose.svg"
              communityChipHeight="1.5rem"
              communityChipPadding="0.25rem 0.38rem"
              communityChipGap="0.38rem"
              socialNameGap="0.25rem"
              socialIconWidth="0.88rem"
              socialIconHeight="0.88rem"
              discordFontSize="0.75rem"
              productIconCloseWidth="0.88rem"
              productIconCloseHeight="0.88rem"
            />
            <img
              className="chevron-selector-vertical-icon2"
              alt=""
              src="/chevronselectorvertical.svg"
            />
          </div>
          <StateDefaultSizeLgIconD
            chevronDown="/social.svg"
            buttonText="Last week"
            chevronDown1="/chevrondown.svg"
            showLeftIcon={false}
            showRightIcon
            stateDefaultSizeLgIconDWidth="11.69rem"
            stateDefaultSizeLgIconDHeight="2.25rem"
            stateDefaultSizeLgIconDPadding="0.56rem 0.75rem"
            stateDefaultSizeLgIconDGap="5rem"
            stateDefaultSizeLgIconDBorder="1px solid #f2f4f7"
            stateDefaultSizeLgIconDBoxShadow="unset"
            stateDefaultSizeLgIconDBackgroundColor="#fff"
            iconTextGap="0.5rem"
            iconTextFlex="1"
            chevronDownIconWidth="1.13rem"
            chevronDownIconHeight="1.13rem"
            buttonFontSize="0.75rem"
            buttonLineHeight="unset"
            buttonFontWeight="500"
            buttonColor="#344054"
            chevronDownIconWidth1="1.19rem"
            chevronDownIconHeight1="1.19rem"
          />
          <div className="download-wrapper">
            <img className="download-icon2" alt="" src="/download.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContainer;
