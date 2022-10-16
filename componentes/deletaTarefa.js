const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', deletaTarefa);

    return botaoDeleta;
};

const deletaTarefa = (event) => {
    const botaoDeleta = event.target;

    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoDeleta;
