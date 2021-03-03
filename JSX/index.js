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
                { 
                num === 7 
                ? <img src="https://media1.giphy.com/media/3HuKpHk6CW8A3ypdxv/giphy.gif?cid=ecf05e47fmvnjkdauiku3wzuctlyromj4v3f2x5hr3a61dx4&rid=giphy.gif"/> 
                : null
                }
                {
                    num === 3 && <img src="https://media1.giphy.com/media/3HuKpHk6CW8A3ypdxv/giphy.gif?cid=ecf05e47fmvnjkdauiku3wzuctlyromj4v3f2x5hr3a61dx4&rid=giphy.gif" />
                }
            </div>
        )
    }
}

ReactDOM.render(<JSXDEMO />, document.getElementById("root"))