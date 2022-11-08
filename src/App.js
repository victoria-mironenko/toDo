import { Component } from "./core";

export class App extends Component {

  render() {
    return (
      `<h1>My app</h1>`
    )
  }
}

customElements.define("my-app", App);
