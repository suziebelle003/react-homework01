const UserCard = ({
  name,
  age,
  gender,
  onClickHandler,
}: {
  name: string;
  age: number;
  gender: string;
  onClickHandler : (name: string, age:number, gender:string)=>void;
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <button onClick={()=>onClickHandler(name,age,gender)}>출력</button>
    </div>
  );
};
export default UserCard;
