/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
//import Textfit from "react-textfit";
import { render } from "react-dom";
//import logo from "./gmlogo.png"
//import css from './OgImageEditor.module.css'

function App() {
  return (
    <div css=
    {{
        width: 1200,
        height: 630,
        background:"#003540",
        position: relative,
        padding: "100px 115px 150px",
        display: flex,
        alignItems: center,
        color: white,
       
        boxSizing:border-box,
        fontFamily: 'Object Sans',  BlinkMacSystemFont,  Roboto, Oxygen, Ubuntu, Cantarell,  sansSerif,
    
    }}>
    <div>
        <h1 css={{
            position: relative,
            zIndex: 1,
            fontSize: "64px",
            maxWidth: "860px",
            margin: 0,
            fontWeight: 500,
            lineHeight: 1.05
        }}>
            {window.title || "title Missing"}
        </h1>
        
    </div>
   {/* <div className={css.logo}><img src={logo}></img></div>
    <div className={css.bg}>{bg}</div>*/}
       <img css={{position:absolute,
    left: 0,
    top:0,
    width: "100%",
    height: "100%",
    zIndex: 0}} src={bg||"https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"} ></img>
    </div>
  );
}

render(<App />, document.getElementById("corgi"));
