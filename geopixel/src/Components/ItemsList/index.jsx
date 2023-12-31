import styles from "./ItemsList.module.css"

import { useState } from "react";

function ItemsList() {

    
    //Input value state
    const [value, setValue] = useState("");
    //Selected option state
    const [option, setOption] = useState();

    //Default select label string
    const optionDefault = "Selecione uma opção"

    //Remove list item
    const removeList = e => {
        e.preventDefault();
        if (!value) {
            alert(`Digite um valor para remover da lista`);
            return;
        }
        if (!list.includes(value)) {
            alert(`Elemento "${value}" não existe na lista`);
        } else {


            const newList = list.filter(item => item !== value);

            setList(newList);
            setValue("");
            if (newList.length > 0 && option !== "") {

                setOption("default");
            } else {

                setOption("default");
            }

            alert(`Elemento "${value}" removido com sucesso`);
        }
    };

    //Clear input
    const clearInput = e => {
        e.preventDefault();
        setValue("");

    };

    //Add list item
    const addList = e => {
        e.preventDefault();

        console.log("text", value)
        if (!value) {
            alert(`Digite um valor para inserir na lista`);
            return;
        } else {
            if (!list.includes(value)) {
                const newList = [...list, value];


                setList(newList);
                alert(`Elemento "${value}" foi inserido com sucesso.`);
            } else {
                alert(`Elemento "${value}" já existe na lista.`);
            }
        }

        setValue("");

    };


    //List initialization
    const [list, setList] = useState([
        'Geopixel',
        'geopixel',
    ]);

    return (
        <div className={styles.container}>

            {/** Inputs **/}
            <form className={styles.form_list} >
                <div className={`${styles.form_list_item} ${styles.form_list_item_inputs}`} >
                    {/** Item list selector **/}
                    <div className={`${styles.center} ${styles.form_list_item_inputs}`}>
                        <select
                            value={option}
                            name="list" className={styles.form_control}
                            onChange={(e) => setOption(e.target.value)}
                            defaultValue={"default"} >
                            <option value={"default"} disabled >{optionDefault}</option>
                            {list.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    {/** Text input **/}
                    <div className={styles.center}>
                        <input
                            className={styles.form_control}
                            type="text"
                            name="item"
                            placeholder='Insira um item'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                    </div>

                </div>

                {/** Buttons  **/}
                <div className={styles.center}>
                    <button className={styles.form_list_button} onClick={addList}>
                        Adicionar
                    </button>
                    <button className={styles.form_list_button} onClick={removeList}>
                        Remover
                    </button>
                    <button className={styles.form_list_button} onClick={clearInput}>
                        Limpar caixa
                    </button>
                </div>
                
                {/** List item selected **/}
                <div className={styles.selected_item}>
                    {(option && (option !== "default")) ? (<h2>{option}</h2>) : (<h2>{optionDefault}</h2>)}
                </div>

            </form>
        </div>
    )
}

export default ItemsList
