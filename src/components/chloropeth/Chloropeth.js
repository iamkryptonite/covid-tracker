import React from 'react'
import axios from 'axios'
import { scaleQuantize } from 'd3-scale';
import './Chloropeth.css'
import {ComposableMap, Geographies, Geography} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
const INDIA_TOPO_JSON = require('./india.topo.json');
const geographyStyle = {
default: {
    stroke: '#000',
    strokeWidth: '0.1px'
},
hover: {
    fill: '#000',
    transition: 'all 85ms',
    outline: 'none'
},
pressed: {
    outline: 'none'
}
};
const PROJECTION_CONFIG = {
    scale: 310,
    center: [78.9629, 22.5937]
  };
const DEFAULT_COLOR="#a3a3a3";
const colorScale = scaleQuantize()
    .domain([100, 90000])
    .range([
        "#ffedea",
        "#ffcec5",
        "#ffad9f",
        "#ff8a75",
        "#ff5533",
        "#e2492d",
        "#be3d26",
        "#9a311f",
        "#782618"
]);

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
        console.log(this.props);
    }
    render(){
        return(
            <>
                <ComposableMap
                    projectionConfig={PROJECTION_CONFIG}
                    projection="geoMercator"
                    width={350}
                    height={170}
                    data-tip=""
                    data-html={true}
                >
                    <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const current = this.state.data.find(s => s.id === geo.id);
                            return (
                                <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={colorScale(current ? current.value : "#EEE")}
                                style={geographyStyle}
                                onMouseEnter={() => {
                                    const { name } = geo.properties;
                                    const current = this.state.data.find(s => s.id === geo.id);
                                    this.props.setTooltipContent(name+"</br>"+"Active Cases : "+current.value+"</br>");
                                }}
                                onMouseLeave={() => {
                                    this.props.setTooltipContent("");
                                }}
                                />
                            );
                        })
                    }
                    </Geographies>
                </ComposableMap>
                <ReactTooltip html={true}/>
            </>
        )
    }
}
export default Chloropeth;