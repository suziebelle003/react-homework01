// const Greeting = (props: { name: string }) => {
//   return <h1>Hello, {props.name} </h1>;
// };
// export default Greeting;

// 구조 분해 할당 사용
// props로 받지 않고 name으로 받아서 태그 안에도 {name}으로 사용
const Greeting = ({ name }: { name: string }) => {
  return <h1>Hello, {name}</h1>;
};
export default Greeting;
