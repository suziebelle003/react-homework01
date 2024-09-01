import './App.css';
import UserCard from './components/UserCard';
// import Greeting from './components/Greeting';
// import UserCard from "./components/UserCard";

const App = () => {
  const onClickHandler = (name: string, age: number, gender: string) => {
    alert(
      `이름은 ${name}이고 나이는 ${age}살이다. 성별은 ${
        gender === 'male' ? '남자' : '여자'
      }이다.`
    );
  };
  return (
    <div>
      {/* <Greeting name="철수" />
      <Greeting name="영희" />
      <Greeting name="바둑이" /> */}

      {/* 두 표현식 모두 가능함 */}
      {/* <Greeting name={"철수"}/>
      <Greeting name={"영희"}/>
      <Greeting name={"바둑이"}> */}

      {/* 여러개의 props를 전달할때 사용함 */}
      {/* <UserCard name="철수" age={19} gender={"male"}/>
      <UserCard name="영희" age={19} 
      gender={"female"}/>
      <UserCard name="바둑이" age={10}
      gender={"male"}/> */}

      <UserCard
        name="철수"
        age={19}
        gender={'male'}
        onClickHandler={onClickHandler}
      />
      <UserCard
        name="영희"
        age={19}
        gender={'female'}
        onClickHandler={onClickHandler}
      />
      <UserCard
        name="바둑이"
        age={10}
        gender={'male'}
        onClickHandler={onClickHandler}
      />
    </div>
  );
};
export default App;
