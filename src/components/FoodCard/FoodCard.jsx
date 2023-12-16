const FoodCard = ({item}) => {
    const {name, price, image, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="food"
                />
            </figure>
            <p className="bg-gray-700 text-center text-white rounded-xl p-1 absolute right-5 top-3">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
