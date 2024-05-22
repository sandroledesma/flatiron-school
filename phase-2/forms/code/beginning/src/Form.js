import { useState } from "react";

export default function Form() {
    // const [ name, setName ] = useState("");
    // const [ movie, setMovie ] = useState("");
    const [ memberData, setMemberData ] = useState({
        name: "",
        movie: ""
    });
    // function handleChange(event) {
    //     setMemberData(event.target.value);
    // }

    const [errors, setErrors] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (memberData.name.length > 1) {
            setMemberData("");
        } else {
            setErrors("Enter a valid name!");
        }
    }

    return (
        <form onSubmit={event => handleSubmit(setErrors)}>
            <label><strong>Name </strong>
                <input value={memberData.name} onChange={event => setMemberData({ ...memberData, name: event.target.value })} />
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
                <input value={memberData.movie} onChange={event => setMemberData({ ...memberData, movie: event.target.value })}/>
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>{memberData.name.length * memberData.movie.length}</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up" />
            <h2>Members</h2>
            <sub>Fill out the form to add your first member!</sub>
        </form>
    )
}