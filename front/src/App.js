import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFoods from './components/TodaysFoods';
import axios from 'axios';

class App extends Component {
  state = {
    foods: foods.slice(0),
    filteredFoods: foods.slice(0)
  }

  async componentDidMount() {
    const foodList = await this.getFoods();
    console.log(foodList)
    // this.setState({
    //   foods: foodList,
    //   filteredFoods: foodList
    // })
  }

  getFoods = async () => {
    const response = axios.get('http://localhost:5000/api/foods');

    console.log(response)
    return response.data;
  }

  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy,
    })
  }

  searchFood = (search) => {
    let filteredFoods = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()) );
    
    this.setState({
      filteredFoods: filteredFoods
    })

  }

  render() {
    return (
      <div>
        <Form addFood={this.addFoodHandler}/>
        <Search handleSearchFood={(search) => this.searchFood(search)}/>

        {this.state.filteredFoods.map((e, idx) =>{ 
            let { name, calories, image, quantity} = e;
            return (
            <FoodBox name={name} calories={calories} image={image} quantity={quantity} key={idx}/>
            )
          }
        )}

        <TodaysFoods totalCalories="oi" />
    </div>
  )
}
}


export default App;
