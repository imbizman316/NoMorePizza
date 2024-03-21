export default function Ingredients({checkSteps, ingredients,checkIfReadyForOven, menu1, menu2, sidemenu, highlightIngredients,highlight, menu}) {

  const isSelectedList = []

  // console.log(isSelectedList.length)

  ingredients.forEach((each)=>{
    each.isSelected && isSelectedList.push(each.title)
  })  

  function findMenu(each) {
    return each.title === menu1
  }

  const targetMenu = menu.find(findMenu).ingredients

  console.log(targetMenu)

  return (
    <div className="ingredients">
      <div style={{display: 'flex'}}>
        <h3>"{menu1}"를 만들어주세요.</h3>
        <h3 
          style={{border: '1px solid black', width: '30px', height: '30px', textAlign: 'center', margin: '10px',
          backgroundColor: highlight && "pink"
        }}
          onClick={()=>highlightIngredients()}
        >?</h3>
      </div>
      <div className="ingredients_boxes">
        <div className="box">
          <div            
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{
              backgroundColor: isSelectedList.includes("파인애플") && "pink",
              border: targetMenu.includes("파인애플") && highlight && "3px solid red",
            }}
          >파인애플</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("고구마다이스") && "pink",
            border: targetMenu.includes("고구마다이스") && highlight && "3px solid red",
          }}
          >고구마다이스</div>
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("웻지감자") && "pink",
            border: targetMenu.includes("웻지감자") && highlight && "3px solid red",
          }}
          >웻지감자</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("바베큐불고기") && "pink",
            border: targetMenu.includes("바베큐불고기") && highlight && "3px solid red",
          }}
          >바베큐불고기</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("썬드라이치즈") && "pink",
            border: targetMenu.includes("썬드라이치즈") && highlight && "3px solid red",
          }}
          >썬드라이치즈</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("치즈") && "pink",
            border: targetMenu.includes("치즈") && highlight && "3px solid red",
          }}
          >치즈</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("뇨끼") && "pink",
            border: targetMenu.includes("뇨끼") && highlight && "3px solid red",
          }}
          >뇨끼</div>          
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("바질치즈") && "pink",
            border: targetMenu.includes("바질치즈") && highlight && "3px solid red",
          }}
          >바질치즈</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("페퍼로니") && "pink",
            border: targetMenu.includes("페퍼로니") && highlight && "3px solid red",
          }}
          >페퍼로니</div>          
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("분쇄비프") && "pink",
            border: targetMenu.includes("분쇄비프") && highlight && "3px solid red",
          }}
          >분쇄비프</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("깐양파") && "pink",
            border: targetMenu.includes("깐양파") && highlight && "3px solid red",
          }}
          >깐양파</div>          
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("시즈닝새우") && "pink",
            border: targetMenu.includes("시즈닝새우") && highlight && "3px solid red",
          }}
          >시즈닝새우</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("베이컨줄") && "pink",
            border: targetMenu.includes("베이컨줄") && highlight && "3px solid red",
          }}
          >베이컨줄</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("베이컨조각") && "pink",
            border: targetMenu.includes("베이컨조각") && highlight && "3px solid red",
          }}
          >베이컨조각</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("스위트콘") && "pink",
            border: targetMenu.includes("스위트콘") && highlight && "3px solid red",
          }}
          >스위트콘</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("치즈") && "pink",
            border: targetMenu.includes("치즈") && highlight && "3px solid red",
          }}
          >치즈</div>  
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("에멘탈슈레드") && "pink",
            border: targetMenu.includes("에멘탈슈레드") && highlight && "3px solid red",
          }}
          >에멘탈슈레드</div>  
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("체다치즈") && "pink",
            border: targetMenu.includes("체다치즈") && highlight && "3px solid red",
          }}
          >체다치즈</div>  
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("블랙올리브") && "pink",
            border: targetMenu.includes("블랙올리브") && highlight && "3px solid red",
          }}
          >블랙올리브</div>  
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("버섯4종") && "pink",
            border: targetMenu.includes("버섯4종") && highlight && "3px solid red",
          }}
          >버섯4종</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("청/홍피망") && "pink",
            border: targetMenu.includes("청/홍피망") && highlight && "3px solid red",
          }}
          >청/홍피망</div>  
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("로제소스") && "pink",
            border: targetMenu.includes("로제소스") && highlight && "3px solid red",}}
          >로제소스</div>
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("토마토소스") && "pink",
            border: targetMenu.includes("토마토소스") && highlight && "3px solid red",
          }}
          >토마토소스</div>  
        </div>
      </div>
      <div className="ingredients_boxes">
        <div className="box">
            <div
                onClick={(e) => checkSteps(e.target.innerText)}
                style={{backgroundColor: isSelectedList.includes("고구마무스") && "pink",
                border: targetMenu.includes("고구마무스") && highlight && "3px solid red",}}
              >고구마무스</div>  
          </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("연유") && "pink",
            border: targetMenu.includes("연유") && highlight && "3px solid red",}}
          >연유</div>
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("콘마요") && "pink",
            border: targetMenu.includes("콘마요") && highlight && "3px solid red",}}
          >콘마요</div>
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps(e.target.innerText)}
            style={{backgroundColor: isSelectedList.includes("마스카포네") && "pink",
            border: targetMenu.includes("마스카포네") && highlight && "3px solid red",}}
          >마스카포네</div>
        </div>
        <div className="box">
          <div
              onClick={(e) => checkSteps(e.target.innerText)}
              style={{backgroundColor: isSelectedList.includes("통옥수수") && "pink",
              border: targetMenu.includes("통옥수수") && highlight && "3px solid red",}}
            >통옥수수</div>  
        </div>        
      </div>
      <div className="edge_cheese"
        onClick={(e) => checkSteps(e.target.innerText)}
        style={{backgroundColor: isSelectedList.includes("엣지치즈") && "pink",
        border: targetMenu.includes("엣지치즈") && highlight && "3px solid red",}}
      >
        엣지치즈
      </div>
      <button onClick={()=>checkIfReadyForOven(isSelectedList)}>다음</button>
    </div>
  )
}
