import { Link } from "react-router-dom";
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
            {title && (
                <div className="text-center">
                    <Link to={`/order/${title}`}>
                        <button className="btn btn-outline border-0 border-b-4 border-slate-900 my-2">
                            ORDER YOUR FAVORITE FOOD
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MenuCategory;
