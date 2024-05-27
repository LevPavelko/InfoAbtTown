class MainSight extends React.Component{
    render(){
        return (
            <div className="centerDiv">
                <h1 style={{fontSize: 40, margin: 10, padding: 10}}>{this.props.header}</h1>
               
                <img src={this.props.img} className="imgOfSight"></img>
                <p style={{fontSize: 28,padding: 10}}>{this.props.text}</p>
            </div>
        
    
        );
    }
    
}