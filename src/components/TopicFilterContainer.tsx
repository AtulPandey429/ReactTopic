import { FunctionComponent } from "react";

const TopicFilterContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[2.94rem] left-[17.94rem] w-[72.06rem] flex flex-col items-start justify-start pt-[0rem] px-[1.5rem] pb-[1rem] box-border text-left text-[1.5rem] text-colors-text-title-secondary-text font-inter-body-14-semibold">
      <div className="self-stretch rounded-2xl bg-base-white flex flex-row items-center justify-start p-[1.5rem] gap-[11.19rem] border-[1px] border-solid border-gray-100">
        <div className="relative font-semibold inline-block w-[20.5rem] shrink-0">
          Topics
        </div>
        <div className="w-[27.63rem] flex flex-row items-center justify-start gap-[0.75rem] text-[0.75rem]">
          <div className="rounded-5xs box-border w-[19.31rem] flex flex-row items-center justify-between py-[0.38rem] px-[0.5rem] border-[1px] border-solid border-gray-100">
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-md bg-color-gray-50 box-border h-[1.5rem] flex flex-row items-center justify-start py-[0.25rem] px-[0.38rem] gap-[0.38rem] border-[1px] border-solid border-gray-100">
                <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                  <img
                    className="relative w-[0.88rem] h-[0.88rem] overflow-hidden shrink-0"
                    alt=""
                    src="/social1.svg"
                  />
                  <div className="relative font-medium">WhatsApp</div>
                </div>
                <img
                  className="relative w-[0.88rem] h-[0.88rem] overflow-hidden shrink-0"
                  alt=""
                  src="/product-iconclose.svg"
                />
              </div>
            </div>
            <img
              className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
              alt=""
              src="/chevronselectorvertical.svg"
            />
          </div>
          <div className="rounded-5xs bg-base-white box-border w-[11.69rem] h-[2.25rem] flex flex-row items-center justify-center py-[0.56rem] px-[0.75rem] gap-[5rem] border-[1px] border-solid border-gray-100">
            <div className="flex-1 flex flex-row items-center justify-center gap-[0.5rem]">
              <img
                className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0 hidden"
                alt=""
                src="/social.svg"
              />
              <div className="relative font-medium">Last week</div>
            </div>
            <img
              className="relative w-[1.19rem] h-[1.19rem] overflow-hidden shrink-0"
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
          <div className="rounded-5xs bg-base-white flex flex-row items-start justify-start p-[0.56rem] border-[1px] border-solid border-gray-100">
            <img
              className="relative w-[1.13rem] h-[1.13rem] overflow-hidden shrink-0"
              alt=""
              src="/download.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicFilterContainer;
