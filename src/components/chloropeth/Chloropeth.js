import React from 'react'
import axios from 'axios'
import { scaleQuantile } from 'd3-scale';
import './Chloropeth.css'
import {ComposableMap, Geographies, Geography} from 'react-simple-maps';
const INDIA_TOPO_JSON = require('./india.topo.json');
const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
  ];
const geographyStyle = {
default: {
    outline: 'none'
},
hover: {
    fill: '#ccc',
    transition: 'all 850ms',
    outline: 'none'
},
pressed: {
    outline: 'none'
}
};
const PROJECTION_CONFIG = {
    scale: 400,
    center: [78.9629, 22.5937]
  };
const DEFAULT_COLOR="#a3a3a3";

class Chloropeth extends React.Component{
    state={
        data:[],
        min:-1,
        max:-1,
    };
    componentDidMount(){
        var data=[];
        axios.get('https://api.covid19india.org/data.json').then(res=>{
            res.data.statewise.forEach(el => {
                if(el.statecode!=='TT' && el.statecode!=='UN'){
                    data.push({
                    id:el.statecode,
                    state:el.state,
                    value:parseInt(el.active)
                    })
                    if(this.state.min===-1 || this.state.min>parseInt(el.active))
                    this.setState({min:parseInt(el.active)});
                    if(this.state.max===-1 || this.state.min<parseInt(el.active))
                    this.setState({max:parseInt(el.active)});
                }
                this.setState({data:data});
            })
        })
    }
    colorScale=(e)=>{
        console.log(e);
        // var offset=(this.state.min+this.state.max)/8;
        // var idx=(e-this.state.min)/offset;
        // return COLOR_RANGE[Math.round(idx-1)];
    }
    render(){
        return(
            <>
                <ComposableMap
                    projectionConfig={PROJECTION_CONFIG}
                    projection="geoMercator"
                    width={600}
                    height={220}
                    data-tip=""
                >
                    <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const current = this.state.data.find(s => s.id === geo.id);
                            return (
                                <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={this.colorScale(current)}
                                style={geographyStyle}
                                // onMouseEnter={onMouseEnter(geo, current)}
                                // onMouseLeave={onMouseLeave}
                                />
                            );
                        })
                    }
                    </Geographies>
                </ComposableMap>
            </>
        )
    }
}
export default Chloropeth;