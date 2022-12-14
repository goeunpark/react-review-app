import './App.css';
import Header from './components/Header';

function App() {

  const linkData = [
    {
      name: "About",
      link: "about",
      description: "Learn more about me, Goeun!"}, 
    {
      name: "Portfolio",
      link: "portfolio",
      description: "Look at all the code I wrote! Hire me! c;"
    }
  ];
  const secretMessage = "I hate twizzlers!";

  return (
    <div className="App">
      <Header linkData={linkData} secret={secretMessage} />
      {/* // call a header component, and inside the header component, 
      // have two links based on data in linked data */}
    </div>
  );
}

export default App;
