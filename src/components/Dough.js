import { isVisible } from "@testing-library/user-event/dist/utils";

export default function Dough({isSauce, handleSauce, isSauce2, isOil, setIsOil, isHole, setIsHole, handleSauce2, isLongCheese, handleIsLongCheese, handleIsSize, isSize,getPlate,setGetPlate,applyOil,setApplyOil,getDough,setGetDough,  powderDough,setPowderDough,kneadDough,setKneadDough,getDoughSize, setGetDoughSize,handleGetDough,sauceDone,setSauceDone, setDaughReady, actualDough, setActualDough, setSideConfirmed, kneadDone, setKneadDone, holeDone, setHoleDone, handleSetHoleDone}) {          

  function handleNext() {
    if (isSize !== null) {
      setGetPlate(true)
    }
    if (getPlate && isOil ) {
      setApplyOil(true)
    }
    if (applyOil && getDoughSize !== null) {
      setGetDough(true)
    }

    // getDough && !powderDough

    if (getDough && actualDough !== null) {
      setPowderDough(true)
    }

    if (powderDough) {
      setKneadDough(true)
    }

    if (kneadDough && kneadDone && holeDone) {
      setIsHole(true)
    }    

    if (isHole) {
      setSauceDone(true)
    }

    if (sauceDone) {
      setDaughReady(true)
    }
    
  }

  return (
    <div className="dough">
      {!getPlate && <h3>1.사이즈에 맞는 접시를 꺼내세요.</h3>}
      {getPlate && !applyOil && <h3>2.접시에 기름을 칠하세요.</h3>}
      {applyOil && !getDough && isOil && <h3>3.아래 서랍에서 사이즈에 맞게 도우를 꺼내세요.</h3>}
      {getDough && !kneadDough &&  <h3>4.도우의 앞뒤면을 가루판에 꾹꾹 눌러주세요.</h3>}
      {/* !powderDough&& */}
      {kneadDough && !kneadDone && <h3>5.납작기계에 두번 넣어주세요.</h3>}
      {kneadDough && !isHole && <h3>6. 구멍을 뚤어주세요.</h3>}
      {isHole && <h3>7. 소스를 발라주세요.</h3>}
        <div className="dough_layout">        
        <div className="machine">
          <div 
            className="role"
            style={{backgroundColor: kneadDone && "pink"}}
            onClick={()=>setKneadDone(!kneadDone)}
          >납작기계</div>
          <div 
            className="powder"
            onClick={()=>{setPowderDough(true)}}
            style={{backgroundColor: powderDough && "pink"}}
          >가루</div>
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
          <div
            onClick={
              ()=>setIsOil(!isOil)
            }
            style={{backgroundColor: isOil ? "pink" : "white"}}
          >
            기름칠</div>          
          <div
            style={{backgroundColor: holeDone ? "pink" : "white"}}
            onClick={
              ()=>handleSetHoleDone()
            }
          >구멍뚤기</div>        
          <div
            onClick={
            ()=>handleIsLongCheese()} 
            style={{ backgroundColor: isLongCheese ? "pink" : "white"}}
          >통치즈 크러스트
          </div>        
        </div>
        <div className="getDough">
          <div
            onClick={()=>handleGetDough("L")}
            style={{ backgroundColor: getDoughSize === "L" ? "pink" : "white"}}
          >L</div>
          <div
            onClick={()=>handleGetDough("R")}
            style={{ backgroundColor: getDoughSize === "R" ? "pink" : "white"}}
          >R</div>
          <div
            onClick={()=>handleGetDough("P")}
            style={{ backgroundColor: getDoughSize === "P" ? "pink" : "white"}}
          >P</div>
        </div>
      </div>       
      </div>
      <div className="button_container">      
        <button onClick={()=>setSideConfirmed(false)}>이전</button>
        <button onClick={handleNext}>다음</button>
      </div>
    </div>
  )
}