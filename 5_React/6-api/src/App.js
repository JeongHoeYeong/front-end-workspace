import DaumPostCode from "./componets/DaumPostCode";
import KakaoMap from "./componets/KakaoMap";

const App = () => {
  return (
    <>
      <button onClick={DaumPostCode}>주소 검색</button>
      <KakaoMap />
    </>
  );
};

export default App;
