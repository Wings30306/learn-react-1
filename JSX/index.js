function getMood(){
    const moods = ["Angry", "Hungry", "Silly", "Quiet", "Happy", "Sleepy"];
    return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDEMO extends React.Component {
    render(){
        let username = "Jo"
        return (
            <div>
                <h1>My name is {username}</h1>
                <h2>My current mood is {getMood()}</h2>
            </div>
        )
    }
}

ReactDOM.render(<JSXDEMO />, document.getElementById("root"))