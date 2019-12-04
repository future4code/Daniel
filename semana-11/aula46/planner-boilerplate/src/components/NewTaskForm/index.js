import React, { useState } from 'react'
import DaysSelectOptions from './daysSelectOptions'

export default function NewTaskForm(props) {

    const [form, setForm] = useState({ text: '', day: 'Segunda' });

    const handleNewTask = (e) => {
        e.preventDefault();
        props.createTask(form);
    }

    return (
        <form onSubmit={handleNewTask}>
            <input type="text" value={form["text"]} onChange={(e) => setForm({ ...form, text: e.target.value })} />
            <select value={form["day"]} onChange={(e) => setForm({ ...form, day: e.target.value })} >
                <DaysSelectOptions />
            </select>
            <button type="submit">Nova Task</button>
        </form>
    )
}
