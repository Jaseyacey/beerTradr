import React from "react";

export default class FetchRandomBeer extends React.Component {
  state = {
    loading: true,
    beer: null
  };

  async componentDidMount() {
    const url = "GET https://jsonplaceholder.typicode.com";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beer: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {   
      return <div>looking for a beer</div>;
    }
    if (!this.state.beer) {
      return <div>didn't get a beer</div>;
      
    }

    return (
      <div>
        <div>{this.state.beer}</div>
      </div>
    );
  }
}