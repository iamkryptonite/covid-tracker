import { scaleQuantize } from 'd3-scale';
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
}
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
])
export {geographyStyle,PROJECTION_CONFIG,DEFAULT_COLOR,colorScale};
