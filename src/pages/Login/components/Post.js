import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        post: []
    }
async componentDidMount() {
    const res = await fetch('https://api-taller-mecanico.herokuapp.com/repuestos')
    const data = await res.json();
    this.setState({post:data})
}

    render() {
        return (
            <div>
             <h1>Listado de Repuestos</h1>
             {
                 this.state.post.map(post =>{
                     return <div key={post.id}>
                         <h3>{post.tipo}</h3>
                         <p>{post.marca}</p>
                         <p>{post.modelo}</p>
                         <p>{post.precio}</p>
                         <p>{post.stock}</p>
                           </div>
                 })
             }
            </div>
        )
    }
}

