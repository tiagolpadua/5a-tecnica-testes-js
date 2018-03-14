/* exported app */
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

    function aplicaMascaraMCI(mci) {
        mci = leftPad(mci, 9);
        return mci.toString().substring(0, 3) + '.' +
            mci.toString().substring(3, 6) + '.' +
            mci.toString().substring(6, 9);
    }

    function detalharCliente(mci) {
        $.get('api/clientes/' + mci + '.json', function (cliente) {
            $('#tblDetalhaCliente tbody').empty();
            $('#tblDetalhaCliente tbody').append(
                '<tr><td>' +
                aplicaMascaraMCI(cliente.mci) +
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
                aplicaMascaraMCI(cliente.mci) +
                '</td>' +
                '<td>' + cliente.nome + '</td>' +
                '<td><div class="btn-group" role="group">' +
                '<button type="button" class="btn btn-info" onclick="app.detalharCliente(' + cliente.mci + ')">Detalhar</button>' +
                '</div></td></tr>'
            );
        });
    }

    function leftPad(valor, comprimento, caracter) {
        caracter = caracter || '0';
        while((valor + '').length < comprimento) {
            valor = caracter + valor;
        }
        return valor;
    }

    return {
        init: init,
        detalharCliente: detalharCliente,
        aplicaMascaraMCI: aplicaMascaraMCI,
        leftPad: leftPad
    };
})();