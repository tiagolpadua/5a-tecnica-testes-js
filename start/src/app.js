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
                '<tr><td>' +
                cliente.mci.toString().substring(0, 3) + '.' + cliente.mci.toString().substring(3, 6) + '.' + cliente.mci.toString().substring(6, 9) +
                '</td><td>' + cliente.nome + '</1td><td>' + cliente.documento + '</td></tr>'
            );
            $('#mdlDetalhaCliente').modal('show');
        });
    }

    function atualizaListaClientes(clientes) {
        $('#tblClientes tbody').empty();
        clientes.forEach(function (cliente) {
            $('#tblClientes tbody').append(
                '<tr><td>' +
                cliente.mci.toString().substring(0, 3) + '.' + cliente.mci.toString().substring(3, 6) + '.' + cliente.mci.toString().substring(6, 9) +
                '</td>' +
                '<td>' + cliente.nome + '</td>' +
                '<td><div class="btn-group" role="group">' +
                '<button type="button" class="btn btn-info" onclick="app.detalharCliente(' + cliente.mci + ')">Detalhar</button>' +
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