import { Helmet, HelmetProvider } from "react-helmet-async";

const Menu = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Restaurant App || Our Menu</title>
                </Helmet>
                <h2>Menu </h2>
            </div>
        </HelmetProvider>
    );
};

export default Menu;
