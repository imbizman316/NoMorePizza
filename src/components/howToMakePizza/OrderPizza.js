import Data from "../../Menu";
import React from "react";
import Receipt from "../Receipt";
import Dough from "../Dough";
import Ingredients from "../Ingredients";
import Pizza from "../Pizza";
import IngredientData from "../../IngredientData";
import SideMenu from "../../SideMenu";
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
  const [ingredients, setIngredient] = React.useState([])

  const [type, setType] = React.useState("한판")
  const [size, setSize] = React.useState("R")
  const [menu1, setMenu1] = React.useState("치즈피자")
  const [menu2, setMenu2] = React.useState("치즈피자")
  const [side, setSide] = React.useState("----------")
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
      <h2>No More Pizza - Mokdong</h2>
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
          <select>
            <option>----------</option>
            <option>통치즈크러스트</option>            
          </select>
        </div>             
        <div>
          <select>
            <option>----------</option>
            <option>고구마엣지추가</option>
            <option>리치골드추가(고구마무스/체다치즈/스트링치즈)</option>
          </select>
        </div>             
        <h3>사이드</h3>
        <div>
          <select onChange={(e)=>setSide(e.target.value)}>
            <option>----------</option>
            <option>옥수수바질치즈크림뇨끼</option>
            <option>미트토마토파스타</option>
            <option>베이컨에멘탈크림파스타</option>
            <option>쉬림프로제파스타</option>
            <option>치즈오븐김치볶음밥</option>
            <option>마라로제파스타</option>
          </select>
        </div>             
        {/* <div>
          <input type="number" min="1" value={count} onChange={(e)=>{setCount(e.target.value.length > 0 && parseInt(e.target.value))}}></input>
        </div> */}
      </div>
      
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