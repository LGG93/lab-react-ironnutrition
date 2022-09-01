import './App.css';
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm.js'
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';

import {useState} from "react";




function App() {
  const [foodList, setFoodList] = useState(foods);
  return (
    <div className="App">
      <AddFoodForm foodList={foodList} setFoodList = {setFoodList}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map(food => <FoodBox  name={food.name} image={food.image} calories={food.calories} servings={food.servings}/>)}
      </Row>
    </div>
  );
}

export default App;