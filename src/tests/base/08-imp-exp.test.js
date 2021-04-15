import { getHeroeById } from "../../base/08-imp-exp";

import {getHeroeById } from '../../base/08-imp-expo.js '

describe('pruebas heroes', () => {

    test('retornar un objeto', () => {

        const id= 1;
        const heroe = getHeroeById(id)
        console.log(heroe);
        
    })
    
    
})
