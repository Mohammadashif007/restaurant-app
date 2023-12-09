import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Menu from "../Menu/Menu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}></SectionTitle>
            <FeaturedFood></FeaturedFood>
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <Menu></Menu>
        </div>
    );
};

export default Home;