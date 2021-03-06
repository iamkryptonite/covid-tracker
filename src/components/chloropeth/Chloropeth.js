import React from 'react'
import axios from 'axios'
import './Chloropeth.css'
import {ComposableMap, Geographies, Geography} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
const INDIA_TOPO_JSON = require('./india.topo.json');
const {geographyStyle,PROJECTION_CONFIG,colorScale} = require('./func');
class Chloropeth extends React.Component{
    state={data:[]};
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
                }
                this.setState({data:data});
            })
        })
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
                                    this.props.setTooltipContent(name+"</br>Active Cases : "+current.value+"</br>");
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