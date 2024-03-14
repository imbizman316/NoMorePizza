export default function Ingredients({checkSteps}) {
  return (
    <div className="ingredients">
      <h3>재료테이블</h3>
      <div className="ingredients_boxes">
        <div className="box">
          <div
            onClick={(e) => checkSteps("파인애플")}
          >파인애플</div>
          <div>고구마다이스</div>
        </div>
        <div className="box">
          <div>포테이토</div>
          <div>불고기</div>
          <div>썬드라이치즈</div>          
        </div>
        <div className="box">
          <div
            onClick={(e) => checkSteps("치즈")}
          >치즈</div>          
        </div>
        <div className="box">
          <div>료끼</div>          
          <div>바질치즈</div>          
        </div>
        <div className="box">
          <div>파파로니</div>          
          <div>슈뤠디드미트</div>          
        </div>
        <div className="box">
          <div>깐양파</div>          
          <div>슈림프</div>          
        </div>
        <div className="box">
          <div>베이컨줄</div>
          <div>베이컨조각</div>
          <div>스위트콘</div>          
        </div>
        <div className="box">
          <div>치즈</div>  
        </div>
        <div className="box">
          <div>에멘탈치즈</div>  
          <div>체다치즈</div>  
        </div>
        <div className="box">
          <div>블랙올리브</div>  
          <div>3종버섯</div>
          <div>청/홍피망</div>  
        </div>
        <div className="box">
          <div>로제소스</div>
          <div>토마토소스</div>  
        </div>

      </div>
    </div>
  )
}
