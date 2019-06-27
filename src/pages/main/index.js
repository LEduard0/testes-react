import React, {Component} from 'react';
import api from '../../services/api';
import "./styles.css";

export default class Main extends Component {
    state = {
        products: [],
    }
    componentDidMount(){
        this.LoadProducts();
    };
    LoadProducts = async () => {
        const response = await api.get('/products');
        this.setState({products: response.data.docs})
    };
    render() {
        return (
            <div className="products-list">
                {this.state.products.map(product => (
                    <article key={product._id}>
                        <b>{product.title}</b>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}