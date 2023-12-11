import { FunctionComponent } from "react";

const Container1: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-base-white box-border h-[2.5rem] flex flex-row items-center justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] text-left text-[0.75rem] text-gray-600 font-inter-body-14-semibold border-b-[1px] border-solid border-colors-border-radius-primary-border-radius">
      <div className="relative rounded bg-base-white box-border w-[1rem] h-[1rem] overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-radius-primary-border-radius">
        <div className="absolute top-[0.25rem] left-[0.25rem] rounded-sm bg-color-primary-500 w-[0.5rem] h-[0.5rem] overflow-hidden" />
      </div>
      <div className="relative leading-[1rem]">Discord</div>
    </div>
  );
};

export default Container1;
