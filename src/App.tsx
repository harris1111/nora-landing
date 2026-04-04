import { Toaster } from "react-hot-toast";
import { WifiPortal } from "./components/wifi-portal";

function App() {
  return (
    <>
      <WifiPortal />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
