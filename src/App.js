
import './App.css';
import Header from './components/Header';
import ApartmentList from './components/ApartmentList';

function App() {
  return (
    <div className="App">
       {/* Use Header component with props */}
      <Header 
        title="Houses Bits" 
        subtitle="Your Apartment Renting Service" 
      />
     <main className="main-content">
        {/* Render list of apartments */}
        <ApartmentList />
      </main>
    </div>
  );
}

export default App;
