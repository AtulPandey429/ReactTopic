import { FunctionComponent } from "react";
import SearchFormContainer1 from "./SearchFormContainer1";
import StateDefaultSizeLgIconD from "./StateDefaultSizeLgIconD";
import StatesDefault from "./StatesDefault";
import StateSelected from "./StateSelected";
import StateDefault4 from "./StateDefault4";
import StateDefault3 from "./StateDefault3";
import StateDefault2 from "./StateDefault2";
import StateDefault1 from "./StateDefault1";
import "./FormContainer1.css";

const FormContainer1: FunctionComponent = () => {
  return (
    <div className="frame-parent26">
      <div className="frame-parent27">
        <div className="frame-wrapper1">
          <SearchFormContainer1
            iconName="/frame-6322@2x.png"
            dropdownIconName="/social.svg"
            dropdownIconSize="/social.svg"
            iconName2="/faceneutral1.svg"
            socialIconName="/social2.svg"
            iconNameText="/heart1.svg"
            frameIconName="/messagecircle2.svg"
            propBorderRadius="unset"
            propBackgroundColor="unset"
            propBorder="unset"
            propBoxSizing="unset"
            propPadding="unset"
          />
        </div>
        <div className="frame-parent28">
          <img className="frame-child4" alt="" src="/frame-6323@2x.png" />
          <div className="frame-parent29">
            <div className="reena-parent">
              <div className="reena">Reena</div>
              <div className="days-ago3">4 days ago</div>
            </div>
            <div className="hello-everybody-i-container3">
              <p className="hello-everybody3">Hello, everybody!</p>
              <p className="hello-everybody3">
                I wanted to offer some great information about how the EdTech
                sector is being transformed by data analytics...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-frame">
        <StateDefaultSizeLgIconD
          chevronDown="/messagecircle3.svg"
          buttonText="Reply"
          chevronDown1="/social.svg"
          showLeftIcon
          showRightIcon={false}
          stateDefaultSizeLgIconDWidth="unset"
          stateDefaultSizeLgIconDHeight="1.5rem"
          stateDefaultSizeLgIconDPadding="0.34rem 0.58rem"
          stateDefaultSizeLgIconDGap="0.29rem"
          stateDefaultSizeLgIconDBorder="0.8px solid #eaecf0"
          stateDefaultSizeLgIconDBoxShadow="0px 0px 4px 1px rgba(155, 138, 251, 0.7), 0px 0px 0px 1px #9b8afb"
          stateDefaultSizeLgIconDBackgroundColor="#fff"
          iconTextGap="0.39rem"
          iconTextFlex="unset"
          chevronDownIconWidth="0.92rem"
          chevronDownIconHeight="0.92rem"
          buttonFontSize="0.75rem"
          buttonLineHeight="unset"
          buttonFontWeight="500"
          buttonColor="#475467"
          chevronDownIconWidth1="0.92rem"
          chevronDownIconHeight1="0.92rem"
        />
      </div>
      <div className="frame-parent30">
        <div className="bold-parent">
          <StatesDefault
            bold="/bold.svg"
            statesDefaultPadding="0.25rem"
            boldIconWidth="1.25rem"
            boldIconHeight="1.25rem"
          />
          <StateSelected
            italic="/italic.svg"
            stateSelectedPadding="0.25rem"
            italicIconWidth="1.25rem"
            italicIconHeight="1.25rem"
          />
          <StateDefault4
            strikethrough="/strikethrough.svg"
            stateDefaultPadding="0.25rem"
            strikethroughIconWidth="1.25rem"
            strikethroughIconHeight="1.25rem"
          />
          <StateDefault3
            link="/link.svg"
            stateDefaultPadding="0.25rem"
            linkIconWidth="1.25rem"
            linkIconHeight="1.25rem"
          />
          <StateDefault2
            dotpoints="/dotpoints.svg"
            stateDefaultPadding="0.25rem"
            dotpointsIconWidth="1.25rem"
            dotpointsIconHeight="1.25rem"
          />
          <StateDefault1
            code="/code.svg"
            stateDefaultPadding="0.25rem"
            codeIconWidth="1.25rem"
            codeIconHeight="1.25rem"
          />
        </div>
        <div className="write-your-reply-parent">
          <i className="write-your-reply">Write your reply...</i>
          <StateDefaultSizeLgIconD
            chevronDown="/send.svg"
            buttonText="Send"
            chevronDown1="/social.svg"
            showLeftIcon
            showRightIcon={false}
            stateDefaultSizeLgIconDWidth="unset"
            stateDefaultSizeLgIconDHeight="1.81rem"
            stateDefaultSizeLgIconDPadding="0.37rem 0.64rem"
            stateDefaultSizeLgIconDGap="0.43rem"
            stateDefaultSizeLgIconDBorder="unset"
            stateDefaultSizeLgIconDBoxShadow="unset"
            stateDefaultSizeLgIconDBackgroundColor="#7a5af8"
            iconTextGap="0.43rem"
            iconTextFlex="unset"
            chevronDownIconWidth="1.01rem"
            chevronDownIconHeight="1.01rem"
            buttonFontSize="0.75rem"
            buttonLineHeight="unset"
            buttonFontWeight="500"
            buttonColor="#fff"
            chevronDownIconWidth1="1.01rem"
            chevronDownIconHeight1="1.01rem"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
