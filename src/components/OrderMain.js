export default function OrderMain({type, setType, typeData, setSize, size, sizeData, setMenu1, menuData, setMenu2, sidemenu, setSidemenu, sidemenuData, typeConfirmed, setTypeConfirmed, sizeConfirmed, setSizeConfirmed, menu1,menu1Confirmed,setMenu1Confirmed,menu2,menu2Confirmed,setMenu2Confirmed, toppingData,extraTopping,setExtraTopping,extraToppingConfirmed, setExtraToppingConfirmed,sideConfirmed, setSideConfirmed, logo}) {    

  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" className="logo"/>
        <h2 style={{textAlign:"center"}}>No More Pizza - Mokdong</h2>
      </div>      
      {
        !typeConfirmed &&
        <div className="stage">
          <h3>한판인지, 반반인지 선택해주세요.</h3>
            <div className="option_board">
            {
              typeData.map((each) => {
              return (
                <div 
                  key={each.id} 
                  value={each.type} 
                  className="option"
                  onClick={(e)=>setType(each.type)}                
                  style={{backgroundColor: type===each.type && "skyblue"}}
                >{each.type}</div>
                )
              })
            }
            </div>
            <div className="button_container">
              <div></div>
              <button onClick={()=>type !== null && setTypeConfirmed(true)}>다음</button>
            </div>
        </div>
      }
      {
        typeConfirmed && !sizeConfirmed &&
        <div className="stage">
        <h3>사이즈를 선택해주세요.</h3>
        <div className="option_board">
            {
              sizeData.map((each) => {
              return (
                <div 
                  key={each.id} 
                  value={each.size} 
                  className="option"
                  onClick={(e)=>setSize(each.size)}                
                  style={{backgroundColor: size===each.size && "skyblue"}}
                >{each.size}</div>
                )
              })
            }
        </div>
        <div className="button_container">
          <button onClick={()=>setTypeConfirmed(false)}>이전</button>
          <button onClick={()=>size !== null && setSizeConfirmed(true)}>다음</button>
        </div>
      </div> 
      }

      {sizeConfirmed && !menu1Confirmed && !menu2Confirmed && 
      <div className='menu_top'>
      <div className='menu_two'>
      <div className="stage_menu" style={{borderRight: "1px solid black"}}>
        <h3>피자1의 종류를 선택해주세요.</h3>

        <div className="option_board_menu">
            {
              menuData.map((each,index) => {
              return (
                <>
                <div 
                  key={index} 
                  value={each.title} 
                  className="option_menu"
                  onClick={(e)=>setMenu1(each.title)}                
                  style={{
                    filter: menu1===each.title && "brightness(40%)",                                        
                    // backgroundImage: `url(${image})`,
                    backgroundImage: `url(${each.image
                    })`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    color: 'darkgrey',
                    fontSize: '18px',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor:  menu1===each.title ? 'white' : 'black',
                    textAlign: 'center',
                  }}
                >{each.title}</div>
                
                </>
                )
              })
            }  
        </div>        
      </div>
      
      { type === "반반" ? <div className="stage_menu">
        <h3>피자2의 종류를 선택해주세요.</h3>

        <div className="option_board_menu">
            {
              menuData.map((each,index) => {
              return (
                <>
                <div 
                  key={index} 
                  value={each.title} 
                  className="option_menu"
                  onClick={(e)=>setMenu2(each.title)}                
                  style={{
                    filter: menu2===each.title && "brightness(40%)",                                        
                    backgroundImage: `url(${each.image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    color: 'darkgrey',
                    fontSize: '18px',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor:  menu2===each.title ? 'white' : 'black',
                    textAlign: 'center',
                  }}
                >{each.title}</div>
                
                </>
                )
              })
            }  
        </div>        
      </div>

      :

        <>
        </>
      
      }      
    </div> 
    <div className="button_container">
      <button onClick={()=>setSizeConfirmed(false)}>이전</button>
      <button onClick={()=>{
        if (menu1 !== null && menu2 !== null && type==="반반") {
          setMenu1Confirmed(true);
          setMenu2Confirmed(true);
        } else if (menu1 !== null && type==="한판"){
          setMenu1Confirmed(true);
          setMenu2Confirmed(true);
        }
        
        }}>다음</button>
    </div>
    </div>
  }
        
    {
      menu1Confirmed && menu2Confirmed && !extraToppingConfirmed &&
      <div className='stage'>
        <h3>토핑을 선택해주세요.</h3>
        <div className='option_board'>
        {
          toppingData.map((each) => {

            return (
              <div 
                key={each.id}
                className='option'
                onClick={()=>{setExtraTopping(each.title)}}
                style={{backgroundColor: extraTopping===each.title && "skyblue"}}
              >
                {each.title}
              </div>
            )
          })
        }        
        </div>
        <div className="button_container">
          <button onClick={()=>{         
            setMenu1Confirmed(false);
            setMenu2Confirmed(false);
          }}>이전</button>
          <button onClick={()=>extraTopping !== null && setExtraToppingConfirmed(true)}>다음</button>
        </div>
      </div>
    }

      {
        extraToppingConfirmed && !sideConfirmed &&
        <div className='stage'>

        <h3>사이드메뉴를 선택해주세요.</h3>
        <div className='option_board'>
        {
          sidemenuData.map((each) => {

            return (
              <div 
                key={each.id}
                className='option'
                onClick={()=>{setSidemenu(each.title)}}
                style={{backgroundColor: sidemenu === each.title && "skyblue"}}
              >
                {each.title}
              </div>
            )
          })
        }
        </div>                        
        <div className="button_container">
          <button onClick={()=> setExtraToppingConfirmed(false)}>이전</button>
          <button onClick={()=>sidemenu !== null && setSideConfirmed(true)}>다음</button>
        </div>
      </div>}
        {/* <div>
          <input type="number" min="1" value={count} onChange={(e)=>{setCount(e.target.value.length > 0 && parseInt(e.target.value))}}></input>
        </div> */}
    </div>
    
  )
} 