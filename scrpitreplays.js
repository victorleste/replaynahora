document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    // Função para verificar se os critérios de redirecionamento são atendidos
    function shouldRedirect() {
        const localValue = document.getElementById('local').value;
        const dayValue = document.getElementById('dia').value;
        const timeValue = document.getElementById('horario').value;

        return localValue === "casa1" && dayValue === "dia2" && timeValue === "hora3";
    }

    // Adiciona ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        if (!shouldRedirect()) {
            alert("Por favor, selecione corretamente o local, dia e horário.");
        } else {
            // Redireciona para index.html se os critérios forem atendidos
            console.log("Redirecionando para index.html...");
            window.location.href = "paginadereplays.html";
        }
    });
});
