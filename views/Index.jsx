const React = require('react');
const DefaultLayout = require('./Default');
  


const style = {
    color: '#7a634c',
    backgroundColor: '#6688d1',
  };


class Index extends React.Component{
    render(){
        return (
            <DefaultLayout title={"Pokemon Index Page"}> 
                <h1 style={style}> See All The Pokemon! </h1>
                <ul>
                {this.props.pokemon.map((pokemon, i) => {
                    return (
                        <li><a href={`/pokemon/${pokemon.id}`}>{pokemon.name.substring(0,1).toUpperCase() + pokemon.name.substring(1)}</a>
                        <br />
                  <a href={`/pokemon/${pokemon._id}/edit`}>Mod</a>
                  <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                      <input type="submit" value="DELETE"/>
                  </form>
                        </li>
                    )
                })}    
                </ul>
                <nav>
                    <a href="/pokemon/new">Add a new pokemon</a>
                </nav>
            </DefaultLayout>    
             );
        }
}
module.exports = Index;