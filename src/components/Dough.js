import { isVisible } from "@testing-library/user-event/dist/utils";

export default function Dough({isSauce, handleSauce, isSauce2, handleSauce2, isLongCheese, handleIsLongCheese, handleIsSize, isSize}) {

  return (
    <div className="dough">
      <h3>도우를 순서대로 준비하세요.</h3>
      <div className="dough_layout">        
        <div className="machine">
          <div className="role">납작기계</div>
          <div className="powder">가루</div>
        </div>
      <div className="right">
        <div className="tray">
          <div name="L" onClick={(e)=>handleIsSize("L")}
            style={{backgroundColor: isSize==="L" && "pink" }}
          >L</div>
          <div name="R" onClick={(e)=>handleIsSize("R")}
            style={{backgroundColor: isSize==="R" && "pink" }}
          >R</div>
          <div name="P" onClick={(e)=>handleIsSize("P")}
            style={{backgroundColor: isSize==="P" && "pink" }}
          >P</div>
        </div>
        <div className="doughTable">

          <div onClick={
            ()=>handleSauce()} 
            style={{ backgroundColor: isSauce ? "pink" : "white"}}>소스1
          </div>
          <div onClick={
            ()=>handleSauce2()} 
            style={{ backgroundColor: isSauce2 ? "pink" : "white"}}>소스2
          </div>
          <div>기름칠</div>          
          <div>구멍뚤기</div>        
          <div
            onClick={
            ()=>handleIsLongCheese()} 
            style={{ backgroundColor: isLongCheese ? "pink" : "white"}}
          >통치즈 크러스트
          </div>        
        </div>
        <div className="getDough">
          <div>L</div>
          <div>R</div>
          <div>P</div>
        </div>
      </div>       
      </div>
    </div>
  )
}