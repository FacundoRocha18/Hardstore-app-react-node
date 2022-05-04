import { useEffect, useState } from 'react';

export default function useName() {

    /* Recupera el token almacenado en el session storage
    y lo devuelve como un string */

    const getName = () => {
        let nameString = sessionStorage.getItem('name');

        if (nameString === undefined || nameString === null) {
            return nameString = '';
        }

        return nameString;
    };

    const [sessionUsername, setUsername] = useState(null);

    useEffect(() => {

        setUsername(getName());

        return () => {
        }
    }, [getName])

    const saveName = (username) => {
        sessionStorage.setItem('name', JSON.stringify(username));
        setUsername(username.name);
    };

    return {
        userName: sessionUsername,
        setUsername: saveName
    }
}
