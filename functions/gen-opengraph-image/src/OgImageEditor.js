/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
//import Textfit from "react-textfit";
import { render } from "react-dom";
//import logo from "./gmlogo.png"
import css from './OgImageEditor.module.css'
function App() {
  return (
    <div className={css.root}>
    <div>
        <h1>
            {window.title || "title Missing"}
        </h1>
        
    </div>
   {/* <div className={css.logo}><img src={logo}></img></div>
    <div className={css.bg}>{bg}</div>*/}
       <img src={bg||"https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"} className={css.bg}></img>
    </div>
  );
}

render(<App />, document.getElementById("corgi"));
