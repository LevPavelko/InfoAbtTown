class Main extends React.Component{
    
    render(){
        return (
            <div className="centerDiv">
                <h1 style={{fontSize: 42, margin: 0, padding: 0}}>Vienna</h1>
                <h1 style={{fontSize: 30}}>{this.props.text}</h1>
                <img src={this.props.img} className="mainImg"></img>
               
            </div>
        );
    }
}
