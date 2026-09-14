document.addEventListener("DOMContentLoaded", function () {
    
    function atualizarHorario() {
        const elementoHorario = document.getElementById("barra-horario");
        if (!elementoHorario) return;

        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');

        const horarioFormatado = `${horas}:${minutos}:${segundos}`;
        
        const emAtendimento = agora.getHours() >= 8 && agora.getHours() < 18;
        const statusAtendimento = emAtendimento 
            ? "🟢 Estamos ABERTOS para atendimento!" 
            : "🔴 Estamos FECHADOS no momento (Horário de atendimento: 08:00 às 18:00).";

        elementoHorario.innerHTML = `<strong>Horário Atual:</strong> ${horarioFormatado} | ${statusAtendimento}`;
    }

    atualizarHorario();
    setInterval(atualizarHorario, 1000);

    const formCadastro = document.getElementById("form-cadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function (e) {
            e.preventDefault();

            const nomeCliente = document.getElementById("nomeCliente").value;
            const nomePet = document.getElementById("nomePet").value;

            alert(`✅ Cadastro realizado com sucesso!\n\nCliente: ${nomeCliente}\nPet: ${nomePet}\n\nObrigado por se cadastrar no Petshop Real Pet!`);
            
            formCadastro.reset();
        });
    }

    const formAgendamento = document.getElementById("form-agendamento");
    const divMensagem = document.getElementById("mensagem-agendamento");

    if (formAgendamento) {
        formAgendamento.addEventListener("submit", function (e) {
            e.preventDefault();

            const servico = document.getElementById("servicoSelecionado").value;
            const modalidade = document.getElementById("metodoEntrega").value;
            const data = document.getElementById("dataAgendamento").value;
            const hora = document.getElementById("horaAgendamento").value;

            const partesData = data.split("-");
            const dataBR = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

            if (divMensagem) {
                divMensagem.className = "alert alert-success mt-4 d-block";
                divMensagem.innerHTML = `
                    <h4 class="alert-heading">🎉 Agendamento Confirmado!</h4>
                    <p><strong>Serviço:</strong> ${servico}</p>
                    <p><strong>Modalidade:</strong> ${modalidade}</p>
                    <p><strong>Data:</strong> ${dataBR} às <strong>${hora}h</strong></p>
                    <hr>
                    <p class="mb-0">Aguardamos você e seu pet no horário agendado!</p>
                `;
            }

            formAgendamento.reset();
        });
    }
});