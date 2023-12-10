
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;