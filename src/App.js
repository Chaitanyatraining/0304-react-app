import ClassComp from "./ClassComp"
import Counter from "./Components/Counter"
import Styling from "./Components/Styling/Styling"
import FuncComponent from "./FuncComponent"

const App = () => {
  const list = ['apple', 'mango', 'orange']
  return(
    <div className="App">
      {/* <h2>Welcome to React</h2>
      <FuncComponent title="Reactjs" fruitsList={list} />
      <ClassComp title="Reactjs" /> */}
      <Counter />
      <Styling />
    </div>
  )
}
export default App
