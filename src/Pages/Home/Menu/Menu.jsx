import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
    // const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <div>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
        </div>
    );
};

export default Menu;
