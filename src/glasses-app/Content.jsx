import React, { Component } from "react";
import GlassesComponent from "./GlassesComponent";
import ModelComponent from "./ModelComponent";

const glasses = [
    {
        glassImg: "./img/glassesImage/v1.png",
        price: "$30",
        name: "GUCCI G8850U",
    },
    {
        glassImg: "./img/glassesImage/v2.png",
        price: "$50",
        name: "GUCCI G8759H",
    },
    {
        glassImg: "./img/glassesImage/v3.png",
        price: "$30",
        name: "DIOR D6700HQ",
    },
    {
        glassImg: "./img/glassesImage/v4.png",
        price: "$30",
        name: "DIOR D6005U",
    },
    {
        glassImg: "./img/glassesImage/v5.png",
        price: "$30",
        name: "PRADA P8750",
    },
    {
        glassImg: "./img/glassesImage/v6.png",
        price: "$30",
        name: "PRADA P9700",
    },
    {
        glassImg: "./img/glassesImage/v7.png",
        price: "$30",
        name: "FENDI F8750",
    },
    {
        glassImg: "./img/glassesImage/v8.png",
        price: "$30",
        name: "FENDI F8500",
    },
    {
        glassImg: "./img/glassesImage/v9.png",
        price: "$30",
        name: "FENDI F4300",
    },
];

export default class Content extends Component {
    state = {
        sanPham: glasses[1],
    };

    renderGlasses = () => {
        return glasses.map((glass, index) => {
            return (
                <GlassesComponent
                    key={index}
                    glass={glass}
                    handleGlassesModel={this.handleGlassesModel}
                />
            );
        });
    };

    handleGlassesModel = (glass) => {
        this.setState({
            sanPham: glass,
        });
    };

    render() {
        const { glassImg, price, name } = this.state.sanPham;
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
                            <ModelComponent
                                glassImg={glassImg}
                                price={price}
                                name={name}
                            />
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
