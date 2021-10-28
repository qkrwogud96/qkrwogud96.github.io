import logo from './logo.svg';
import './App.css';


function App() {
  const name = 'park';
  let data = 'jaehyung'
  if( name !== 'park' ){
      data = "NULL";
  }
  const style = {
    backgroundColor : 'yellow',
    fontSzie : '40px'
  }
  return (
    <>
    {/* 주석을 입력합니다 */}
      <p style ={style}>{data} Hello React</p>
      <p className='App-link'> App link </p>
      <input/>
    </>
  );
}

export default App;
