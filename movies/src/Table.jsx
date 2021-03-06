import React from "react";
class Table extends React.Component {
  state = {
    allMovies: [],
    currPage:1,
  };
  componentDidMount(){
    fetch("/movies").then(function(res){
    return res.json()
    }).then((json)=>{
      console.log(json);
      this.setState({allMovies : json})
    })

    
  }
  render() {
    let noOfPages = Math.ceil(this.state.allMovies.length / 5);
    let arr = [];
    for (let i = 1; i <= noOfPages; i++) {
      arr.push(i);
    }
    let starting = (this.state.currPage-1)*5;
    let ending = (this.state.currPage*5)-1;
    let moviesToDisplay = this.state.allMovies.slice(starting,Math.min(ending,this.state.allMovies.length-1)+1); //isse mai array pr slice krra hu movies ki,ki mere pass shuru m 5 movies aaye poori array se
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {moviesToDisplay.map((el) => {
              return (
                <tr key = {el._id}>
                  <td>{el.title}</td>
                  <td>{el.genre.name}</td>
                  <td>{el.numberInStock}</td>
                  <td>{el.dailyRentalRate}</td>
                  <td>{}Like</td>
                  <td>
                    {" "}
                    <button type="button" 
                    class="btn btn-danger" onClick ={()=>{
                      let allMovies = this.state.allMovies
                      allMovies = allMovies.filter((eli)=>{//isse ye pta chlra h ki mai ek allmovies pr filter maar rha hu eli(elementinside) as a elements deke fir agli line mein khra hu ki jo eli pr maine click kra h vo na ho el wali m jisse pta chlra h ki maine usse remove kr dia hai
                        return eli._id != el._id
                      });
                      this.setState({allMovies:allMovies})
                    }}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" onClick = {()=>{
              let currPage = this.state.currPage;
              currPage--;
              if(currPage < 1) currPage = 1
              this.setState({currPage: currPage})
            }}>
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {
              arr.map((el)=>{
                return(
                  <li class="page-item" onClick = {()=>{
                    this.setState({ currPage : el})
                  }}>
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>

                )
              })
            }
           
           
            <li class="page-item" onClick = {()=>{
              let currPage = this.state.currPage;
              currPage++;
              if(currPage > noOfPages) currPage = noOfPages
              this.setState({currPage: currPage})
            }}>
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Table;
