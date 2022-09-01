
function FoodCard({ name, image }){
    return (
        <div className='food-card'>
            <h1>{name}</h1>
            <img src={image} alt="food_picture" width="100px"  height="120px" />
        </div>
    )
}

export default FoodCard;