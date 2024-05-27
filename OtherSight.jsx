class OtherSight extends React.Component{
    render(){
        return (
            <div className="centerDiv">
                <h1 style={{fontSize: 40, margin: 10, padding: 10}}>{this.props.headerHofburg}</h1>
                <img src={this.props.imgOfHofburg} className="imgOfSight"></img>
                <p style={{fontSize: 28,padding: 10}}>{this.props.descriptionOfHofburg}</p>


                <h1 style={{fontSize: 40, margin: 10, padding: 10}}>{this.props.headerBelvedere}</h1>
               <img src={this.props.imgBelvedere} className="imgOfSight" style={{width: 730, height: 455}}></img>
               <p style={{fontSize: 28,padding: 10}}>{this.props.descriptionOfBelvedere}</p>

               <h1 style={{fontSize: 40, margin: 10, padding: 10}}>{this.props.headerSchönbrunn}</h1>
               <img src={this.props.imgOfSchönbrunn} className="imgOfSight" style={{width: 730, height: 455}}></img>
               <p style={{fontSize: 28,padding: 10}}>{this.props.descriptionOfSchönbrunn}</p>

            </div>
        
    
        );
    }
    
}