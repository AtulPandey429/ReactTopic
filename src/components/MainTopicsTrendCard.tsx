import { FunctionComponent } from "react";
import LabelRightFalseLabelLeft from "./LabelRightFalseLabelLeft";
import Data7Days from "./Data7Days";

const MainTopicsTrendCard: FunctionComponent = () => {
  return (
    <main
      className="absolute top-[9.19rem] left-[18rem] flex flex-row items-start justify-start pt-[0rem] px-[1.5rem] pb-[1rem] gap-[1rem] text-left text-[1.13rem] text-colors-text-title-secondary-text font-inter-body-14-semibold"
      id="main"
    >
      <div
        className="rounded-2xl bg-base-white box-border w-[40.19rem] flex flex-col items-start justify-start p-[1rem] relative gap-[2rem] border-[1px] border-solid border-gray-100"
        id="topic-trend"
      >
        <div className="self-stretch flex flex-row items-start justify-start z-[0]">
          <div className="flex flex-col items-start justify-start gap-[1.5rem]">
            <div className="flex flex-col items-start justify-start gap-[0.38rem]">
              <div className="relative font-semibold inline-block w-[21.78rem]">
                Topics Trend
              </div>
              <div className="relative text-[0.75rem] leading-[1rem] text-colors-text-body-primary-text">{`Here’s the top 5 topics trending in your community `}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.69rem] text-[0.75rem] text-gray-600">
              <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                <div className="relative rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                <div className="flex-1 relative leading-[1rem]">Topic One</div>
              </div>
              <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                <div className="relative rounded-sm bg-ros-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                <div className="flex-1 relative leading-[1rem]">Topic One</div>
              </div>
              <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                <div className="relative rounded-sm bg-teal-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                <div className="flex-1 relative leading-[1rem]">Topic One</div>
              </div>
              <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                <div className="relative rounded-sm bg-blue-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                <div className="flex-1 relative leading-[1rem]">Topic One</div>
              </div>
              <div className="rounded-md bg-color-gray-25 box-border w-[5.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                <div className="relative rounded-sm bg-fuchsia-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                <div className="flex-1 relative leading-[1rem]">Topic One</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[38.06rem] flex flex-col items-start justify-start relative gap-[0.63rem] z-[1]">
          <div className="w-[63.69rem] flex flex-col items-end justify-start z-[0]">
            <div className="w-[63.69rem] flex flex-col items-start justify-start">
              <div className="w-[38.06rem] flex flex-col items-start justify-center gap-[0.5rem]">
                <LabelRightFalseLabelLeft
                  labelRightFalseLabelLeftHeight="11.94rem"
                  labelRightFalseLabelLeftWidth="38.06rem"
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
                <Data7Days
                  data7DaysWidth="38.06rem"
                  data7DaysPadding="0rem 1.5rem"
                  monFontSize="0.63rem"
                  tueFontSize="0.63rem"
                  wedFontSize="0.63rem"
                  thuFontSize="0.63rem"
                  friFontSize="0.63rem"
                  satFontSize="0.63rem"
                  sunFontSize="0.63rem"
                />
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0rem] left-[2.13rem] w-[36.06rem] h-[11.56rem] overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/chart.svg"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[9.13rem] left-[20.63rem] rounded-5xs bg-base-white shadow-[0px_1px_8px_rgba(71,_84,_103,_0.08),_0px_0px_0px_1px_#eaecf0] overflow-hidden flex flex-col items-start justify-start p-[0.75rem] z-[2] text-[0.63rem] text-gray-600 border-[0.5px] border-solid border-gray-100">
          <div className="flex flex-col items-start justify-start gap-[0.88rem]">
            <div className="rounded flex flex-row items-start justify-start py-[0.25rem] px-[0.5rem] border-[1px] border-solid border-gray-100">
              <div className="relative">Friday, July 26, 2023</div>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[0.13rem] gap-[0.75rem] text-colors-text-body-primary-text">
              <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative rounded-sm bg-ros-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="relative inline-block w-[5.88rem] h-[0.75rem] shrink-0">
                    Topic One
                  </div>
                </div>
                <div className="relative font-medium text-colors-text-title-primary-text">
                  20%
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="relative inline-block w-[5.88rem] h-[0.75rem] shrink-0">
                    Topic Two
                  </div>
                </div>
                <div className="relative font-medium text-colors-text-title-primary-text">
                  10%
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative rounded-sm bg-teal-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="relative inline-block w-[5.88rem] h-[0.75rem] shrink-0">
                    Topic Three
                  </div>
                </div>
                <div className="relative font-medium text-colors-text-title-primary-text">
                  30%
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative rounded-sm bg-blue-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="relative inline-block w-[4.63rem] h-[0.75rem] shrink-0">
                    Topic Three
                  </div>
                </div>
                <div className="relative font-medium text-colors-text-title-primary-text">
                  15%
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                <div className="w-[5.38rem] flex flex-row items-center justify-start gap-[0.25rem]">
                  <div className="relative rounded-sm bg-fuchsia-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                  <div className="relative inline-block w-[5.31rem] h-[0.75rem] shrink-0">
                    Topic Three
                  </div>
                </div>
                <div className="relative font-medium text-colors-text-title-primary-text">
                  35%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-2xl bg-base-white box-border w-[27.81rem] h-[22.94rem] flex flex-col items-start justify-start p-[1rem] border-[1px] border-solid border-gray-100"
        id="Topic-sentiments"
      >
        <div className="flex flex-col items-end justify-center gap-[1rem]">
          <div className="flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.75rem] gap-[1.5rem] border-b-[1px] border-solid border-gray-100">
            <div className="w-[25.25rem] flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[0.38rem]">
                <div className="relative font-semibold inline-block w-[21.78rem]">
                  Topics Sentiments
                </div>
                <div className="relative text-[0.75rem] leading-[1rem] text-colors-text-body-primary-text">{`Here’s the top 5 topics trending in your community `}</div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[4.38rem] text-[0.75rem] text-gray-600">
              <img
                className="relative w-[10.31rem] h-[10.31rem]"
                alt=""
                src="/group-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[1rem]">
                <div className="rounded-5xs bg-base-white flex flex-col items-start justify-start py-[0.38rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-gray-100">
                  <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                    <div className="relative rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative font-medium">Positive</div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-colors-text-title-primary-text">
                    <div className="relative font-semibold">61.9%</div>
                    <div className="flex flex-row items-center justify-start gap-[0.25rem] text-center text-[0.5rem] text-success-700">
                      <div className="rounded-[3.14px] bg-success-50 flex flex-row items-center justify-center py-[0.15rem] px-[0.2rem] gap-[0.1rem]">
                        <img
                          className="relative w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/product-iconarrownarrowup.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                      <div className="relative text-[0.63rem] text-colors-text-body-primary-text text-left">
                        vs Last Week
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-5xs bg-base-white flex flex-col items-start justify-start py-[0.38rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-gray-100">
                  <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                    <div className="relative rounded-sm bg-teal-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative font-medium">Neutral</div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-colors-text-title-primary-text">
                    <div className="relative font-semibold">61.9%</div>
                    <div className="flex flex-row items-center justify-start gap-[0.25rem] text-center text-[0.5rem] text-success-700">
                      <div className="rounded-[3.14px] bg-success-50 flex flex-row items-center justify-center py-[0.15rem] px-[0.2rem] gap-[0.1rem]">
                        <img
                          className="relative w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/product-iconarrownarrowup.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                      <div className="relative text-[0.63rem] text-colors-text-body-primary-text text-left">
                        vs Last Week
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-5xs bg-base-white flex flex-col items-start justify-start py-[0.38rem] px-[0.5rem] gap-[0.5rem] border-[1px] border-solid border-gray-100">
                  <div className="flex flex-row items-center justify-start gap-[0.38rem]">
                    <div className="relative rounded-sm bg-ros-500 w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0" />
                    <div className="relative font-medium">Negative</div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-colors-text-title-primary-text">
                    <div className="relative font-semibold">61.9%</div>
                    <div className="flex flex-row items-center justify-start gap-[0.25rem] text-center text-[0.5rem] text-success-700">
                      <div className="rounded-[3.14px] bg-success-50 flex flex-row items-center justify-center py-[0.15rem] px-[0.2rem] gap-[0.1rem]">
                        <img
                          className="relative w-[0.5rem] h-[0.5rem] overflow-hidden shrink-0"
                          alt=""
                          src="/product-iconarrownarrowup.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                      <div className="relative text-[0.63rem] text-colors-text-body-primary-text text-left">
                        vs Last Week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-primary-50 flex flex-row items-center justify-start py-[0.38rem] px-[0.5rem] gap-[0.42rem] text-[0.75rem] text-gray-600">
            <img
              className="relative w-[0.94rem] h-[0.94rem] overflow-hidden shrink-0"
              alt=""
              src="/question.svg"
            />
            <div className="relative leading-[1rem]">
              What these stats mean?
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainTopicsTrendCard;
