import React, { Component } from "react";

export default class GlassesComponent extends Component {
    render() {
        const {imgSrc, codeName} = this.props.glass;
        return (
            <div className="col-3">
                <button className="btn btn-outline-secondary" onClick={() => this.props.handleGlassesModel(codeName)}>
                    <img
                        src={imgSrc}
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                    />
                </button>
            </div>
        );
    }
}
