import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PlayerCreation = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const [position, setPosition] = useState('');
    const navigate = useNavigate();
    const eventHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/players/addplayer", {
            name,
            position
        })
            .then(() => {
                console.log(name);
                alert("Player added")
                navigate('/players/list')
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                setErrors(errorResponse);
            });
        setName('')
        setPosition('')

    }

    return (
        <>
            <div className="form_container">
                <div className="player_container_creation">
                    <h1>Add player</h1>
                    <form onSubmit={eventHandler}>
                        <div className="inputs_container">


                            <div className="name_input">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    placeholder="Player Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}

                                />
                                {errors.name ?
                                    <p>{errors.name.message}</p>
                                    : null
                                }
                            </div>
                            <div className="position_input">
                                <label htmlFor="positon">Position:</label>
                                <input
                                    type="text"
                                    placeholder="Player Position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                                {errors.position ?
                                    <p>{errors.position.message}</p>
                                    : null
                                }
                            </div>
                        </div>
                        <div className="buton_add_player">
                            <button type="submit">Submit</button>
                        </div>


                    </form>
                </div>

            </div>



        </>
    );
}

export default PlayerCreation;
