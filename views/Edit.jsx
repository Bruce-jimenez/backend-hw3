const React = require('react');


// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
    <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>
          Img: <input type="text" name="img"  defaultValue={this.props.pokemon.img}/><br/>
          <br/>
          <input type="submit" value="Submit Changes"/>
    </form>
      </DefaultLayout>
    )
  }
}


module.exports= Edit;