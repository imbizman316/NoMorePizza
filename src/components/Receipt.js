export default function Receipt({type,size,menu1,menu2,count,side, extraTopping}) {
  return (
    <div className="receipt">
      <h3>메뉴명</h3>
      <p>----------------------------------------------------</p>
      <h3>{type} 피자 {size} {count}</h3>      
      <h3> + {menu1}</h3>
      { type==="반반" ?
        <h3> + {menu2}</h3>
        :
        ""
      }
      <h3> + {extraTopping}</h3>      
      <h3>{side}</h3>
    </div>
  )
}