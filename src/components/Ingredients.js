export default function Ingredients({checkSteps, ingredients}) {

  const isSelectedList = []

  ingredients.forEach((each)=>{
    each.isSelected && isSelectedList.push(each.title)
  })  


  return (
    <div className="ingredients">
      <h3>재료테이블</h3>
      <div className="ingredients_boxes">
        <div className="box">
          <div            
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("파인애플") && "pink"}}
          >파인애플</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("고구마다이스") && "pink"}}
          >고구마다이스</div>
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("웻지감자") && "pink"}}
          >웻지감자</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("바베큐불고기") && "pink"}}
          >바베큐불고기</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("썬드라이치즈") && "pink"}}
          >썬드라이치즈</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("치즈") && "pink"}}
          >치즈</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("뇨끼") && "pink"}}
          >뇨끼</div>          
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("바질치즈") && "pink"}}
          >바질치즈</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("페퍼로니") && "pink"}}
          >페퍼로니</div>          
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("분쇄비프") && "pink"}}
          >분쇄비프</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("깐양파") && "pink"}}
          >깐양파</div>          
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("시즈닝새우") && "pink"}}
          >시즈닝새우</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("베이컨줄") && "pink"}}
          >베이컨줄</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("베이컨조각") && "pink"}}
          >베이컨조각</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("스위트콘") && "pink"}}
          >스위트콘</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("치즈") && "pink"}}
          >치즈</div>  
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("에멘탈치즈") && "pink"}}
          >에멘탈치즈</div>  
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("체다치즈") && "pink"}}
          >체다치즈</div>  
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("블랙올리브") && "pink"}}
          >블랙올리브</div>  
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("버섯4종") && "pink"}}
          >버섯4종</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("청/홍피망") && "pink"}}
          >청/홍피망</div>  
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("로제소스") && "pink"}}
          >로제소스</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("토마토소스") && "pink"}}
          >토마토소스</div>  
        </div>
      </div>
      <div className="ingredients_boxes">
        <div className="box">
            <div
                onClick={(e) => checkSteps(e.target.innerText)}
                style={{backgroundColor: isSelectedList.includes("고구마무스") && "pink"}}
              >고구마무스</div>  
          </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("연유") && "pink"}}
          >연유</div>
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("콘마요") && "pink"}}
          >콘마요</div>
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("마스카포네") && "pink"}}
          >마스카포네</div>
        </div>
        <div className="box">
          <div
              onClick={(e) => checkSteps(e.target.innerText)}
              style={{backgroundColor: isSelectedList.includes("통옥수수") && "pink"}}
            >통옥수수</div>  
        </div>        
      </div>
      <div className="edge_cheese"
        onClick={(e) => checkSteps(e.target.innerText)}
        style={{backgroundColor: isSelectedList.includes("엣지치즈") && "pink"}}
      >
        엣지치즈
      </div>
    </div>
  )
}
