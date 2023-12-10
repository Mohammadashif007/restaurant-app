import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <section className="featuredItem bg-fixed pt-10">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className="flex gap-4 justify-center bg-slate-500 bg-opacity-60 items-center py-8 px-32">
                <img className="w-[400px] h-[250px] " src={featuredImg} alt="" />
                <div className=" text-[#fff]">
                    <p className="text-[18px]">March 20, 2023</p>
                    <p className="text-[20px] my-2">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-slate-900 my-2">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;