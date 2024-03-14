import Data from "../../Menu";
import React from "react";
import Receipt from "../Receipt";
import Dough from "../Dough";
import Ingredients from "../Ingredients";
import '../../App.css'

export default function OrderPizza() {

  const typeData = [
    {id: 1, type:"한판"},
    {id: 2, type:"반반"},
  ]
  const sizeData = [
    {id: 1, type:"L(라지)"},
    {id: 2, type:"R(레귤러)"},
    {id: 3, type:"P(퍼스널)"},
  ]
  const [menuData, setMenuData] = React.useState([])

  const [type, setType] = React.useState("한판")
  const [size, setSize] = React.useState("R")
  const [menu1, setMenu1] = React.useState("치즈피자")
  const [menu2, setMenu2] = React.useState("치즈피자")
  const [count, setCount] = React.useState(1)

  React.useEffect(()=>{
    setMenuData(Data)
  },[])

  return (
    <div>
      
      <div>
        <select onChange={(e)=>setType(e.target.value)}>
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
        <select onChange={(e)=>setSize(e.target.value)}>
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

      <Dough />

      <Ingredients />
    </div>
  )
}