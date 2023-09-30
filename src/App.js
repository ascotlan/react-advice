import "./styles.css";

export default function App() {
  async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}
