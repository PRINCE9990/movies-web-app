import Navbar from "./Navbar";
import Category from "./Category";
import React from "react";
import Search from "./Search";
import Table from "./Table";

function App(props) {
  //ye props mai index m use krra hu(in line 6 in index.js) jo ki parent hai App.js to aise hum props ko pass krte hai parent to child.we pass in this line as App(props) jo ki hum use kr pa rhe hai in 6th line as props.logged
  return (
    //// agr hum 7 aur 8 line wale ko chlaye to chlega nhi kyoki return ek bar m ek hi ko return krega to islie reactFragment use kiya h
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className="col-2 p-4">
          <Category />
        </div>
        <div className="col-10 ">
          <div className="row">
            <div className="col-3 p-4"></div>
            <Search />
            <div className="row">
              <div className="col-8">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  

  );
}

export default App; //1. ye app naam ka component hum App.js se export kr rhe h aur index.js mein import kr rhe h
