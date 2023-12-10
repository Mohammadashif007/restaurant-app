import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popularMenu = data.filter(
                    (menu) => menu.category === "popular"
                );
                setMenu(popularMenu);
            });
    }, []);
    return (
        <section>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="grid md: grid-cols-2 gap-8 py-8">{
                menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }</div>
        </section>
    );
};

export default PopularMenu;
