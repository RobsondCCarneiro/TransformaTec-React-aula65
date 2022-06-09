import React, {useEffect, useState} from 'react';

export default function useEffectFunction() {

    const [clicks, setClicks] = useState(0)
    const [pressed, setPressed] = useState(0)

    useEffect(
        /* Quando coloco o array vazio [ARRAY DE DEPENDENCIA], 
        ele fica sem dependencia, ou seja, só renderiza na 
        primeira vez como o componente didMount */
        () => {
            document.title = `Clicks: ${clicks}`
        }, [clicks]
    )

    /* Quando se usa função, não pode utilizar this.state.clicks
    como foi utilizado em classe, ou seja, será apenas clicks*/
    return (
        <div>
            <h3>UseEffect em Função</h3>
            <p>Clicks: {clicks}</p>
            <button
                onClick={
                    () => setClicks(clicks + 1)
                }
            >
                Clique aqui
            </button>
        </div>
    )
}