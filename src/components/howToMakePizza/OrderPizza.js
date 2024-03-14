import Data from "../../Menu";
import React from "react";
import Receipt from "../Receipt";
import Dough from "../Dough";
import Ingredients from "../Ingredients";
import Pizza from "../Pizza";
import IngredientData from "../../IngredientData";
import '../../App.css'

export default function OrderPizza() {

  const typeData = [
    {id: 1, type:"한판"},
    {id: 2, type:"반반"},
  ]
  const sizeData = [
    {id: 1, type:"L"},
    {id: 2, type:"R"},
    {id: 3, type:"P"},
  ]
  const [menuData, setMenuData] = React.useState([])
  const [ingredients, setIngredient] = React.useState(IngredientData)

  const [type, setType] = React.useState("한판")
  const [size, setSize] = React.useState("R")
  const [menu1, setMenu1] = React.useState("치즈피자")
  const [menu2, setMenu2] = React.useState("치즈피자")
  const [count, setCount] = React.useState(1)  

  //-----------------------Assemble-----------------------
  const [isSauce, setIsSauce] = React.useState(false)
  const [isSauce2, setIsSauce2] = React.useState(false)
  const [isLongCheese, setIsLongCheese] = React.useState(false)
  const [isSize, setIsSize] = React.useState("")

  React.useEffect(()=>{
    setMenuData(Data)
  },[])

  function handleSauce() {
    setIsSauce(!isSauce)
  }

  function handleSauce2() {
    setIsSauce2(!isSauce2)
  }

  function handleLongCheese() {
    setIsLongCheese(!isLongCheese)
  }

  function handleIsSize(e) {
    setIsSize(e)
  }

  function checkSteps(e) {

    console.log(e)
    menuData.forEach((each) => {
      if (each.title === menu1) {
        each.ingredients.includes(e) ? console.log("found it") : console.log("not here")
      }
    })

    const temp = ingredients

    temp.map((ingredient) => {
      if (ingredient.title === e) {
        return (
          {...ingredient, isSelected: !ingredient.isSelected}
        )
      } else {
        return (
          {...ingredient}
        )
      }
    })

    setIngredient(temp)

    console.log(ingredients)
  }  

  return (
    <div>
      <div>
        <select onChange={(e)=>setType(e.target.value)} value={type}>
          {/* {menu[0]["type"][0]} */}
          {
            typeData.map((each) => {
            return (
              <option key={each.id} value={each.type}>{each.type}</option>
            )
          } )}
        </select>
      </div>
      <div>
        <select onChange={(e)=>setSize(e.target.value)} value={size}>
          {/* {menu[0]["type"][0]} */}
          {
            sizeData.map((each) => {
            return (
              <option key={each.id} value={each.type}>{each.type}</option>
            )
          } )}
        </select>
      </div>        
      <div>
        <select onChange={(e)=>setMenu1(e.target.value)}>
          {/* {menu[0]["type"][0]} */}
          {
            menuData.map((each) => {
            return (
              <option key={each.id} value={each.title}>{each.title}</option>
            )
          } )}
        </select>
        { type === "반반" ? 
          <select onChange={(e)=>setMenu2(e.target.value)}>
          {/* {menu[0]["type"][0]} */}
          {
            menuData.map((each) => {
            return (
              <option key={each.id} value={each.title}>{each.title}</option>
            )
          } )}
        </select>
        :
        ""
        }        
        <div>
          <input type="number" min="1" value={count} onChange={(e)=>{setCount(e.target.value.length > 0 && parseInt(e.target.value))}}></input>
        </div>
      </div>
      
      <Receipt         
        type={type}         
        size={size}
        menu1={menu1}
        menu2={menu2}
        count={count}
      />

      <Dough 
        isSauce={isSauce}
        isSauce2={isSauce2}
        handleSauce={handleSauce}
        handleSauce2={handleSauce2}
        isLongCheese={isLongCheese}
        handleIsLongCheese={handleLongCheese}
        handleIsSize={handleIsSize}
        isSize={isSize}
      />

      <Ingredients 
        checkSteps={checkSteps}
      />

      <Pizza 
        isSauce={isSauce}
        isSauce2={isSauce2}
        isLongCheese={isLongCheese}
        isSize={isSize}
      />
    </div>
  )
}