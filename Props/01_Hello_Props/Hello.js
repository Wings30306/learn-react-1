class Hello extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from}{"!".repeat(this.props.bangs)}</p>;
                <img src={this.props.img} alt={this.props.img_alt} />
            </div>
        )
    }
}