function getMood(){
    const moods = ["Angry", "Hungry", "Silly", "Quiet", "Happy", "Sleepy"];
    return moods[Math.floor(Math.random() * moods.length)]
}

function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class JSXDEMO extends React.Component {
    render(){
        let username = "Jo";
        let num = getNum();
        return (
            <div>
                <h1>Nice to meet you</h1>
                <ol>
                    <li>My name is {username}</li>
                    <li>My current mood is {getMood()}</li>
                    <li>My lucky number is {num}</li>
                </ol>
                <p>{num === 7 || num === 3 ? "Congrats!" : "Bad luck, try again!"}</p>
                
            </div>
        )
    }
}

ReactDOM.render(<JSXDEMO />, document.getElementById("root"))