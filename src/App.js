import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./component/Plan";
import { useState } from "react";
function App() {
  const [text, setText] = useState();
  const [list, setList] = useState(["sd"]);
  const handleClick = () => {
    
    setList(prev => [...prev, text]);
    setText("")
  };
  
  return (
    <div className="container-fluid my-5">
      <div className="row ">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3 rounded-3">
          <h2 className="text-center">Today's Plan</h2>
          <div className="row container-fluid">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Write your plans"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
            <div className="col-2">
              <button
                className="btn btn-warning px-5 fw-bold"
                onClick={handleClick}
              >
                Add
              </button>
            </div>
            <div className="container-fluid">
           
                <Plan list={list} setList={setList}/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
