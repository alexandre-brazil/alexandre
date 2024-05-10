import React, { useState, useEffect } from "react";

export default function useScrollProgress() {
    const [completion, setCompletion] = useState(0); // Correção: remova o sinal de igual após useState

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(Number((currentProgress / scrollHeight) * 100).toFixed(2)); // Correção: mova a multiplicação por 100 para dentro da função Number e corrija a posição do parêntese
            }
        };

        // Adiciona o evento de scroll e retorna a função de remoção do evento
        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []); // Correção: remova a vírgula após o array de dependências vazio

    return completion;
}
