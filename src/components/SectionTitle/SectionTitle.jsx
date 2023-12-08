
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="border-y-4 border-slate-500 my-10 py-6 text-center w-4/12 mx-auto">
            <h3 className="text-20px text-[#D99904]">----{subHeading}----</h3>
            <h2 className="text-[40px]">{heading}</h2>
        </div>
    );
};



export default SectionTitle;