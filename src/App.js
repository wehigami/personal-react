import Nav from "./components/nav";
import Main from './pages/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App grid bg-zinc-900">
        <Nav />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
