class Machine extends React.Component {
    render() {
        let {s1, s2, s3} = this.props // destructuring props for easy reference
        let slotsMatch = s1 === s2 && s1 === s3
        return (
            <div>
                <h2>{this.props.s1} {this.props.s2} {this.props.s3}</h2>
                <h3>{ slotsMatch ? "You Win!" : "You Lose!" }</h3>
            </div>
        )
        
    }
}