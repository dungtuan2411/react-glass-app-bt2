import React, { Component } from "react";
import GlassesComponent from "./GlassesComponent";
import ModelComponent from "./ModelComponent";

export default class Content extends Component {
    
    state = {
        glassImg: "./img/glassesImage/v2.png",
        price: "$50",
        name: "GUCCI G8759H",

        glasses: [
            {
                imgSrc: "./img/glassesImage/v1.png",
                codeName: "v1",
            },
            {
                imgSrc: "./img/glassesImage/v2.png",
                codeName: "v2",
            },
            {
                imgSrc: "./img/glassesImage/v3.png",
                codeName: "v3",
            },
            {
                imgSrc: "./img/glassesImage/v4.png",
                codeName: "v4",
            },
            {
                imgSrc: "./img/glassesImage/v5.png",
                codeName: "v5",
            },
            {
                imgSrc: "./img/glassesImage/v6.png",
                codeName: "v6",
            },
            {
                imgSrc: "./img/glassesImage/v7.png",
                codeName: "v7",
            },
            {
                imgSrc: "./img/glassesImage/v8.png",
                codeName: "v8",
            },
            {
                imgSrc: "./img/glassesImage/v9.png",
                codeName: "v9",
            },
        ],
    };
    
    renderGlasses = () => {
        return this.state.glasses.map((glass, index) => {
            return <GlassesComponent key={index} glass={glass} handleGlassesModel={this.handleGlassesModel}/>;
        });
    };
    
    handleGlassesModel = (codeName) => {
        switch (codeName) {
            case 'v1':
                this.setState({
                    glassImg: "./img/glassesImage/v1.png",
                    price: "$30",
                    name: "GUCCI G8850U",
                });
                break;
            case 'v2':
                this.setState({
                    glassImg: "./img/glassesImage/v2.png",
                    price: "$50",
                    name: "GUCCI G8759H",
                });
                break;
            case 'v3':
                this.setState({
                    glassImg: "./img/glassesImage/v3.png",
                    price: "$30",
                    name: "DIOR D6700HQ",
                });
                break;
            case 'v4':
                this.setState({
                    glassImg: "./img/glassesImage/v4.png",
                    price: "$30",
                    name: "DIOR D6005U",
                });
                break;
            case 'v5':
                this.setState({
                    glassImg: "./img/glassesImage/v5.png",
                    price: "$30",
                    name: "PRADA P8750",
                });
                break;
            case 'v6':
                this.setState({
                    glassImg: "./img/glassesImage/v6.png",
                    price: "$30",
                    name: "PRADA P9700",
                });
                break;
            case 'v7':
                this.setState({
                    glassImg: "./img/glassesImage/v7.png",
                    price: "$30",
                    name: "FENDI F8750",
                });
                break;
            case 'v8':
                this.setState({
                    glassImg: "./img/glassesImage/v8.png",
                    price: "$30",
                    name: "FENDI F8500",
                });
                break;
            default:
                this.setState({
                    glassImg: "./img/glassesImage/v9.png",
                    price: "$30",
                    name: "FENDI F4300",
                });
                break;
        }
    };
    
    render() {
        const {glassImg, price, name} = this.state;
        return (
            <section
                className="glasses-app bg-dark"
                style={{ height: "100vh" }}
            >
                <h2 className="text-center h2 text-white py-1">Glasses App</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="container row">
                        {/* Component model*/}
                        <section className="model d-flex justify-content-center col-5">                         
                            <ModelComponent glassImg={glassImg} price={price} name={name}/>
                        </section>
                        {/* Component glasses */}
                        <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                            {this.renderGlasses()}
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}
