import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://todo-backend-1-rnal.onrender.com';

function Create() {
    const [task, setTask] = useState();

    const handleAdd = () => {
        axios.post(`${BASE_URL}/add`, { task: task })
        .then(result => {
          location.reload();
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='create_form'>
            <input type="text" placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
