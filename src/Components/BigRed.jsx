export default function bigRed(props) {
  return (
    <div>
      <h1>DO NOT TOUCH THIS BUTTON!</h1>
      <button className="BigRed" onClick={props.buttonClick}>
        <p>DONT EVEN THINK ABOUT IT!</p> <p>DONT EVEN LOOK AT IT!</p>
      </button>
    </div>
  );
}
