const React = require('react');

const list = (pokemon) => {
    let result = [];
    for(let i = 0; i < pokemon.length; i++) {
        let href = `./pokemon/${i}`;
        let pokeName = pokemon[i].name.substring(0,1).toUpperCase() + pokemon[i].name.substring(1);
        result.push(<li key={i}><a href={href}> {pokeName} </a></li>)
    }
//Did two steps
    
    return result;
}


const style = {
    color: '#7a634c',
    backgroundColor: '#6688d1',
  };


class Index extends React.Component{
    render(){
        const pokemon = this.props.pokemon;
     
        return (
            <div>
                <h1 style = {style}> See All the Pokemon! </h1>             
                <ul> {list(pokemon)}</ul>
            </div>
        )
    }
}
module.exports = Index;