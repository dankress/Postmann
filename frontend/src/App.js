import React from "react";
import { fetchAllPackagestations } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      packagestations: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllPackagestations. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchAllPackagestations();
    this.setState({ packagestations: data });
  }

  // this is displayed on the screen
  render() {
    return (
        <div>
          <div id="title">Welcome to Postmann! </div>
          <button id="fetcher" onClick={this.fetchDisplayData}>
            Check out our packagestations!
          </button>
          <div id="list">List of Packagestations: </div>
          <div className="data">
            {/* generates a div for every entry */}
            {this.state.packagestations.map((packagestation, key) => (
              <div key={key}>
                Number: {packagestation.number} <span class="separator">|</span> Street: {packagestation.street} <span class="separator">|</span> City: {packagestation.city} <span class="separator">|</span> Zip-Code: {packagestation.zip} <span class="separator">|</span> Country: {packagestation.country} <span class="separator">|</span> Status: {packagestation.status}
              </div>
            ))}
          </div>
        </div>
    );
  }
}

export default App;