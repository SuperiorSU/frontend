const CategoryItem = ({ name, bgColor, rounded }) => {
    return (
      <div className={`col-span-1 p-5 w-full ${bgColor} ${rounded || ""}`}>
        <p className="text-xl text-center font-primaryBold">{name}</p>
      </div>
    );
  };
  
export default CategoryItem;