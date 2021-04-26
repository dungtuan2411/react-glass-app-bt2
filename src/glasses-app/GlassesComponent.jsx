import React, { Component } from "react";

export default class GlassesComponent extends Component {
    render() {
        const {glass, handleGlassesModel} = this.props;
        return (
            <div className="col-3">
                <button className="btn btn-outline-secondary" onClick={() => handleGlassesModel(glass)}>
                    <img
                        src={glass.glassImg}
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                    />
                </button>
            </div>
        );
    }
}
