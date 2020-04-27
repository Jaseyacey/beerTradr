import React from "react";

class FetchRandomBeer extends React.Component {
  state = {
    loading: false,
    beer: null
  };

  async componentDidMount() {
    const url = "";
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

export default FetchRandomBeer;