declare global {
    //eslint-disable-next-line no-var
    var testRequest: import("supertest").SuperTest<import("supertest").Test>;
  }
  export {};
//Obs: tem mudanças aqui referente ao vídeo.

/*
Aqui estamos usando imports inline, visto que se fizessmos do jeito tradicional,
o node iria tratar o arquivo como local, porém o que queremos é que ele seja global mesmo
*/