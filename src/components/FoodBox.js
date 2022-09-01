
function FoodBox({ name, image, calories, servings }){
    
    return (
        <div className='food-card'>
            <p>{name}</p>
            <img src={image} width="100px"  height="120px" alt="food_picture" />
            <p>{calories} calories</p>
            <p>Servings: {servings}</p>
        </div>
    )
}


  export default FoodBox;