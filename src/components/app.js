import React, { Component } from 'react';

import Recipe from "./recipe";
import Navigation from "./navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Eclere',
          ingredients: [
            '-250ml apa',
            '-100g unt',
            '-1 lingurita zahar',
            '-125g faina',
            '-4 oua'
          ],
          steps: [
            'Apa + unt+ zahar = in vas la foc',
            'cind fierbe se ea de foc si se adauga faina',
            'se incorporeaza oule unul cite unul',
            'se coc in cuptorul preincalzit la 200 grade C',
            'Enjoy!'
          ],
          id: 'eclere'
        },
        {
          title: 'Sufleu',
          ingredients: [
            '-cartofi fierti taiati cuburi',
            '-cascaval ras',
            '-sunca'
          ],
          steps: [
            'Vasul se unge cu unt',
            'Se pun toate ingredientele straturi',
            'De asupra se toarna compozitia din 4 oua,2 linguri smantana si marar maruntit'
          ],
          id: 'sufleu'
        },
        {/*{
          title: 'Salata "Mimoza',
          ingredients: [
            '-150 gr cascaval',
            '-4 oua',
            '-1 borcan sardine',
            '-1 cartof mare',
            'maioneza'
          ],
          steps: [
            '1 strat albus+maioneza',
            '2 str. cartof+maioneza',
            '3 str. pestele+maioneza',
            '4 str. cascaval+maioneza',
            '5 str. galbenus '
          ],
          id: 'salata mimoza'
        }*/}

      ],
      selectedRecipe: null
    }
  }

  selectNewRecipe(recipeId) {
    if(recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      });
    }
  }
  
  render() {
    let recipeToSelect;
    if(this.state.selectedRecipe) { 
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      if(filteredRecipes.length > 0) { 
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (
      
      <div className="App">
        
        <aside className='sidebar'>
          
          <h1 className='sidebar__title'>Recipe Book</h1>
          <div className="logo">
            <img alt="my cookbook image logo " src="/assets/img-app.jpg" />
          </div>
          
          <Navigation 
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
    
      
        {
          recipeToSelect ? 
            <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            />
            :
          null
        }
      </div>
    
    );
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }
}


export default App;


