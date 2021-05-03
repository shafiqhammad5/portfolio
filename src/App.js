import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";
import ProfileCover from "./components/sections/ProfileCover/ProfileCover";
import Sidebar from "./components/sections/Sidebar/Sidebar";

function App() {
  return (
    <main className="min-h-screen relative bg-gray-50 pb-10">
      <ProfileCover />
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/4">
            <Sidebar />
          </div>
          <div className="w-full lg:w-3/4">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
