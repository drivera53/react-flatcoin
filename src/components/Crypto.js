import React, { Component } from 'react' 

export class Crypto extends React.Component {
    render() {
        const {name, image, id} = this.props.crypto
        return (
            <div id="crypto">
                <h3>{name}</h3>
                <img key={id} src={image} alt={name} />
            </div>
        ) 
    }
}

export default Crypto 