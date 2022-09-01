import { useState } from "react";



function AddFoodForm({foodList, setFoodList}) {
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [calories, setCalories] = useState("0");
const [servings, setServings] = useState("");


const handleNameInput = (event) => setName(event.target.value);
const handleImageInput = (event) => setImage(event.target.value);
const handleCaloriesInput = (event) => setCalories(event.target.value);
const handleServingsInput = (event) => setServings(event.target.value);

const handleSubmit = (event) => {
    event.preventDefault();
    
    const newFood = { name, image, calories ,servings};
    const foodListCopy = [...foodList];
    foodListCopy.push(newFood);
    setFoodList(foodListCopy)
    

console.log(newFood)
}

    return(
        <div>
            <form onSubmit = {handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleNameInput}/>

            <label>Image:</label>
            <input type="text" name="image" value={image} onChange={handleImageInput} />

            <label>Calories:</label>
            <input type="text" name="calories" value={calories} onChange={handleCaloriesInput} />

            <label>Servings:</label>
            <input type="text" name="servings" value={servings} onChange={handleServingsInput} />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AddFoodForm;