import './App.css';
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Introduction from './components/Intro'
import ProjectHighlights from './components/ProjectHighlights'

function App() {
  return (
    <>
    <Nav/>
    <Carousel/>
    <Introduction/>
    <ProjectHighlights/>
    <div>body</div>
    <div>footer</div>
    </>
  );
}

export default App;
