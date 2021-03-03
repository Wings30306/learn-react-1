class JSXDEMO extends React.Component {
    render(){
        let username = "Jo"
        return (
            <div>
                <h1>My name is {username}</h1>
            </div>
        )
    }
}

ReactDOM.render(<JSXDEMO />, document.getElementById("root"))