import React, { useState, Component } from 'react';
import './filter.css';



class Filter extends Component {
    state = {
        years: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        landingActive: "",
        launchActive: "",
        activeyear: ""
    }
    resetFilter = () => {
        this.setState({
            landingActive: "",
            launchActive: "",
            activeYear: ""
        }, () => {
            this.props.clearFilter();
        })

    }
    handleLandingInput = (e) => {
        this.setState({ landingActive: e.target.value }, () => {
            this.props.isSuccessfulLand(this.state.landingActive);
        });

    }
    handleLaunchInput = (e) => {
        this.setState({ launchActive: e.target.value }, () => {
            this.props.isSuccessfulLaunch(this.state.launchActive);
        });

    }
    handleYearInput = (e) => {
        this.setState({ activeYear: e.target.value }, () => {
            this.props.selectYear(this.state.activeYear);
        });
    }
    render() {
        const { years } = this.state;
        const yearsButtons = years.map(year => <div key={year} className="col-6"> <label className={(this.state.activeYear === year ? "Active" : "") + " btn years"}>
            <input type="radio" name="yearOption" id={year} value={year} onChange={this.handleYearInput} /> {year}
        </label></div>)
        return (
            <div>
                <div className="card filterContainer mb-3">
                    <div className="card-body">
                        <h5><b>Filters</b>
                            <i className="fa fa-refresh ml-2" style={{ cursor: "pointer" }} aria-hidden="true" onClick={this.resetFilter}></i>
                        </h5>

                        <div>
                            <div className="Header">Launch Year</div>
                            <div className="btn-group-toggle myBtnContainer row " data-toggle="buttons">
                                {yearsButtons}

                            </div>

                        </div>
                        <div className="mt-4">
                        <div className="Header">Successful Launch</div>

                            <div className="btn-group btn-group-toggle row" data-toggle="buttons">
                                <div className="col-6">
                                    <label className={(this.state.launchActive === "true" ? "Active" : "") + " btn years"}>
                                        <input type="radio" name="launchOption" id="option1" value="true" onChange={this.handleLaunchInput} /> True
                                    </label>
                                </div>
                                <div className="col-6">
                                    <label className={(this.state.launchActive === "false" ? "Active" : "") + " btn years"}>
                                        <input type="radio" name="launchOption" id="option2" value="false" onChange={this.handleLaunchInput} /> False
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className="mt-4">
                        <div className="Header">Successful Landing</div>

                            <div className="btn-group btn-group-toggle row" data-toggle="buttons">
                                <div className="col-6">
                                    <label className={(this.state.landingActive === "true" ? "Active" : "") + " btn years"}>
                                        <input type="radio" name="landingOption" id="option1" value="true" onChange={this.handleLandingInput} /> True
                                     </label>
                                </div>
                                <div className="col-6">
                                    <label className={(this.state.landingActive === "false" ? "Active" : "") + " btn years"}>
                                        <input type="radio" name="landingOption" id="option2" value="false" onChange={this.handleLandingInput} /> False
                                    </label>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>


        )
    }

}

export default Filter;
