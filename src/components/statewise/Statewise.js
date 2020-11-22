import React from 'react'
import SideMenu from '../../constants/SideMenu'
import Map from '../chloropeth/Map'

class Statewise extends React.Component{
    render(){
        return(
            <>
                <SideMenu menuKey={'2'}/>
                <Map/>
            </>
        )
    }
}
export default Statewise;