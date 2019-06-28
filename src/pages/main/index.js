import React, { Component } from 'react';
//import da api para requisição de produtos
import api from '../../services/api';
//import da propriedade do react-router
import {Link} from "react-router-dom";
//import do style para a pagina
import "./styles.css";

export default class Main extends Component {
    //propriedade state para armazenamento de dados
    state = {
        //array dos produtos
        products: [],
        //informações dos produtos (descrição e tals)
        productsInfo: {},
        page: 1
    }
    //propriedade do react
    componentDidMount() {
        this.loadProducts();
    };
    //Function async para fazer a requisição
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productsInfo} = response.data;

        this.setState({ products: docs, productsInfo, page })
    };
    //Function para voltar pagina
    prevPage = () => {
        const {page} = this.state;
        
        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }
    //Function para avançar pagina
    nextPage = () => {
        const {page, productsInfo} = this.state;
        
        if (page === productsInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }
    //render: propriedade do react para renderizar a pagina
    render() {
        const {page, productsInfo} = this.state;

        return (
            //className: utilizado no lugar de class
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