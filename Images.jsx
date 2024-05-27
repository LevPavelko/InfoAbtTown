class Images extends React.Component{
    render(){
        return (
            <div className="centerDiv">
               
               <h1 style={{fontSize: 40, margin: 10, padding: 10}}>Pictures of Vienna</h1>
                <img src={this.props.img1} className="imgOfSight" style={{margin: 15}}></img>
                <img src={this.props.img2} className="imgOfSight" style={{margin: 15}}></img>
                <img src={this.props.img3} className="imgOfSight" style={{margin: 15}}></img>
                <img src={this.props.img4} className="imgOfSight" style={{margin: 15}}></img>
                <img src={this.props.img5} className="imgOfSight" style={{margin: 15}}></img>
            </div>
        );
    }
    
}