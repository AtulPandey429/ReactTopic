import { FunctionComponent, useCallback } from "react";
import LabelRightFalseLabelLeft from "../components/LabelRightFalseLabelLeft";
import Data12Months from "../components/Data12Months";
import ChartBar from "../components/ChartBar";
import GraphBarDetails from "../components/GraphBarDetails";
import Container from "../components/Container";
import StateDefaultSizeLgIconD from "../components/StateDefaultSizeLgIconD";
import SearchFormContainer1 from "../components/SearchFormContainer1";
import FormContainer1 from "../components/FormContainer1";
import TypeLike from "../components/TypeLike";
import SentimentHappy from "../components/SentimentHappy";
import SocialChannel from "../components/SocialChannel";
import AnalyticsContainer from "../components/AnalyticsContainer";
import TypeSearch from "../components/TypeSearch";
import TypeTitle from "../components/TypeTitle";
import SearchFormContainer from "../components/SearchFormContainer";
import IconOnlyFalseDefaultFalse from "../components/IconOnlyFalseDefaultFalse";
import "./Messages.css";

const Messages: FunctionComponent = () => {
  const onMessagesContainerClick = useCallback(() => {
    // Please sync "Topics" to the project
  }, []);

  return (
    <div className="messages" onClick={onMessagesContainerClick}>
      <div className="messages-inner">
        <div className="frame-parent">
          <div className="community-parent">
            <div className="community">Community</div>
            <div className="social-parent">
              <img className="social-icon" alt="" src="/social.svg" />
              <div className="community-name">Community Name</div>
            </div>
          </div>
          <img
            className="chevron-selector-vertical-icon"
            alt=""
            src="/social.svg"
          />
        </div>
      </div>
      <div className="frame-group">
        <div className="frame-container">
          <div className="pie-chart-parent">
            <img className="pie-chart-icon" alt="" src="/piechart.svg" />
            <div className="community">Analytics</div>
          </div>
          <img className="chevron-right-icon" alt="" src="/chevronright.svg" />
        </div>
        <div className="community">Messages</div>
      </div>
      <div className="messages-child">
        <div className="frame-div">
          <div className="messages-trend-wrapper">
            <div className="messages-trend">Messages Trend</div>
          </div>
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="axis-parent">
                <div className="axis">
                  <LabelRightFalseLabelLeft
                    labelRightFalseLabelLeftHeight="11.94rem"
                    labelRightFalseLabelLeftAlignSelf="stretch"
                    yAxisLineWidth="unset"
                    yAxisLineGap="0.5rem"
                    yAxisLineAlignSelf="stretch"
                    divFontSize="0.63rem"
                    divWidth="1.63rem"
                    lineDivHeight="0.03rem"
                    yAxisLineWidth1="unset"
                    yAxisLineGap1="0.5rem"
                    yAxisLineAlignSelf1="stretch"
                    divFontSize1="0.63rem"
                    divWidth1="1.63rem"
                    lineDivHeight1="0.03rem"
                    yAxisLineWidth2="unset"
                    yAxisLineGap2="0.5rem"
                    yAxisLineAlignSelf2="stretch"
                    divFontSize2="0.63rem"
                    divWidth2="1.63rem"
                    lineDivHeight2="0.03rem"
                    yAxisLineWidth3="unset"
                    yAxisLineGap3="0.5rem"
                    yAxisLineAlignSelf3="stretch"
                    divFontSize3="0.63rem"
                    divWidth3="1.63rem"
                    lineDivHeight3="0.03rem"
                    yAxisLineWidth4="unset"
                    yAxisLineGap4="0.5rem"
                    yAxisLineAlignSelf4="stretch"
                    divFontSize4="0.63rem"
                    divWidth4="1.63rem"
                    lineDivHeight4="0.03rem"
                    yAxisLineWidth5="unset"
                    yAxisLineGap5="0.5rem"
                    yAxisLineAlignSelf5="stretch"
                    divFontSize5="0.63rem"
                    divWidth5="1.63rem"
                    lineDivHeight5="0.03rem"
                  />
                  <Data12Months
                    data12MonthsPadding="0rem 1.5rem"
                    janFontSize="0.63rem"
                    febFontSize="0.63rem"
                    marFontSize="0.63rem"
                    aprFontSize="0.63rem"
                    mayFontSize="0.63rem"
                    junFontSize="0.63rem"
                    julFontSize="0.63rem"
                    augFontSize="0.63rem"
                    sepFontSize="0.63rem"
                    octFontSize="0.63rem"
                    novFontSize="0.63rem"
                    decFontSize="0.63rem"
                  />
                </div>
                <ChartBar
                  chartBarWidth="53.06rem"
                  chartBarPadding="0rem 1.5rem"
                  chartBarMargin="0 !important"
                  chartBarPosition="absolute"
                  chartBarTop="0.63rem"
                  chartBarLeft="0rem"
                  chartBarZIndex="1"
                  graphBarGap="0.06rem"
                  responseTimeWidth="0.5rem"
                  responseTimeHeight="4rem"
                  noReplyWidth="0.5rem"
                  noReplyHeight="5.06rem"
                  hasReplyWidth="0.5rem"
                  hasReplyHeight="2.88rem"
                  graphBarGap1="0.06rem"
                  responseTimeWidth1="0.5rem"
                  responseTimeHeight1="3.06rem"
                  noReplyWidth1="0.5rem"
                  noReplyHeight1="5.06rem"
                  hasReplyWidth1="0.5rem"
                  hasReplyHeight1="1.5rem"
                  graphBarGap2="0.06rem"
                  responseTimeWidth2="0.5rem"
                  responseTimeHeight2="3.81rem"
                  noReplyWidth2="0.5rem"
                  noReplyHeight2="3.44rem"
                  hasReplyWidth2="0.5rem"
                  hasReplyHeight2="0.81rem"
                  graphBarGap3="0.06rem"
                  responseTimeWidth3="0.5rem"
                  responseTimeHeight3="4rem"
                  noReplyWidth3="0.5rem"
                  noReplyHeight3="5.06rem"
                  hasReplyWidth3="0.5rem"
                  hasReplyHeight3="2.88rem"
                  graphBarGap4="0.06rem"
                  responseTimeWidth4="0.5rem"
                  responseTimeHeight4="3.06rem"
                  noReplyWidth4="0.5rem"
                  noReplyHeight4="5.06rem"
                  hasReplyWidth4="0.5rem"
                  hasReplyHeight4="1.5rem"
                  graphBarGap5="0.06rem"
                  responseTimeWidth5="0.5rem"
                  responseTimeHeight5="3.81rem"
                  noReplyWidth5="0.5rem"
                  noReplyHeight5="3.44rem"
                  hasReplyWidth5="0.5rem"
                  hasReplyHeight5="0.81rem"
                  graphBarGap6="0.06rem"
                  responseTimeWidth6="0.5rem"
                  responseTimeHeight6="6.56rem"
                  noReplyWidth6="0.5rem"
                  noReplyHeight6="4.06rem"
                  hasReplyWidth6="0.5rem"
                  hasReplyHeight6="1.19rem"
                  graphBarGap7="0.06rem"
                  responseTimeWidth7="0.5rem"
                  responseTimeHeight7="4.69rem"
                  noReplyWidth7="0.5rem"
                  noReplyHeight7="3.56rem"
                  hasReplyWidth7="0.5rem"
                  hasReplyHeight7="3.88rem"
                  graphBarGap8="0.06rem"
                  responseTimeWidth8="0.5rem"
                  responseTimeHeight8="10.94rem"
                  noReplyWidth8="0.5rem"
                  noReplyHeight8="5.06rem"
                  hasReplyWidth8="0.5rem"
                  hasReplyHeight8="1.5rem"
                  graphBarGap9="0.06rem"
                  responseTimeWidth9="0.5rem"
                  responseTimeHeight9="6.56rem"
                  noReplyWidth9="0.5rem"
                  noReplyHeight9="5.06rem"
                  hasReplyWidth9="0.5rem"
                  hasReplyHeight9="2.88rem"
                  graphBarGap10="0.06rem"
                  responseTimeWidth10="0.5rem"
                  responseTimeHeight10="4.69rem"
                  noReplyWidth10="0.5rem"
                  noReplyHeight10="3.56rem"
                  hasReplyWidth10="0.5rem"
                  hasReplyHeight10="3.88rem"
                  graphBarGap11="0.06rem"
                  responseTimeWidth11="0.5rem"
                  responseTimeHeight11="4.69rem"
                  noReplyWidth11="0.5rem"
                  noReplyHeight11="3.56rem"
                  hasReplyWidth11="0.5rem"
                  hasReplyHeight11="3.88rem"
                />
              </div>
              <GraphBarDetails
                reply="Post"
                members="(230)"
                hasReply="Replies"
                members1="(430)"
                responseTime="Reactions"
                prop="40%"
                h44m="(1233)"
                showMembers={false}
                membersVisible={false}
                showH44m={false}
                graphBarDetailsWidth="10.13rem"
                graphBarDetailsPadding="0.75rem"
                graphBarDetailsMargin="0 !important"
                graphBarDetailsPosition="absolute"
                graphBarDetailsTop="-1.25rem"
                graphBarDetailsLeft="31.31rem"
                graphBarDetailsZIndex="1"
                frameDivGap="0.88rem"
                frameDivAlignSelf="stretch"
                frameDivPadding="0.25rem 0.5rem"
                fridayJuly26FontSize="0.63rem"
                frameDivPadding1="0rem 0rem 0rem 0.13rem"
                frameDivGap1="0.75rem"
                frameDivGap2="0.5rem"
                frameDivGap3="0.25rem"
                frameDivWidth="0.5rem"
                frameDivHeight="0.5rem"
                replyFontSize="0.63rem"
                replyWidth="5.88rem"
                replyHeight="unset"
                frameDivGap4="0.25rem"
                divFontSize="0.63rem"
                membersFontSize="0.63rem"
                frameDivGap5="0.5rem"
                frameDivGap6="0.25rem"
                frameDivWidth1="0.5rem"
                frameDivHeight1="0.5rem"
                hasReplyFontSize="0.63rem"
                hasReplyWidth="5.88rem"
                hasReplyHeight="0.75rem"
                frameDivGap7="0.25rem"
                divFontSize1="0.63rem"
                membersFontSize1="0.63rem"
                frameDivGap8="0.5rem"
                frameDivGap9="0.25rem"
                frameDivWidth2="0.5rem"
                frameDivHeight2="0.5rem"
                responseTimeFontSize="0.63rem"
                responseTimeWidth="5.88rem"
                responseTimeHeight="0.75rem"
                frameDivGap10="0.25rem"
                divFontSize2="0.63rem"
                h44mFontSize="0.63rem"
              />
            </div>
            <div className="activities">
              <Container
                frameImageName="/frame-313.svg"
                postTitleReplyCount="Post"
                percentageValue="38.4%"
                productIconImageUrl="/product-iconarrownarrowdown.svg"
              />
              <Container
                frameImageName="/frame-3131.svg"
                postTitleReplyCount="Replies"
                percentageValue="61.9%"
                productIconImageUrl="/product-iconarrownarrowup.svg"
                propBackgroundColor="#fafaff"
                propBackgroundColor1="#ecfdf3"
                propColor="#027a48"
              />
              <div className="reactions">
                <img className="reactions-child" alt="" src="/frame-3132.svg" />
                <div className="reactions1">Reactions</div>
                <div className="hrs-parent">
                  <div className="hrs">2 Hrs</div>
                  <div className="frame-parent3">
                    <div className="product-iconarrow-narrow-up-parent">
                      <img
                        className="product-iconarrow-narrow-up"
                        alt=""
                        src="/product-iconarrownarrowup1.svg"
                      />
                      <div className="hrs">8.5%</div>
                    </div>
                    <div className="vs-last-week">vs Last Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent4">
        <div className="button-wrapper">
          <StateDefaultSizeLgIconD
            chevronDown="/filter.svg"
            buttonText="Add Filter"
            chevronDown1="/social.svg"
            showLeftIcon
            showRightIcon={false}
            stateDefaultSizeLgIconDWidth="7.13rem"
            stateDefaultSizeLgIconDHeight="2.25rem"
            stateDefaultSizeLgIconDPadding="0.56rem 0.75rem"
            stateDefaultSizeLgIconDGap="0.5rem"
            stateDefaultSizeLgIconDBorder="1px solid #eaecf0"
            stateDefaultSizeLgIconDBoxShadow="unset"
            stateDefaultSizeLgIconDBackgroundColor="#fff"
            iconTextGap="0.5rem"
            iconTextFlex="1"
            chevronDownIconWidth="1.13rem"
            chevronDownIconHeight="1.13rem"
            buttonFontSize="0.88rem"
            buttonLineHeight="unset"
            buttonFontWeight="500"
            buttonColor="#344054"
            chevronDownIconWidth1="1.19rem"
            chevronDownIconHeight1="1.19rem"
          />
        </div>
        <div className="frame-parent5">
          <div className="frame-parent6">
            <div className="frame-parent7">
              <SearchFormContainer1
                iconName="/frame-632@2x.png"
                dropdownIconName="/social.svg"
                dropdownIconSize="/social.svg"
                iconName2="/faceneutral.svg"
                socialIconName="/social1.svg"
                iconNameText="/heart.svg"
                frameIconName="/messagecircle.svg"
              />
              <div className="frame-parent8">
                <img className="frame-child" alt="" src="/frame-6321@2x.png" />
                <div className="frame-parent9">
                  <div className="jimmy-fermin-parent">
                    <div className="hrs">Jimmy Fermin</div>
                    <div className="days-ago">4 days ago</div>
                  </div>
                  <div className="hello-everybody-i-container">
                    <p className="hello-everybody">Hello, everybody!</p>
                    <p className="hello-everybody">
                      I wanted to offer some great information about how the
                      EdTech sector is being transformed by data analytics...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <StateDefaultSizeLgIconD
                chevronDown="/messagecircle1.svg"
                buttonText="Reply"
                chevronDown1="/social.svg"
                showLeftIcon
                showRightIcon={false}
                stateDefaultSizeLgIconDWidth="unset"
                stateDefaultSizeLgIconDHeight="1.5rem"
                stateDefaultSizeLgIconDPadding="0.34rem 0.58rem"
                stateDefaultSizeLgIconDGap="0.29rem"
                stateDefaultSizeLgIconDBorder="0.8px solid #eaecf0"
                stateDefaultSizeLgIconDBoxShadow="unset"
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
          </div>
          <FormContainer1 />
          <SearchFormContainer1
            iconName="/frame-6324@2x.png"
            dropdownIconName="/social.svg"
            dropdownIconSize="/social.svg"
            iconName2="/faceneutral2.svg"
            socialIconName="/social3.svg"
            iconNameText="/heart2.svg"
            frameIconName="/messagecircle4.svg"
            propBorderRadius="12px"
            propBackgroundColor="#fff"
            propBorder="1px solid #eaecf0"
            propBoxSizing="border-box"
            propPadding="1rem"
          />
          <div className="frame-parent10">
            <div className="frame-parent11">
              <img className="frame-child" alt="" src="/frame-6325@2x.png" />
              <div className="frame-parent12">
                <div className="jimmy-fermin-parent">
                  <div className="hrs">Jessica Felicia</div>
                  <div className="days-ago">4 days ago</div>
                </div>
                <div className="hello-everybody-i-container1">
                  <p className="hello-everybody">Hello, everybody!</p>
                  <p className="hello-everybody">
                    I wanted to offer some great information about how the
                    EdTech sector is being transformed by data analytics. 📚💡
                  </p>
                </div>
                <div className="reaction-parent">
                  <TypeLike
                    heart="/heart3.svg"
                    reaction="452"
                    typeLikeBorder="1px solid #f2f4f7"
                    typeLikePadding="0.25rem 0.38rem"
                    typeLikeGap="0.25rem"
                    typeLikeBackgroundColor="#fcfcfd"
                    heartIconWidth="0.63rem"
                    heartIconHeight="0.63rem"
                    divFontSize="0.5rem"
                  />
                  <TypeLike
                    heart="/messagecircle5.svg"
                    reaction="233"
                    typeLikeBorder="1px solid #f2f4f7"
                    typeLikePadding="0.25rem 0.38rem"
                    typeLikeGap="0.25rem"
                    typeLikeBackgroundColor="#fcfcfd"
                    heartIconWidth="0.63rem"
                    heartIconHeight="0.63rem"
                    divFontSize="0.5rem"
                  />
                </div>
              </div>
            </div>
            <div className="button-parent">
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
                faceHappy="/facehappy.svg"
                sentimentHappyBorder="1px solid #f2f4f7"
                sentimentHappyWidth="1.5rem"
                sentimentHappyHeight="1.5rem"
                sentimentHappyPadding="0.25rem"
                faceHappyIconWidth="0.75rem"
                faceHappyIconHeight="0.75rem"
              />
              <SocialChannel
                social="/social4.svg"
                socialChannel="#general"
                socialChannelBorderRadius="6px"
                socialChannelPadding="0.25rem 0.38rem"
                socialChannelGap="0.25rem"
                socialChannelBackgroundColor="#fff"
                socialChannelHeight="1.5rem"
                socialChannelBorder="1.3px solid #f2f4f7"
                socialIconWidth="0.79rem"
                socialIconHeight="0.79rem"
                channelFontSize="0.5rem"
              />
            </div>
          </div>
        </div>
      </div>
      <AnalyticsContainer />
      <div className="filters">
        <TypeSearch
          search="Search..."
          searchSm="/searchsm.svg"
          vector6="/vector-6.svg"
          typeSearchBorderBottom="1px solid #f2f4f7"
          typeSearchHeight="2.75rem"
          typeSearchPadding="0.75rem 1rem"
          typeSearchBorderRadius="12px 12px 0px 0px"
          searchFontSize="0.88rem"
          searchLineHeight="1.13rem"
          searchColor="#98a2b3"
          searchSmIconWidth="1.13rem"
          searchSmIconHeight="1.13rem"
          vectorIconTop="0.88rem"
          vectorIconLeft="0.91rem"
          vectorIconWidth="0.06rem"
          vectorIconHeight="1rem"
        />
        <div className="filter-sections-parent">
          <TypeTitle
            member="Posted in"
            typeTitleWidth="14.19rem"
            typeTitlePadding="1rem"
            typeTitleZIndex="unset"
            memberFontSize="0.75rem"
            memberLineHeight="unset"
            memberFontWeight="600"
          />
          <SearchFormContainer />
        </div>
      </div>
      {/* {<IconOnlyFalseDefaultFalse
        logoIcon="/logo-icon.svg"
        alignLeft="/alignleft.svg"
        navIcon="/nav-icon.svg"
        navIcon1="/nav-icon1.svg"
        chevronUp="/chevronup.svg"
        navIcon2="/nav-icon2.svg"
        navIcon3="/nav-icon3.svg"
        navIcon4="/nav-icon4.svg"
        navIcon5="/nav-icon5.svg"
        avatar="/avatar@2x.png"
        logOut="/dotsvertical.svg"
        iconOnlyFalseDefaultFalseBorderRight="1px solid #f2f4f7"
        iconOnlyFalseDefaultFalseHeight="58.79rem"
        iconOnlyFalseDefaultFalsePadding="1rem"
        iconOnlyFalseDefaultFalsePosition="absolute"
        iconOnlyFalseDefaultFalseTop="0rem"
        iconOnlyFalseDefaultFalseLeft="0rem"
        containerHeight="42.42rem"
        logoActionsGap="1.5rem"
        logoWidth="16rem"
        logoPadding="0.75rem 0.5rem"
        logoGap="0.75rem"
        logoIconWidth="2.49rem"
        logoIconHeight="2.49rem"
        grovioFontSize="1.74rem"
        exportTop="1.25rem"
        exportLeft="14rem"
        exportPadding="0.38rem"
        alignLeftIconWidth="0.75rem"
        alignLeftIconHeight="0.75rem"
        actionsWidth="16rem"
        actionsGap="0.25rem"
        navItemWidth="16rem"
        navItemPadding="0.38rem 0.5rem"
        navItemGap="0.5rem"
        titleWidth="12.5rem"
        titleGap="0.88rem"
        navIconWidth="1.75rem"
        navIconHeight="1.75rem"
        notificationsFontSize="0.88rem"
        updateCountPadding="0.13rem 0.25rem"
        divFontSize="0.88rem"
        divLineHeight="1.13rem"
        blankWidth="1.5rem"
        blankHeight="1.5rem"
        navDropdownItemWidth="16rem"
        navDropdownItemGap="0.38rem"
        navItemPadding1="0.38rem 0.5rem"
        navItemGap1="0.5rem"
        titleWidth1="12.5rem"
        titleGap1="0.88rem"
        navIconWidth1="1.75rem"
        navIconHeight1="1.75rem"
        notificationsFontSize1="0.88rem"
        updateCountPadding1="0.13rem 0.25rem"
        divFontSize1="0.88rem"
        divLineHeight1="1.13rem"
        chevronUpIconWidth="1.5rem"
        chevronUpIconHeight="1.5rem"
        navItemNavDropdownItemPadding="0.5rem 5.75rem 0.5rem 4.06rem"
        navItemNavDropdownItemGap="0.44rem"
        frameDivWidth="1.25rem"
        frameDivHeight="1.25rem"
        frameDivWidth1="0.5rem"
        frameDivHeight1="0.5rem"
        membersFontSize="0.88rem"
        membersLineHeight="1.13rem"
        membersWidth="7.31rem"
        navItemNavDropdownItemPadding1="0.5rem 5.75rem 0.5rem 4.06rem"
        navItemNavDropdownItemGap1="0.44rem"
        frameDivWidth2="1.25rem"
        frameDivHeight2="1.25rem"
        frameDivWidth3="0.5rem"
        frameDivHeight3="0.5rem"
        membersFontSize1="0.88rem"
        membersLineHeight1="unset"
        membersWidth1="7.31rem"
        membersFontWeight="600"
        navItemNavDropdownItemPadding2="0.5rem 5.75rem 0.5rem 4.06rem"
        navItemNavDropdownItemGap2="0.44rem"
        frameDivWidth4="1.25rem"
        frameDivHeight4="1.25rem"
        frameDivWidth5="0.5rem"
        frameDivHeight5="0.5rem"
        membersFontSize2="0.88rem"
        membersLineHeight2="1.13rem"
        membersWidth2="7.31rem"
        navItemPadding2="0.38rem 0.5rem"
        navItemGap2="0.5rem"
        titleWidth2="12.5rem"
        titleGap2="0.88rem"
        navIconWidth2="1.75rem"
        navIconHeight2="1.75rem"
        notificationsFontSize2="0.88rem"
        updateCountPadding2="0.13rem 0.25rem"
        divFontSize2="0.88rem"
        divLineHeight2="1.13rem"
        blankWidth1="1.5rem"
        blankHeight1="1.5rem"
        navItemPadding3="0.38rem 0.5rem"
        navItemGap3="0.5rem"
        titleWidth3="12.5rem"
        titleGap3="0.88rem"
        navIconWidth3="1.75rem"
        navIconHeight3="1.75rem"
        notificationsFontSize3="0.88rem"
        updateCountPadding3="0.13rem 0.25rem"
        divFontSize3="0.88rem"
        divLineHeight3="1.13rem"
        blankWidth2="1.5rem"
        blankHeight2="1.5rem"
        navItemWidth1="16rem"
        navItemPadding4="0.38rem 0.5rem"
        navItemGap4="0.5rem"
        titleWidth4="12.5rem"
        titleGap4="0.88rem"
        navIconWidth4="1.75rem"
        navIconHeight4="1.75rem"
        notificationsFontSize4="0.88rem"
        updateCountPadding4="0.13rem 0.25rem"
        divFontSize4="0.88rem"
        divLineHeight4="1.13rem"
        blankWidth3="1.5rem"
        blankHeight3="1.5rem"
        navItemPadding5="0.38rem 0.5rem"
        navItemGap5="0.5rem"
        titleWidth5="12.5rem"
        titleGap5="0.88rem"
        navIconWidth5="1.75rem"
        navIconHeight5="1.75rem"
        notificationsFontSize5="0.88rem"
        updateCountPadding5="0.13rem 0.25rem"
        divFontSize5="0.88rem"
        divLineHeight5="1.13rem"
        blankWidth4="1.5rem"
        blankHeight4="1.5rem"
        profileWidth="16rem"
        profilePadding="1rem"
        profileGap="1.5rem"
        frameDivGap="0.5rem"
        avatarIconWidth="2.63rem"
        avatarIconHeight="2.63rem"
        nameEmailGap="0.25rem"
        nameFontSize="0.88rem"
        eMailFontSize="0.75rem"
        eMailLineHeight="1rem"
        logOutIconWidth="1.06rem"
        logOutIconHeight="1.06rem"
      />} */}
    </div>
  );
};

export default Messages;
