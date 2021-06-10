/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import Textfit from "react-textfit";
import { render } from "react-dom";

function App() {
  return (
    <div
      css={{
        width: 1200,
        height: 630,
      //  backgroundImage: `linear-gradient(131deg, rgba(186, 186, 186, 0.01) 0%, rgba(186, 186, 186, 0.01) 16.667%,rgba(192, 192, 192, 0.01) 16.667%, rgba(192, 192, 192, 0.01) 33.334%,rgba(48, 48, 48, 0.01) 33.334%, rgba(48, 48, 48, 0.01) 50.001000000000005%,rgba(33, 33, 33, 0.01) 50.001%, rgba(33, 33, 33, 0.01) 66.668%,rgba(182, 182, 182, 0.01) 66.668%, rgba(182, 182, 182, 0.01) 83.33500000000001%,rgba(211, 211, 211, 0.01) 83.335%, rgba(211, 211, 211, 0.01) 100.002%),linear-gradient(148deg, rgba(48, 48, 48, 0.01) 0%, rgba(48, 48, 48, 0.01) 16.667%,rgba(178, 178, 178, 0.01) 16.667%, rgba(178, 178, 178, 0.01) 33.334%,rgba(192, 192, 192, 0.01) 33.334%, rgba(192, 192, 192, 0.01) 50.001000000000005%,rgba(237, 237, 237, 0.01) 50.001%, rgba(237, 237, 237, 0.01) 66.668%,rgba(194, 194, 194, 0.01) 66.668%, rgba(194, 194, 194, 0.01) 83.33500000000001%,rgba(227, 227, 227, 0.01) 83.335%, rgba(227, 227, 227, 0.01) 100.002%),linear-gradient(138deg, rgba(146, 146, 146, 0.03) 0%, rgba(146, 146, 146, 0.03) 25%,rgba(33, 33, 33, 0.03) 25%, rgba(33, 33, 33, 0.03) 50%,rgba(46, 46, 46, 0.03) 50%, rgba(46, 46, 46, 0.03) 75%,rgba(172, 172, 172, 0.03) 75%, rgba(172, 172, 172, 0.03) 100%),linear-gradient(38deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 16.667%,rgba(28, 28, 28, 0.03) 16.667%, rgba(28, 28, 28, 0.03) 33.334%,rgba(236, 236, 236, 0.03) 33.334%, rgba(236, 236, 236, 0.03) 50.001000000000005%,rgba(3, 3, 3, 0.03) 50.001%, rgba(3, 3, 3, 0.03) 66.668%,rgba(207, 207, 207, 0.03) 66.668%, rgba(207, 207, 207, 0.03) 83.33500000000001%,rgba(183, 183, 183, 0.03) 83.335%, rgba(183, 183, 183, 0.03) 100.002%),linear-gradient(145deg, rgba(20, 20, 20, 0.02) 0%, rgba(20, 20, 20, 0.02) 20%,rgba(4, 4, 4, 0.02) 20%, rgba(4, 4, 4, 0.02) 40%,rgba(194, 194, 194, 0.02) 40%, rgba(194, 194, 194, 0.02) 60%,rgba(34, 34, 34, 0.02) 60%, rgba(34, 34, 34, 0.02) 80%,rgba(71, 71, 71, 0.02) 80%, rgba(71, 71, 71, 0.02) 100%),linear-gradient(78deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 20%,rgba(95, 95, 95, 0.02) 20%, rgba(95, 95, 95, 0.02) 40%,rgba(71, 71, 71, 0.02) 40%, rgba(71, 71, 71, 0.02) 60%,rgba(7, 7, 7, 0.02) 60%, rgba(7, 7, 7, 0.02) 80%,rgba(130, 130, 130, 0.02) 80%, rgba(130, 130, 130, 0.02) 100%),linear-gradient(293deg, rgba(213, 213, 213, 0.03) 0%, rgba(213, 213, 213, 0.03) 20%,rgba(220, 220, 220, 0.03) 20%, rgba(220, 220, 220, 0.03) 40%,rgba(146, 146, 146, 0.03) 40%, rgba(146, 146, 146, 0.03) 60%,rgba(57, 57, 57, 0.03) 60%, rgba(57, 57, 57, 0.03) 80%,rgba(120, 120, 120, 0.03) 80%, rgba(120, 120, 120, 0.03) 100%),linear-gradient(90deg, rgb(225, 15, 180),rgb(78, 198, 243))`,
      backgroundImage:URL("data:image/jpeg;base64,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"), 
      position: "absolute",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "system-ui"
          }
        }}
      />
      <div
        css={{
        //  background: "#041016",
          margin: "40px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 15,
          padding: "8rem",
          boxShadow: `
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)`
        }}
      >
        <h1
          css={{
            color: "#E9F5FB",
            height: "100%",
            textAlign: "center"
          }}
        >
          <Textfit
            max={256}
            min={24}
            style={{
              minHeight: "80%",
              maxHeight: "80%",
              lineHeight: 1
            }}
          >
            {window.title}
          </Textfit>
        </h1>
        <div
          css={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 36,
            margin: "-5rem"
          }}
        >
          <ul
            css={{
              listStyleType: "none",
              display: "flex",
              "& li": {
                marginRight: ".5rem",
                "&:not(:last-child):after": {
                  content: "'•'",
                  marginLeft: ".5rem"
                }
              }
            }}
          >
            {window.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span>{window.author}</span>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("corgi"));
