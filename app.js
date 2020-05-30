class Form extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: false,
    number: '2'
  }

  handeleCityChange = e => {
    this.setState({
      city: e.target.value,
    })
  }

  handleTextChange = e => {
    this.setState({
      text: e.target.value,
    })
  }

  handleIsLoveChange = e => {
    this.setState({
      isLoved: e.target.checked,
    })
  }

  handleVisitsNumberChange() {
    this.setState({
      number: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <label>
          Podaj Miasto:
          <input value={this.state.city} onChange={this.handeleCityChange} type="text" />
        </label>
        <br />
        <label>Napisz coś o tym mieście:
          <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
        <input type="checkbox" checked={this.state.isLoved} onChange={this.handleIsLoveChange} />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select value={this.state.number} onChange={this.handleVisitsNumberChange.bind(this)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
        </label>
      </div>
    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'))