import './App.css';
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Introduction from './components/Introduction'
import ProjectHighlights from './components/ProjectHighlights'
import Services from './components/Services'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Nav/>
    <Carousel/>
    <Introduction/>
    <ProjectHighlights/>
    <Services/>
    <Footer></Footer>
    </>
  );
}

export default App;
