import Data from "../../Menu";
import React from "react";
import Receipt from "../Receipt";
import Dough from "../Dough";
import Ingredients from "../Ingredients";
import Pizza from "../Pizza";
import IngredientData from "../../IngredientData";
import sidemenuData from "../../SideMenu";
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

  const toppingData = [
    {id: 1, title: '통치즈크러스트'},
    {id: 2, title: '고구마엣지'},    
    {id: 3, title: '리치골드'},
  ]

  const [menuData, setMenuData] = React.useState([])
  const [ingredients, setIngredient] = React.useState([])

  const [type, setType] = React.useState("")
  const [typeConfirmed, setTypeConfirmed] = React.useState(false)

  const [size, setSize] = React.useState("")
  const [sizeConfirmed, setSizeConfirmed] = React.useState(false)

  const [menu1, setMenu1] = React.useState(null)
  const [menu1Confirmed, setMenu1Confirmed] = React.useState(false)

  const [menu2, setMenu2] = React.useState(null)
  const [menu2Confirmed, setMenu2Confirmed] = React.useState(false)

  const [extraTopping, setExtraTopping] = React.useState(null)
  const [extraToppingConfirmed, setExtraToppingConfirmed] = React.useState(false)

  const [sidemenu, setSidemenu] = React.useState(null)
  const [sideConfirmed, setSideConfirmed] = React.useState(false)

  //---------------------DOUGH---------------------//
  const [getPlate, setGetPlate] = React.useState(false)
  const [applyOil, setApplyOil] = React.useState(false)
  const [getDough, setGetDough] = React.useState(false)
  const [powderDough, setPowderDough] = React.useState(false)
  const [kneadDough, setKneadDough] = React.useState(false)  

  const [count, setCount] = React.useState(1)  

  //-----------------------Assemble-----------------------
  const [isSauce, setIsSauce] = React.useState(false)
  const [isSauce2, setIsSauce2] = React.useState(false)
  const [isLongCheese, setIsLongCheese] = React.useState(false)
  const [isSize, setIsSize] = React.useState("")

  const [daughReady, setDaughReady] = React.useState(false)

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
        menu1={menu1}
        setMenu1={setMenu1}
        menuData={menuData}
        menu1Confirmed={menu1Confirmed}
        setMenu1Confirmed={setMenu1Confirmed}
        setMenu2={setMenu2}
        menu2={menu2}
        menu2Confirmed={menu2Confirmed}
        setMenu2Confirmed={setMenu2Confirmed}
        sidemenu={sidemenu}
        setSidemenu={setSidemenu}
        sidemenuData={sidemenuData}        
        toppingData={toppingData}
        extraTopping={extraTopping}
        setExtraTopping={setExtraTopping}
        extraToppingConfirmed={extraToppingConfirmed}
        setExtraToppingConfirmed={setExtraToppingConfirmed}
        sideConfirmed={sideConfirmed}
        setSideConfirmed={setSideConfirmed}
      />

      {
        sideConfirmed &&        
        <Dough 
        isSauce={isSauce}
        isSauce2={isSauce2}
        handleSauce={handleSauce}
        handleSauce2={handleSauce2}
        isLongCheese={isLongCheese}
        handleIsLongCheese={handleLongCheese}
        handleIsSize={handleIsSize}
        isSize={isSize}

        getPlate={getPlate}
        setGetPlate={setGetPlate}
        applyOil={applyOil}
        setApplyOil={setApplyOil}
        getDough={getDough}
        setGetDough={setGetDough}
        powderDough={powderDough}
        setPowderDough={setPowderDough}
        kneadDough={kneadDough}
        setKneadDough={setKneadDough}
        />
      }        

      {
        daughReady && 
        <Ingredients 
        checkSteps={checkSteps}
        ingredients={ingredients}
        />
      }
      
      <div className="bottom_summary">
        <Receipt         
          type={type}         
          size={size}
          menu1={menu1}
          menu2={menu2}
          count={count}
          extraTopping={extraTopping}
          side={sidemenu}
        />      

        

        <Pizza 
          isSauce={isSauce}
          isSauce2={isSauce2}
          isLongCheese={isLongCheese}
          isSize={isSize}
        />

    </div>
    </div>
  )
}
