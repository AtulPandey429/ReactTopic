import { FunctionComponent, useCallback } from "react";
import SentimentBar from "../components/SentimentBar";
import Container1 from "../components/Container1";
import MainTopicsTrendCard from "../components/MainTopicsTrendCard";
import TopicFilterContainer from "../components/TopicFilterContainer";
import IconOnlyFalseDefaultFalse from "../components/IconOnlyFalseDefaultFalse";

const Topics: FunctionComponent = () => {
  const onTopicsContainerClick = useCallback(() => {
    // Please sync "Topics" to the project
  }, []);

  return (
    <div
      className="relative bg-color-gray-50 w-full h-[81.81rem] overflow-hidden cursor-pointer text-left text-[0.88rem] text-colors-text-title-primary-text font-inter-body-14-semibold"
      onClick={onTopicsContainerClick}
    >
      <div className="absolute top-[73.44rem] left-[-22.62rem] rounded-medium bg-color-gray-50 box-border w-[18.88rem] h-[5.19rem] overflow-hidden text-[1rem] border-[1px] border-solid border-gray-100">
        <div className="absolute top-[0.75rem] left-[0.69rem] flex flex-row items-center justify-start gap-[6.25rem]">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative font-medium">Community</div>
            <div className="rounded-medium bg-base-white flex flex-row items-center justify-start p-[0.38rem] gap-[0.25rem] text-[0.88rem] text-colors-text-body-primary-text border-[1px] border-solid border-colors-border-radius-primary-border-radius">
              <img
                className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                alt=""
                src="/social.svg"
              />
              <div className="relative leading-[1.13rem]">Community Name</div>
            </div>
          </div>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/social.svg"
          />
        </div>
      </div>
      <div className="absolute top-[-0.06rem] left-[18rem] w-[71.88rem] flex flex-row items-center justify-start py-[1rem] px-[1.5rem] box-border gap-[0.5rem] text-colors-text-body-primary-text">
        <div className="flex flex-row items-center justify-start gap-[0.63rem] opacity-[0.8]">
          <div className="flex flex-row items-center justify-start gap-[0.25rem]">
            <img
              className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0"
              alt=""
              src="/piechart.svg"
            />
            <div className="relative font-medium">Analytics</div>
          </div>
          <img
            className="relative w-[0.91rem] h-[0.91rem] overflow-hidden shrink-0"
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div className="relative font-medium">Topics</div>
      </div>
      <div className="absolute top-[33.13rem] left-[18.06rem] flex flex-col items-start justify-start pt-[0rem] px-[1.5rem] pb-[0.63rem] text-gray-600">
        <div
          className="rounded-2xl bg-base-white overflow-hidden flex flex-col items-start justify-start p-[1.38rem]"
          id="details"
        >
          <div className="flex flex-col items-start justify-start gap-[1rem]">
            <div className="flex flex-col items-start justify-start">
              <div
                className="flex flex-row items-center justify-start pt-[0rem] px-[0rem] pb-[1rem] gap-[50.19rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius"
                id="filter"
              >
                <div className="rounded-5xs bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                      alt=""
                      src="/filter.svg"
                    />
                    <div className="relative font-medium">Add Filter</div>
                  </div>
                  <img
                    className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/social.svg"
                  />
                </div>
                <div className="rounded-5xs bg-base-white box-border h-[2.38rem] flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] gap-[0.5rem] text-colors-text-title-secondary-text border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                      alt=""
                      src="/bookmarkadd.svg"
                    />
                    <div className="relative font-medium">Saved Filters</div>
                  </div>
                  <img
                    className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/social.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl bg-base-white box-border w-[66.06rem] h-[35.25rem] overflow-hidden shrink-0 text-[0.75rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
              <div className="absolute top-[0rem] left-[0rem] flex flex-row items-center justify-start">
                <div className="w-[9.56rem] flex flex-col items-start justify-center">
                  <div className="self-stretch bg-color-gray-25 flex flex-row items-center justify-start py-spacing-space-12 px-spacing-space-16 gap-[0.75rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_6.67px)] left-[calc(50%_-_6.67px)] rounded-[2.92px] bg-gray-100 box-border w-[0.83rem] h-[0.83rem] border-[1.3px] border-solid border-gray-300" />
                    </div>
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative font-medium">Topic</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-colors-text-body-primary-text">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Teachers</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_6px)] rounded-[2.63px] bg-gray-100 box-border w-[0.75rem] h-[0.75rem] border-[1.1px] border-solid border-gray-300" />
                      </div>
                      <div className="relative leading-[1rem]">Students</div>
                    </div>
                  </div>
                </div>
                <div className="w-[13.19rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative font-medium">Mention Count</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.63rem]">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[0.06rem]">
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-primary-400 box-border w-[1.92rem] h-[0.5rem] border-[1px] border-solid border-primary-400" />
                          <div className="flex-1 relative rounded-12xs-5 bg-teal-400 box-border h-[0.5rem] border-[1px] border-solid border-teal-400" />
                          <div className="relative rounded-tl-sm rounded-tr-12xs-5 rounded-br-12xs-5 rounded-bl-sm bg-ros-400 box-border w-[1.25rem] h-[0.5rem] [transform:_rotate(180deg)] [transform-origin:0_0] border-[1px] border-solid border-ros-400" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[7rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <SentimentBar
                          sentimentBarGap="0.06rem"
                          positiveWidth="1.92rem"
                          positiveHeight="0.5rem"
                          neutralHeight="0.5rem"
                          negativeWidth="1.25rem"
                          negativeHeight="0.5rem"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[8.25rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/percent.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative font-medium">Growth</div>
                        <img
                          className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/social.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-center text-success-700">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons1.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons1.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons1.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] text-color-error-700 border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-color-error-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons1.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="rounded bg-success-50 flex flex-row items-center justify-center py-[0.19rem] px-[0.25rem] gap-[0.13rem]">
                        <img
                          className="relative w-[0.75rem] h-[0.75rem]"
                          alt=""
                          src="/website-icons.svg"
                        />
                        <div className="relative font-semibold">2.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[8.56rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative font-medium">
                        Original Source
                      </div>
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/arrownarrowup.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                    <Container1 />
                  </div>
                </div>
                <div className="w-[8.75rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/facehappy.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative font-medium">Positive</div>
                        <img
                          className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                          alt=""
                          src="/arrownarrowup1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.63rem]">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">90</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">90</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-primary-400 box-border h-[0.5rem] border-[1px] border-solid border-primary-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[8.06rem] flex flex-col items-start justify-start gap-[0.06rem]">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/facefrown.svg"
                      />
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative font-medium">Negative</div>
                        <img
                          className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                          alt=""
                          src="/arrownarrowup2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[0.63rem]">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <div className="w-[1.75rem] flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative">30</div>
                        <div className="self-stretch relative rounded-sm bg-ros-400 box-border h-[0.5rem] border-[1px] border-solid border-ros-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[9.56rem] flex flex-col items-start justify-start">
                  <div className="self-stretch bg-color-gray-25 box-border h-[2.75rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="relative font-medium">Activity</div>
                      <img
                        className="relative w-[0.69rem] h-[0.69rem] overflow-hidden shrink-0"
                        alt=""
                        src="/arrownarrowup3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart1.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart2.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart3.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart1.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart2.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart2.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
                      <img
                        className="relative w-[7rem] h-[1.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/activity-chart.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[2.81rem] left-[66rem] bg-base-white shadow-[0px_1px_8px_rgba(71,_84,_103,_0.08),_0px_0px_0px_1px_#eaecf0] w-[35.88rem] h-[0.63rem] overflow-hidden [transform:_rotate(90deg)] [transform-origin:0_0]">
                <div className="absolute top-[0.13rem] left-[4.38rem] rounded-[100px] bg-gray-300 w-[23.06rem] h-[0.38rem]" />
              </div>
            </div>
            <div className="flex flex-col items-end justify-end text-colors-text-body-primary-text">
              <div className="w-[66rem] flex flex-row items-center justify-end py-[0rem] pr-[0rem] pl-[6.25rem] box-border gap-[0.63rem]">
                <div className="rounded-5xs bg-base-white box-border w-[8.06rem] h-[2.38rem] flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] gap-[0.5rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <img
                      className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/social.svg"
                    />
                    <div className="relative">
                      <b className="font-inter-body-14-semibold">25</b>
                      <span className="font-medium font-inter-body-14-semibold">{` `}</span>
                      <span className="leading-[1.29rem]">per page</span>
                    </div>
                  </div>
                  <img
                    className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
                <div className="w-[11.38rem] flex flex-row items-start justify-start">
                  <div className="rounded-tl-5xs rounded-tr-none rounded-br-none rounded-bl-5xs bg-base-white box-border h-[2.38rem] overflow-hidden flex flex-row items-center justify-center py-[0.63rem] px-[0.75rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="relative">
                      <b className="font-inter-body-14-semibold">1-25</b>
                      <span className="font-semibold font-inter-body-14-semibold">{` `}</span>
                      <span className="leading-[1.29rem]">of 4585</span>
                    </div>
                  </div>
                  <div className="rounded-tl-none rounded-tr-5xs rounded-br-5xs rounded-bl-none bg-base-white overflow-hidden flex flex-col items-start justify-start py-[0.56rem] px-[0.63rem] ml-[-0.06rem] border-[1px] border-solid border-colors-border-radius-primary-border-radius">
                    <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/chevronleft.svg"
                      />
                      <img
                        className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                        alt=""
                        src="/chevronright1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainTopicsTrendCard />
      <TopicFilterContainer />
      <IconOnlyFalseDefaultFalse
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
        membersLineHeight1="1.13rem"
        membersWidth1="7.31rem"
        navItemNavDropdownItemPadding2="0.5rem 5.75rem 0.5rem 4.06rem"
        navItemNavDropdownItemGap2="0.44rem"
        frameDivWidth4="1.25rem"
        frameDivHeight4="1.25rem"
        frameDivWidth5="0.5rem"
        frameDivHeight5="0.5rem"
        membersFontSize2="0.88rem"
        membersLineHeight2="unset"
        membersWidth2="7.31rem"
        membersFontWeight="600"
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
        updateCount={false}
        dropdown
      />
    </div>
  );
};

export default Topics;
