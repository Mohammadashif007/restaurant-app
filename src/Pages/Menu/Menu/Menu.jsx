import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";


const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === "salad");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Restaurant App || Our Menu</title>
                </Helmet>

                {/* Main cover */}

                <Cover img={menuImage} title={'our menu'}></Cover>
                <SectionTitle heading={"today's offer"} subHeading={"Don't miss"}></SectionTitle>

                 {/* offered */}

                <MenuCategory items = {offered} menuImage={menuImage} ></MenuCategory>

                 {/* Dessert */}

                <MenuCategory items = {dessert} menuImage={dessertImage} title={"dessert"}></MenuCategory>

                 {/*Pizza*/}

                <MenuCategory items = {pizza} menuImage={pizzaImg} title={"pizza"}></MenuCategory>
                
                 {/* Salad */}

                <MenuCategory items = {salad} menuImage={saladImg} title={"Salad"}></MenuCategory>

                 {/* Soup */}

                <MenuCategory items = {soup} menuImage={soupImg} title={"soup"}></MenuCategory>
            </div>
        </HelmetProvider>
    );
};

export default Menu;
