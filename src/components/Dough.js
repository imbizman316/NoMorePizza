export default function Dough({isSauce, handleSauce, isSauce2, handleSauce2, isLongCheese, handleIsLongCheese}) {

  return (
    <div className="dough">
      <h3>도우 테이블</h3>
      <div className="dough_layout">        
        <div className="machine">
          <div className="role">납작기계</div>
          <div className="powder">가루</div>
        </div>
      <div className="right">
        <div className="tray">
          <div>L</div>
          <div>R</div>
          <div>P</div>
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