import { useEffect, useState, useRef } from 'react';
import axios from 'axios';


const TestPage = (props) => {
    const [notes, setNotes] = useState([]);
    let ref = useRef(0);
    useEffect(() => {
        const func = async () => {
            try {
                const result = await axios.get('/api/notes');
                setNotes(result.data)
            } catch (error) {
                console.log(error);
            }
            ref++
        }
        func();
    }, [ref])

    const [noteField, setNoteField] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            note: noteField
        }
        console.log(data);
        await axios.post("/api/notes", data);
        const result = await axios.get('/api/notes');
        setNotes(result.data);
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/notes/${id}`);
            const result = await axios.get('/api/notes');
            setNotes(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div style={{ flexDirection: "row" }}>
                <input type='text' value={noteField} onChange={e => setNoteField(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                {(notes.length) ? <>
                    {notes.map((elem, i) => {
                        return (
                            <div key={i} style={{ flexDirection: "row" }}>
                                <p style={{ display: 'inline' }}>{elem.note}</p>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    handleDelete(elem._id);
                                }}>Delete</button>
                            </div>
                        );
                    })}
                </> : ""}
            </div>
        </>
    );
}

export default TestPage;