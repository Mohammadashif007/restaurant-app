import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, menuImage, title }) => {
    return (
        <div>
            {title && <Cover img={menuImage} title={title}></Cover>}
            <div className="grid md: grid-cols-2 gap-8 py-8">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;
