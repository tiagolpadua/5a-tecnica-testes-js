// jshint ignore: start
var todosEnderecos = (function ($) {
    'use strict';

    var buscarPorCep = function (cep) {

        var p1 = new Promise(

            function (resolve, reject) {

                var endereco = {
                    cep: '70.673-410',
                    logradouro: 'SQSW 304 bloco j'
                };

                resolve(endereco);

            }
        );
        return p1;
    };

    return {
        buscarPorCep: buscarPorCep,
    };

})(jQuery);