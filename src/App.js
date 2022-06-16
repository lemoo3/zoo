import './styles.css';
import AudioPlayer from './components/AudioPlayer';
import{ Header } from './components/Header';

import tracks from "./tracks";

function App() {
  var list = [];
  for(var i in tracks){
    // if(i == 0){
      list.push(<li key={i} className="list__item"><AudioPlayer track={tracks[i]} /></li>);
    // }
  }
  
  return (
    <>
    <Header />
    <ul className="list">
      {list}
    </ul>

    </>
  );
}

export default App;
