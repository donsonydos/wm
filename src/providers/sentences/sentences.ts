import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
 Generated class for the SentencesProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class SentencesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SentencesProvider Provider');
  }

  sentences: any = [
    {
      "id": 1,
      "sentence": "Algunas personas quieren que algo ocurra, otras sueñan con que pasara, otras hacen que suceda.",
      "author": "Michael Jordan",
      "imageUrl": "https://s25.postimg.org/nldantcof/postal8.jpg"
    },
    {
      "id": 2,
      "sentence": "Si buscas resultados distintos, no hagas siempre lo mismo.",
      "author": "Albert Einstein",
      "imageUrl": "https://s25.postimg.org/9roxyrrsv/postal2.jpg"
    },
    {
      "id": 3,
      "sentence": "Sacrificate unos pocos años haciendo lo que otros no están dispuestos a hacer, y disfrutarás el resto de tu vida como otros nunca podrán.",
      "author": "Mark Hughes",
      "imageUrl": "https://s25.postimg.org/ve3yfs37z/postal3.jpg"
    },
    {
      "id": 4,
      "sentence": "El éxito es la capacidad de ir de un fracaso a otro sin perder entusiasmo.",
      "author": "Winston Churchill",
      "imageUrl": "https://s25.postimg.org/imps99lq7/postal4.jpg"
    },
    {
      "id": 5,
      "sentence": "Muchos fracasos ocurren en personas que no se dieron cuenta lo cerca que estuvieron del éxito.",
      "author": "Thomas Alva Edison",
      "imageUrl": "https://s25.postimg.org/uol63en8v/postal5.jpg"
    },
    {
      "id": 6,
      "sentence":"El instinto trasciende al conocimiento. tenemos, sin duda, ciertas fibras finas que nos permiten deducir verdades, cuando la deducción lógica, o cualquier otro esfuerzo de la mente, es útil.",
      "author":"Nikola Tesla",
      "imageUrl": "https://s25.postimg.org/8perg7tjz/postal6.jpg"
    },
    {
      "id": 7,
      "sentence": "Todo parece imposible hasta que se hace.",
      "author": "Nelson Mandela",
      "imageUrl": "https://s25.postimg.org/nldansa3j/postal7.jpg"
    },
    {
      "id": 8,
      "sentence": "Cualquier cosa que la mente pueda concebir o crear se puede lograr",
      "author": "Napoleon Hill",
      "imageUrl": "https://s25.postimg.org/hkflqpfrj/postal1.jpg"
    },
    {
      "id": 9,
      "sentence": "No puedes cambiar el viento, pero puedes ajustar las velas para alcanzar tu destino.",
      "author": "Paulo Coelho",
      "imageUrl": "https://s25.postimg.org/ykyhzfij3/postal9.jpg"
    },
    {
      "id": 10,
      "sentence":"Si hubiera preguntado a la gente que qué quería, me hubiesen dicho que 'caballos más rápidos'.",
      "author":"Henry Ford",
      "imageUrl": "https://s25.postimg.org/f33uji8qn/postal10.jpg"
    },
    {
      "id": 11,
      "sentence": "La visión sin la ejecución, solo es una alucinación.",
      "author": "Henry Ford",
      "imageUrl": "https://s25.postimg.org/q2p1v3rfz/postal11.jpg"
    },
    {
      "id": 12,
      "sentence":"Las personas que no están dispuestas a realizar pequeñas mejoras, no estarán nunca entre los hombres que realizan cambios trascendentales",
      "author":"Mahatma Gandhi",
      "imageUrl": "https://s25.postimg.org/ubtrx9mzj/postal12.jpg"
    },
    {
      "id": 13,
      "sentence": "No le pongas excusas a lo que no puedes terminar. Enfócate en todas aquellas razones por las que debas hacer que suceda.",
      "author": "Ralph Marston",
      "imageUrl": "https://s25.postimg.org/lkyqqajfj/postal13.jpg"
    },
    {
      "id": 14,
      "sentence":"Vive como si fueras a morir mañana. Aprende como si fueras a vivir siempre.",
      "author":"Mahatma Gandhi",
      "imageUrl": "https://s25.postimg.org/d2palykmn/postal14.jpg"
    },
    {
      "id": 15,
      "sentence":"El optimismo firme y paciente siempre rinde sus frutos.",
      "author":"Carlos Slim",
      "imageUrl": "https://s25.postimg.org/so6m5wh5b/postal15.jpg"
    },
    {
      "id": 16,
      "sentence":"El fracaso derrota a los perdedores e inspira a los ganadores.",
      "author":"Robert Kiyosaki",
      "imageUrl": "https://s25.postimg.org/usqz70lcv/postal16.jpg"
    },
    {
      "id": 17,
      "sentence": "No existe gran talento sin gran voluntad",
      "author": "Honoré de Balzac",
      "imageUrl": "https://s25.postimg.org/so6m5xrfz/postal17.jpg"
    },
    {
      "id": 18,
      "sentence": "Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento.",
      "author": "Henry Ford",
      "imageUrl": "https://s25.postimg.org/usqz70dn3/postal18.jpg"
    },
    {
      "id": 19,
      "sentence": "Estoy convencido que la mitad de lo que separa a los emprendedores exitosos de los que han fracasado es la perseverancia.",
      "author": "Steve Jobs",
      "imageUrl": "https://s25.postimg.org/zen3fdmbj/postal19.jpg"
    },
    {
      "id": 20,
      "sentence": "Los objetivos no sólo son necesarios para motivarnos. Son esenciales para mantenernos vivos.",
      "author": "Robert H. Schuller",
      "imageUrl": "https://s25.postimg.org/aldjep8fz/postal20.jpg"
    },
    {
      "id": 21,
      "sentence": "El noventa por ciento del éxito se basa simplemente en insistir.",
      "author": "Woody Allen",
      "imageUrl": "https://s25.postimg.org/4x78ns98f/postal21.jpg"
    },
    {
      "id": 22,
      "sentence": "La verdadera fuerza no reside en los brazos sino en el espiritu",
      "author": "Bruce Lee",
      "imageUrl": "https://s25.postimg.org/pts1027un/postal22.jpg"
    },
    {
      "id": 23,
      "sentence":"La diferencia entre quien eres y quien quieres ser está en lo que haces",
      "author":"Robert Kiyosaki",
      "imageUrl": "https://s25.postimg.org/ufo58fo8v/postal23.jpg"
    },
    {
      "id": 24,
      "sentence": "Una persona inteligente se repone pronto de un fracaso. Un mediocre jamás se recupera de un éxito",
      "author": "Séneca",
      "imageUrl": "https://s25.postimg.org/qjatcesyn/postal24.jpg"
    },
    {
      "id": 25,
      "sentence": "Odié cada minuto de entrenamiento, pero dije, \"No renuncies. Sufre ahora y vive el resto de tu vida como un campeón\"",
      "author": "Muhammad Ali",
      "imageUrl": "https://s25.postimg.org/al23mb1bj/postal25.jpg"
    },
    {
      "id": 26,
      "sentence": "No permitas que nadie diga que eres incapaz de hacer algo, Si tienes un sueño, debes conservarlo. Si quieres algo, sal a buscarlo",
      "author": "Will Smith",
      "imageUrl": "https://s25.postimg.org/9irx3rasf/postal26.jpg"
    },
    {
      "id": 27,
      "sentence": "Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso",
      "author": "Bill Gates",
      "imageUrl": "https://s25.postimg.org/x9ralv39r/postal27.jpg"
    },
    {
      "id": 28,
      "sentence": "La virtud, como el arte, se consagra constantemente a lo que es difícil de hacer, y cuanto más dura es la tarea más brillante es el éxito",
      "author": "Aristóteles",
      "imageUrl": "https://s25.postimg.org/4wvsve23z/postal28.jpg"
    },
    {
      "id": 29,
      "sentence": "No he fracasado, he encontrado 10.000 maneras en las que esto no funciona",
      "author": "Thomas Edison",
      "imageUrl": "https://s25.postimg.org/mzovmlij3/postal29.jpg"
    },
    {
      "id": 30,
      "sentence": "Debes realizar por lo menos un movimiento diario que te acerque un poco más a tu meta",
      "author": "Bruce Lee",
      "imageUrl": "https://s25.postimg.org/8ghql8f4f/postal30.jpg"
    }
  ];

  selectFirst() {
    return new Promise((resolve, reject) => {
      resolve(this.sentences[0]);
    });
  }

  selectRandom() {
    return this.getRandomInt(0, (this.sentences.length - 1)).then(numRandom => {
      return this.sentences[Number(numRandom)];
    });

  }

  getRandomInt(min, max) {
    return new Promise((resolve, reject) => {
      let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
      resolve(numRandom);
    });
  }
}
