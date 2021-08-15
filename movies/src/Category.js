import React from "react";
class Category extends React.Component {
  state = {
    allGenre: ["Action", "Comedy", "Romance", "Thriller", "Horror"],
  };

  componentDidMount(){
      //api call(msg bhjna) get naam ka
        fetch("/genre").then(function(res){
            return res.json();   //jo server ne data bhja h vo json m convert kr de
        }).then((json)=>{
            console.log(json);
            this.setState({allGenre:json})

        })
  }
  render() {
    return (
      <ul class="list-group ">
        {this.state.allGenre.map((el) => {
          console.log(el)
          return (
            <li class="list-group-item" key={el._id}>
              {el?.name}
            </li> //A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used to React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists
          );

})}
      </ul>
    );
  }
}
export default Category;
