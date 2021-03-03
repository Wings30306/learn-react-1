class JSXDEMO extends React.Component {
    render(){
        return (
            <img src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" /> // MUST BE CLOSED!
        )
    }
}

ReactDOM.render(<JSXDEMO />, document.getElementById("root"))