import '@testing-library/jest-dom';

import{getSaludo} from '../../base/02-template-string';

describe('pruba de temple', () => {

  test('get saludo debe retornar hola blaa', () => {

    const nombre='fer';

    const saludo=getSaludo( nombre );

   expect(saludo).toBe('Hola '+ nombre)
      
  });
  test('get saludo debe retornar Hola Carlos ',()=>{

    const saludo=getSaludo();

    expect(saludo).toBe('Hola Carlos');

    
  })

    
});
