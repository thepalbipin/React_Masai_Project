<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Template</title>
    <link rel="stylesheet" href="./index.css"
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
  <script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    // Your  code will go here

    function ColorPicker(){
      const [color, setColor] = React.useState('#ffffff');

      function handleColorChange( e){
        setColor(e.target.value);
      }

      return(
        <div className="colorPickerContainer" style={{backgroundColor: color}}>
          <h1>Color Picker</h1>
          <div className="colorDisplay" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
          </div>
          <label>Select a color</label>
          <input type="color" value={color} onChange={handleColorChange} className="colorInput" />
        </div>
      );
    }

    function App(){
      return(
        <>
        <ColorPicker />
        </>
      )
    }

    let reactRoot = ReactDOM.createRoot(document.querySelector('#root'));
    reactRoot.render(<App />);

  </script>
</html>
