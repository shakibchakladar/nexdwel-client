const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="w-4/12 p-4 mx-auto my-5 text-center">
      <h2 className="text-4xl text-[#151515] border-y-4  p4 py-8 my-5">
        
        {heading}
      </h2>
      <p className="text-[#151515] text-[20px] p-4">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
