import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Gamestatus2 = () => {
    const [players, setPlayers] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
            .then((res) => {
                console.log(res.data);
                setPlayers(res.data);
            })
            .catch((err) => {
                console.log("Error getting data", err);
            });
    }, []);

    const updatePlayer = (idUpdate, newStatus) => {
        axios.patch(`http://localhost:8000/status/game/${idUpdate}`, {
            game2_status: newStatus
        })
            .then(() => {
                // Handle success if needed
            })
            .catch((err) => {
                console.log("Error Updating Data", err);
            });
    };

    return (
        <>
            <div className="links_container">
                <div className="link_targer">
                    <Link to='/status/game/1'><span id='link_kot'>Game1</span></Link>
                    <Link to='/status/game/2'><span id='game2'>Game2</span></Link>
                    <Link to='/status/game/3'>Game3</Link>
                </div>
            </div>
            <div className='list_player-container'>
            <h1>Player Status Game 2</h1>
                {players.map((item, index) => (
                    
                    <div key={index} className='row_values'>
                        <div className='name_list'>{item.name}</div>
                        <button
                            className={` ${item.game2_status === 'Playing' ? 'greenButton' : null}`}
                            onClick={() => { updatePlayer(item._id, 'Playing'); setStatus('Playing'); }}
                        >
                            Playing
                        </button>
                        <button
                            className={` ${item.game2_status === 'Not Playing' ? 'redButton' : null}`}
                            onClick={() => { updatePlayer(item._id, 'Not Playing'); setStatus('Not Playing'); }}
                        >
                            Not Playing
                        </button>
                        <button
                            className={` ${item.game2_status === 'Undecided' ? 'yellowButton' : null}`}
                            onClick={() => { updatePlayer(item._id, 'Undecided'); setStatus('Undecided'); }}
                        >
                            Undecided
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gamestatus2;
