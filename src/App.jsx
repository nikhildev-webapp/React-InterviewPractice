import Propintro from "./components/propsPractice/Introduction/Propintro"
import Goku from '../src/assets/images/Goku.jpg'

function App() {
  const alertBox = () => {
    alert('You click the button')
   }
  return (
    <>
      <Propintro username={'Nikhil'} imgUrl={Goku} alertFunction={alertBox} />
    
    </>
  )
}

export default App
