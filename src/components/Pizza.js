export default function Pizza({isSauce, isSauce2, isLongCheese, isOil, isHole}) {

  return (
    <div className="pizza">
      <h3>피자</h3>
      {/* <div className="circle" style={{
        backgroundColor: isSauce && "	#FF6347",
        border: isLongCheese ? "solid 10px black" : " solid 1px black",        
        }}></div> */}
      <div className="half_half">
        <div className="circle3"
          style={{
            border: isLongCheese ? "10px solid black" : "1px solid black",            
            backgroundColor: isSauce && "#FF6347",
            borderColor: isOil ? "blue" : "black",
          }}
        ></div>
        <div className="circle2"
          style={{
            border: isLongCheese ? "10px solid black" : "1px solid black",
            backgroundColor: isSauce2 && "#FF6347",
            borderColor: isOil ? "blue" : "black",
          }}
        ></div>        
      </div>
      
    </div>
  )
}