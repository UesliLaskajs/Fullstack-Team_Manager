import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
const PlayerList = () => {
    const [player, setPlayer] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
            .then((res) => {
                console.log(res.data);
                setPlayer(res.data);
            })
            .catch((err) => {
                console.log("Error getting data", err);
            });
    }, []);

    const deleteButton = (itemId) => {
        // Find the player by ID
        const playerToDelete = player.find((item) => item._id === itemId);

        if (playerToDelete) {
            const confirmDelete = window.confirm(`Are you sure you want to delete ${playerToDelete.name}?`);
            if (confirmDelete) {
                axios.delete(`http://localhost:8000/players/delete/${itemId}`)
                    .then(() => {
                        setPlayer((prevPlayers) => prevPlayers.filter((item) => item._id !== itemId));
                    })
                    .catch((err) => {
                        console.log("Error deleting data", err);
                    });
            }
        }
    };

    return (
        <>
        <div className="links_container">
        <div className="link_targer">
                    <Link to='/players/list'><span id='link_kot'>List</span></Link>
                    <Link to='/players/addplayer'>Add a player</Link>
            </div>
        </div>
            <div className='list_player-container'>
            {player.map((item, index) => {
                return (
                    <div key={index} className='row_values'>
                        <div className='name_list'>{item.name}</div>
                        <div className='postition_list'>{item.position}</div>
                        <div className="button_list">
                            <button onClick={() => deleteButton(item._id)}>DELETE</button>
                        </div>
                    </div>
                    
                );
            })}
            </div>
            
        </>
    );
};

export default PlayerList;
