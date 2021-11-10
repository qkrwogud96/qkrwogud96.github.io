//state의 장점  >> HTML 새로고침 없이도 랜더링이 가능함.

import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(['React수강 시작', 'React 마스터', '다음 할 일']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [모달, 모달변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값,입력값변경] = useState('');

  /*
  function 제목바꾸기(){
    //deep copy == 새로운 복사본 , 그냥 하면 참조형(값 공유)
    let newArray = [...글제목];
    newArray[0] = 'React입문';
    // newArray.sort();  오름차순 정렬
    글제목변경(newArray);
  }
*/
  function 따봉바꾸기(idx){
    let newArray = [...따봉];
    newArray[idx]++;
    따봉변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {       
      글제목.map((오브젝트,인덱스) =>{
        return (
          <div className="list" key={인덱스}>
          <h3 onClick = { () =>{ 누른제목변경(인덱스) } }> { 오브젝트 } <span onClick={ () =>{
            따봉바꾸기(인덱스) }}>👍</span> {따봉[인덱스]} </h3>
          <p>박재형</p>
          <hr />
        </div>
        )
      })
    }

     {/* { 입력값 }
    <input onChange={ (e) => { 입력값변경(e.target.value) } } /> } */}

    <div className ="publish">
    <input onChange = { (e) =>{ 입력값변경(e.target.value) } }/>
    <button onClick = { () =>{
        let Copy = [...글제목];
        Copy.unshift(입력값);
        글제목변경( Copy ); 
      } }>저장</button>
    
    </div>
    <button onClick = { () => {모달변경(!모달)} }>열고닫기</button>

      <Profile />

    {
      모달 === true ?
      <Modal 글제목={글제목} 누른제목={누른제목} />
      : null
    }
    </div>
  );
}
//Component
//주의점 1. 첫단어는 대문자 , 2. return()에는 태그 하나로 묶어야함

//props 부모 컴포넌트가 가진 state 사용 가능하게함
//주의점 1. 작명 = 전송할 state 를 기억해라.  , 2. 자식 컴포넌트에서 props 파라미터 입력
function Modal(props){
  return(
    <div className = 'modal'>
    <h2>제목 : { props.글제목[props.누른제목] } </h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

//예전 버젼의 react

class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim' , age : 30 }
  }

  changeName = () => {
    this.setState( {name : 'Park'} )
  }

  render(){
    return(
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name }입니다.</p>
        <button onClick = { this.changeName.bind(this)}>버튼</button>
      </div>
    )
  }
}


export default App;
