import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Restaurant App || Home</title>
                </Helmet>
                <Banner></Banner>
                <FeaturedFood></FeaturedFood>
                <PopularMenu></PopularMenu>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
        </HelmetProvider>
    );
};

export default Home;
