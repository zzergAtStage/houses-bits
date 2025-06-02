
import './App.css';
import Header from './components/Header';
import ApartmentList from './components/ApartmentList';
import ApartmentDetail from './components/ApartmentDetail';
// Import routing components
import { Routes, Route } from 'react-router-dom';

/**
 * App.js
 *
 * Defines application-level routes:
 * - "/"             renders ApartmentList
 * - "/apartments/:id" renders ApartmentDetail
 */
function App() {
  return (
    <div className="App">
      {/* Header appears on all pages */}
      <Header 
        title="Houses Bits" 
        subtitle="Your Apartment Renting Service" 
      />

      {/* Main content area */}
      <main className="main-content">
        <Routes>
          {/* Root path: show list of apartments */}
          <Route path="/" element={<ApartmentList />} />

          {/* Detail view: show a single apartment by id */}
          <Route 
            path="/apartments/:id" 
            element={<ApartmentDetail />} 
          />

          {/* Fallback route: if user enters unknown path, show list */}
          <Route path="*" element={<ApartmentList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
