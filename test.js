document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('videosContainer').style.display = 'none';

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const local = document.getElementById('local').value;
        const dia = document.getElementById('dia').value;
        const horario = document.getElementById('horario').value;
        let valid = true;

        if (!local) {
            setError('local', 'Por favor, selecione um local/arena.');
            valid = false;
        } else {
            clearError('local');
        }

        if (!dia) {
            setError('dia', 'Por favor, selecione um dia.');
            valid = false;
        } else {
            clearError('dia');
        }

        if (!horario) {
            setError('horario', 'Por favor, selecione um horário.');
            valid = false;
        } else {
            clearError('horario');
        }

        if (valid) {
            document.getElementById('videosContainer').style.display = 'flex';
        }
    });
});

function setError(id, message) {
    const element = document.getElementById(id);
    element.parentElement.classList.add('error');
    element.parentElement.querySelector('.error-message').textContent = message;
    element.parentElement.querySelector('.error-message').style.visibility = 'visible';
}

function clearError(id) {
    const element = document.getElementById(id);
    element.parentElement.classList.remove('error');
    element.parentElement.querySelector('.error-message').style.visibility = 'hidden';
}
