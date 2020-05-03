import React from 'react';

class FetchRandomBeer extends React.Component {
    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }
    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch( '')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;
        if (!isLoaded)
           return <div>Beer is cooling</div>;

        return (    
            <div className="beerapi">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Beer: {item.beer} | Brewery: {item.email} | Image: {item.image}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default FetchRandomBeer;
