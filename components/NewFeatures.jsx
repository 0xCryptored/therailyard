
const NewFeatures = ({ title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[21px]">
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-white leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
