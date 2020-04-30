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

        fetch( 'https://api.untappd.com/V4/search/beer?client_secret=4AF6BD29B52702BE09AADAFCB24F059234992F7E&client_id=D63C2A2C528A0FEC8B83E4DC9AD6068647717775')
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
