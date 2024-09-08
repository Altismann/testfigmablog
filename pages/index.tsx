import type { NextPage } from "next";

const TeamRectangles: NextPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-start pt-16 px-0 pb-[138px] box-border leading-[normal] tracking-[normal] mq750:gap-4 mq1100:gap-8">
      <main className="w-[1099px] flex flex-col items-center justify-start pt-0 px-5 pb-[588px] box-border gap-16 max-w-full text-center text-[32px] text-black font-inter mq450:gap-4 mq750:gap-8 mq750:pb-[248px] mq750:box-border mq1025:pb-[382px] mq1025:box-border">
        <div className="w-[530px] flex flex-col items-center justify-start gap-4 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[23px] mq1025:text-[26px] mq1025:leading-[31px]">
            Team section
          </h1>
          <div className="self-stretch relative text-[18px] leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Quisque quis euismod lorem.
          </div>
        </div>
        <div className="w-[450px] flex flex-col items-start justify-start max-w-[450px] text-left text-[24px] text-white mq450:gap-6 mq450:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch h-[180px] flex flex-row items-center justify-start py-0 px-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-center justify-center py-[117px] px-0 box-border bg-[url('/image@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0">
                <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] inline-block min-w-[111px] mq450:text-lgi mq450:leading-[29px]">
                  Full name
                </h3>
                <div className="self-stretch relative text-[16px] leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamRectangles;
