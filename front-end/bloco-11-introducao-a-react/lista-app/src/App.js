import './App.css';
const compromisso = ['estudar1', 'estudar2', 'estudar3', 'estudar4',]
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  return (
    <div className="App">
      {compromisso.map((compromisso) => Task(compromisso))}
    </div>
  );
}

export default App;
