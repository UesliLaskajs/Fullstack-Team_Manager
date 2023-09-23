import { Link } from 'react-router-dom'



const SectionManage=()=>{
    

    return(
        <div className="unchanged_managelink_section">
            <div className="status_links">
            <Link to={'/players/list'}><span id='border_link'>Manage Players</span></Link>
            <Link to={'/status/game/1'}>Manage Player Status</Link>
            </div>
        </div>
    )
}

export default SectionManage;