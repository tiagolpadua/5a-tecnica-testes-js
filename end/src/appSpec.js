// jshint ignore: start
// describe('Listagem de Clientes', function () {
//     'use strict';
//     it('Deve validar que true é true', function () {
//         expect(true).toBeTruthy();
//     });
// });
describe('Listagem de Clientes', function () {
    'use strict';
    describe('Máscara de MCI', function () {
        it('Deve aplicar a máscara em um MCI informado', function () {
            expect(app.aplicaMascaraMCI(111222333)).toBe('111.222.333');
        });
        it('Deve ajustar a máscara se o MCI tiver menos de 9 posições', function () {
            expect(app.aplicaMascaraMCI(111222)).toBe('000.111.222');
        });
    });
    describe('leftPad', function () {
        it('Deve converter um valor para um comprimento fixo, utilizar 0 como caracter default', function () {
            expect(app.leftPad(11244, 6)).toBe('011244');
        });

        it('Deve aceitar um caracter diferente para fazer o pad', function () {
            expect(app.leftPad(5784, 7, 'X')).toBe('XXX5784');
        });
    });
});