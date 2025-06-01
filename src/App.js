export default function Board() {
  return (
    <>
      <Row valueOne={1} valueTwo={2} valueThree={3}/>
      <Row valueOne={4} valueTwo={5} valueThree={6}/>
      <Row valueOne={7} valueTwo={8} valueThree={9}/>
    </>
  );
}

function Row({ valueOne, valueTwo, valueThree }) {
  return (
      <div className="board-row">
        <Square number={valueOne}/>
        <Square number={valueTwo}/>
        <Square number={valueThree}/>
      </div>
  );
}

function Square({ number }) {
  return ( <button className="square">{ number }</button> );
}