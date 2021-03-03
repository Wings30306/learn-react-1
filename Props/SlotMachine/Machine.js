class Machine extends React.Component {
    render() {
        let slotsMatch = this.props.s1 === this.props.s2 && this.props.s1 === this.props.s3
        return (
            <div>
                <h2>{this.props.s1} {this.props.s2} {this.props.s3}</h2>
                <h3>{ slotsMatch ? "You Win!" : "You Lose!" }</h3>
            </div>
        )
        
    }
}