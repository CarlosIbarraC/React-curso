import {retornaArreglo} from '../../base/07-deses-arr.js'

describe('pruebas en dessetructuracio', () => {
    test('should ', () => {
        const arr=retornaArreglo() ;
        expect(arr).toEqual(['ABC', 123]);
        const[letras,numeros]=retornaArreglo();
        expect ( letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect ( numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        
    })
    
})
