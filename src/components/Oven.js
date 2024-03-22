export default function Oven({resetAll}) {
  return (
    <div className="stage">
      <h3>오븐에 비자를 놓아주시면 끝입니다.</h3>
      <h3>수고하셨습니다!</h3>
      <div className="button_container">
        <div></div>
        <button onClick={resetAll}>처음화면으로</button>
      </div>
    </div>
  )
}