import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Restaurant App || Our Menu</title>
                </Helmet>
                <Cover img={menuImage} title={"our menu"}></Cover>
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            </div>
        </HelmetProvider>
    );
};

export default Menu;
