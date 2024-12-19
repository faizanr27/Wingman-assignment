import Sidebar from './components/Sidebar';
import Header from './components/Header';
import InsightsChart from './components/InsightsChart';
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex mx-auto items-center justify-center">
      {/* <div className="w-16 sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
      </div> */}
      <InsightsChart/>
    </div>

  );
}

export default App;