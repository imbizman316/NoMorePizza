import Data from "../../Menu";
import React from "react";
import Receipt from "../Receipt";
import Dough from "../Dough";
import Ingredients from "../Ingredients";
import Pizza from "../Pizza";
import IngredientData from "../../IngredientData";
import SideMenu from "../../SideMenu";
import OrderMain from "../OrderMain"
import '../../App.css'

export default function OrderPizza() {

  const typeData = [
    {id: 1, type:"한판"},
    {id: 2, type:"반반"},
  ]
  const sizeData = [
    {id: 1, size:"L"},
    {id: 2, size:"R"},
    {id: 3, size:"P"},
  ]
  const [menuData, setMenuData] = React.useState([])
  const [ingredients, setIngredient] = React.useState([])

  const [type, setType] = React.useState("")
  const [typeConfirmed, setTypeConfirmed] = React.useState(false)

  const [size, setSize] = React.useState("")
  const [sizeConfirmed, setSizeConfirmed] = React.useState(false)

  const [menu1, setMenu1] = React.useState("치즈피자")
  const [menu1Confirmed, setMenu1Confirmed] = React.useState(false)

  const [menu2, setMenu2] = React.useState("치즈피자")
  const [menu2Confirmed, setMenu2Confirmed] = React.useState(false)

  const [extraTopping, setExtraTopping] = React.useState("----------")
  const [extraToppingConfirmed, setExtraToppingConfirmed] = React.useState(false)

  const [side, setSide] = React.useState("----------")
  const [sideConfirmed, setSideConfirmed] = React.useState(false)

  const [count, setCount] = React.useState(1)  

  //-----------------------Assemble-----------------------
  const [isSauce, setIsSauce] = React.useState(false)
  const [isSauce2, setIsSauce2] = React.useState(false)
  const [isLongCheese, setIsLongCheese] = React.useState(false)
  const [isSize, setIsSize] = React.useState("")

  React.useEffect(()=>{
    setMenuData(Data)
    setIngredient(IngredientData)
  },[])

  React.useEffect(()=>{
    setIngredient(IngredientData)
    setIsSauce(false)    
  },[menu1])

  React.useEffect(()=>{
    setIngredient(IngredientData)
    setIsSauce2(false)    
  },[menu2])

  function handleSauce() {
    
    menuData.forEach((each)=> {
      if (each.title === menu1 && each.sauce) {
        setIsSauce(!isSauce)
      }
    })
  }

  function handleSauce2() {

    menuData.forEach((each)=> {
      if (each.title === menu2 && each.sauce) {
        setIsSauce2(!isSauce2)
      }
    })
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
        each.ingredients.includes(e) ? 
          turnOnIsSelected(e)
          
         : console.log("not here")
      }
    })
    

    
  }  

  function turnOnIsSelected(e) {

    let temp = ingredients

    // temp.map((ingredient) => {
    //   if (ingredient.title === e) {
    //     console.log(ingredient.title, e)
    //     console.log("It matches")
    //     return (
    //       {...ingredient, isSelected: true}
    //     )
    //   } else {
    //     return (
    //       {...ingredient}
    //     )
    //   }
    // })    

    setIngredient(
      temp.map((each) => {
        if (each.title === e) {
          return (
            {...each, isSelected: !each.isSelected}
          )
        } else {
          return (
            {...each}
          )
        }
      })
    )

  }

  console.log(ingredients)

  return (
    <div className="root">
      <OrderMain 
        type={type}
        setType={setType}
        typeConfirmed={typeConfirmed}
        setTypeConfirmed={setTypeConfirmed}
        typeData={typeData}
        setSize={setSize}
        size={size}
        sizeData={sizeData}
        sizeConfirmed={sizeConfirmed}
        setSizeConfirmed={setSizeConfirmed}
        setMenu1={setMenu1}
        menuData={menuData}
        setMenu2={setMenu2}
        setSide={setSide}
      />      
      
      <Receipt         
        type={type}         
        size={size}
        menu1={menu1}
        menu2={menu2}
        count={count}
        side={side}
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
        ingredients={ingredients}
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