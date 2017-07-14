import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.css';


const url = 'https://api.blockai.com/v1/registrations/challenge?include=user&page=1&limit=20';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    renderPhotos() {
        return this.state.data.map((item, index) => {
            return <img alt={item.name} key={index} src={item.previewUrl} height="600" width="auto"/>
        });
    }

    componentWillMount() {
        axios.get(url)
            .then(response => {
                this.setState({
                    data: response.data.data
                });
                console.log(response.data.data);
            })
            .catch(err => {
                alert(err);
            });
    }

    render() {
        return (
            <Carousel axis="horizontal" showThumbs={false} showArrows={false} autoPlay={true} interval={4000} showIndicators={false} infiniteLoop={true}>
                {this.renderPhotos()}
            </Carousel>
        );
    }
}

export default App;