import { useState } from 'React'


// Write your Color component here
const Color = ({color, setSelectedColor}) => {
  return (
  <div className={color}
  onClick={() => setSelectedColor(color)}></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
        <Color color="orange" setSelectedColor={setSelectedColor} />
        </div>
    </div>
  );
};

export default App;
