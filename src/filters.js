import React from 'react';
import './filter.css';
const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];

const Filter = () =>{

const yearsButtons = years.map(year => <div key={year} className="col-6">
        <button className="years btn m-2">{year}</button>
    </div>)
     
return(
    <div>
        <div className="card filterContainer mb-3 mr-0 mr-sm-0 mr-md-3 mr-lg-3 mr-xl-3">
            <div className="card-body">
                <h5><b>Filters</b></h5>
                <div>
                    <p>Launch Year</p><hr></hr>
                    <div className="myBtnContainer row no-gutters">
                        { yearsButtons }            
                    </div>
                </div>
                <div className="mt-4">
                    <p>Successful Launch</p><hr></hr>
                    <div className="myBtnContainer row no-gutters">
                        <div className="col-6">
                            <button className="years btn m-2">True</button>
                        </div>
                        <div className="col-6">
                            <button className="years btn m-2">False</button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p>Successful Landing</p><hr></hr>
                    <div className="myBtnContainer row no-gutters">
                        <div className="col-6">
                            <button className="years btn m-2">True</button>
                        </div>
                        <div className="col-6">
                            <button className="years btn m-2">False</button>
                        </div>
                    </div>

                </div>

        </div>

        
    </div>

</div>

    
)
}
export default Filter;