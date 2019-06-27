import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {}

    componentDidMount(){
        this.LoadProducts();
    };
    LoadProducts = async () => {
        const response = await api.get('/products');
        console.log(response.data.docs);
    };
    render() {
        return <h1>Salve</h1>;
    }
}