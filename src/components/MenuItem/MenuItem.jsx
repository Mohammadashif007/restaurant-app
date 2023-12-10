
const MenuItem = ({item}) => {
   const {name, price, image, recipe} = item;
    return (
        <div className="flex gap-4">
            <img className="w-[120px] h-[100px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div>
                <p className="text-[20px]">{name}--------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-[20px]">${price}</p>
        </div>
    );
};

export default MenuItem;