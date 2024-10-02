import { MapContainer } from "react-leaflet";
import Map from "./Map";
import MyMapContainer from "./MapContainer";

const App = () => {
  return (
    <div className=" flex flex-col bg-slate-800 gap-5 h-[100vh] text-white">
      <h1 className=" flex mx-auto text-3xl p-5">GIS Project</h1>
      <div className=" h-[50vh] w-[50vw] bg-white mx-auto">
        <Map />
      </div>
      <div className=" border h-[30vh] w-[50vw] mx-auto">
        <MyMapContainer />
      </div>
    </div>
  );
};

export default App;
