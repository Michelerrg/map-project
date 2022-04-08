import React from "react";
import Form from "./components/form/Form";
import BingMap from "./components/map/BingMap";


function App() {
  return (
        <div className="container">
           <div className="row">
              <h1>Mappa</h1>
             <div className="col-md-8"> 
               <BingMap />
              </div>
              <div className="col-md-4">
                  <Form />
              </div>
           </div>

        </div>

  )
}

export default App;
