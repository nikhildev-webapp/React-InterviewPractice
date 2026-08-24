import UserProfile from "./components/propsPractice/UserProfile/UserProfile"
import Goku from './assets/images/Goku.jpg'
import Howarts from './assets/images/hogwarts.jpg'
function App() {

  return (
    <>
      <UserProfile imgURL={Goku} name={'Goku'} age={40} profession={'Martial Artist'} about={"I'm The Legandary super sayian"}/>
      <UserProfile imgURL={Howarts} name={'Hogwarts'} age={'♾️'} profession={'Wizard'} about={"Learn Magic in Hogwarts"}/>
    </>
  )
}

export default App
