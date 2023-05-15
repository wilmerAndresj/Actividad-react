
import './App.css';
import rey1 from './images/imagen1.png'
import rey2 from './images/imagen2.png'
import rey3 from './images/imagen3.png'
import './miCss.css';


function App() {
  let nombres=["Leonidas","Ragnar","Zeus"];
  return (
    <div className="contenedor">
      
      <div className="caja">
        <img src={rey1}/>
        <div className="nombre">{nombres[0]}</div>
      </div>

      <div className="caja">
        <img src={rey2}/>
        <div className="nombre">{nombres[1]}</div>
      </div>

      <div className="caja">
        <img src={rey3}/>
        <div className="nombre">{nombres[2]}</div>
      </div>
      
    </div>
  );
}

export default App;
