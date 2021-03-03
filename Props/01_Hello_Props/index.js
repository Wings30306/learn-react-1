class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
            to="Ringo" 
            from="Paul"
            bangs={4}
            img="https://media1.giphy.com/media/yrmb9TgQlb18k/giphy.gif?cid=ecf05e47acyauzv3frappyw2j5gzfkfummu6cxg6iod9nnd2&rid=giphy.gif"
            img_alt="The Beatles on stage"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))