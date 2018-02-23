var app = (function (undefined) {
    'use strict';

    function init() {
        console.log('Aplicação iniciada!');
        recuperaClientes(function (clientes) {
            atualizaListaClientes(clientes);
        });
    }

    function recuperaClientes(callback) {
        $.get('api/clientes.json', function (resposta) {
            callback(resposta.listaClientes);
        });
    }

    function detalharCliente(mci) {
        $.get('api/clientes/' + mci + '.json', function (cliente) {
            $('#tblDetalhaCliente tbody').empty();
            $('#tblDetalhaCliente tbody').append(
                '<tr><td>' + cliente.mci + '</td><td>' + cliente.nome + '</td><td>' + cliente.documento + '</td></tr>'
            );
            $('#mdlDetalhaCliente').modal('show');
        });
    }

    function atualizaListaClientes(clientes) {
        $('#tblClientes tbody').empty();
        clientes.forEach(function (cliente) {
            $('#tblClientes tbody').append(
                '<tr><td>' + cliente.mci + '</td>' +
                '<td>' + cliente.nome + '</td>' +
                '<td><div class="btn-group" role="group">' +
                '<button type="button" class="btn btn-info" onclick="app.detalharCliente(' + cliente.mci + ')">Detalhar</button>' +
                // '<button type="button" class="btn btn-info" onclick="app.colocarClienteEmEdicao(' + cliente.mci + ')">Alterar</button>' +
                // '<button type="button" class="btn btn-danger" onclick="app.excluirCliente(' + cliente.mci + ')">Excluir</button>' +
                '</div></td></tr>'
            );
        });
    }

    return {
        init: init,
        detalharCliente: detalharCliente
    };
})();

app.init();