const React = require('react');

class Show extends React.Component{
    render(){
        const pokemon = this.props.pokemon;
        const jpG = src => {
            if(!src.endsWith('.jpg'))
            {src = src + '.jpg'};
        return src;
        }
        
        return (
            <div>
                <h1> Gotta Catch 'Em All! </h1>             
                <h2>{pokemon.name(0,1).toUpperCase() + pokemon.name.substring(1)}</h2>
                <img src = {jpG(pokemon.img)}></img> <a href = "/pokemon">Back</a>
            </div>
        )
    }
}
module.exports = Show;