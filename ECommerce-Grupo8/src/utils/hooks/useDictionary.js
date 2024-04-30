import {useState} from "react";

const useDictionary = () => {
    const [dictionary, setDictionary] = useState({});

    // Función para agregar una palabra a una clave existente o crear una nueva clave
    const addWord = (key, word) => {
        setDictionary(prevDictionary => {
            // Si la clave ya existe, agregamos la palabra al array existente
            if (key in prevDictionary) {
                return {
                    ...prevDictionary,
                    [key]: [...prevDictionary[key], word]
                };
            } else {
                // Si la clave no existe, creamos una nueva clave con un nuevo array que contenga la palabra
                return {
                    ...prevDictionary,
                    [key]: [word]
                };
            }
        });
    };

    // Función para eliminar una palabra de su clave correspondiente
    const removeWord = (key, word) => {
        setDictionary(prevDictionary => {
            // Si la clave existe y el array contiene la palabra, la eliminamos
            if (key in prevDictionary && prevDictionary[key].includes(word)) {
                const updatedArray = prevDictionary[key].filter(w => w !== word);
                return {
                    ...prevDictionary,
                    [key]: updatedArray
                };
            }
            // Si la clave no existe o la palabra no está en el array, devolvemos el diccionario sin cambios
            return prevDictionary;
        });
    };


    return { dictionary, addWord, removeWord };
};

export default useDictionary;

