import { useState } from "react";

export default function Form(postRequest) {
    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);

    const handleNameChange = (event) => {setName(event.target.value)};
    return (
        <form onSubmit={event => postRequest(event, name, price)}>
            <input name="name" type="text" placeholder="Name" 
                onChange={handleNameChange} value={name} />{` `}
            <input name="price" type="number" placeholder="0" min="0" 
                onChange={event => setPrice(event.target.value)} value={price}/>{` `}
            <input type="submit" value="Submit" />
      </form>
    )
}