import React, { Component } from 'react';
import api from '../../services/api';

import {Link} from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
    state = {
        products: [],
        productsInfo: {},
        page: 1
    }
    componentDidMount() {
        this.loadProducts();
    };
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productsInfo} = response.data;

        this.setState({ products: docs, productsInfo, page })
    };
    prevPage = () => {
        const {page} = this.state;
        
        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const {page, productsInfo} = this.state;
        
        if (page === productsInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }
    render() {
        const {page, productsInfo} = this.state;

        return (
            <div className="products-list">
                {this.state.products.map(product => (
                    <article key={product._id}>
                        <b>{product.title}</b>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productsInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        );
    }
}