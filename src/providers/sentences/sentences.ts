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
      "imageUrl": "https://s25.postimg.org/f33uji8qn/postal11.jpg"
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
      "imageUrl": ""
    },
    {
      "id": 14,
      "sentence":"Vive como si fueras a morir mañana. Aprende como si fueras a vivir siempre.",
      "author":"Mahatma Gandhi",
      "imageUrl": ""
    },
    {
      "id": 15,
      "sentence":"El optimismo firme y paciente siempre rinde sus frutos.",
      "author":"Carlos Slim",
      "imageUrl": ""
    },
    {
      "id": 16,
      "sentence":"El fracaso derrota a los perdedores e inspira a los ganadores.",
      "author":"Robert Kiyosaki",
      "imageUrl": ""
    },
    {
      "id": 17,
      "sentence": "No existe gran talento sin gran voluntad",
      "author": "Honoré de Balzac",
      "imageUrl": ""
    },
    {
      "id": 18,
      "sentence": "Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento.",
      "author": "Henry Ford",
      "imageUrl": ""
    },
    {
      "id": 19,
      "sentence": "Estoy convencido que la mitad de lo que separa a los emprendedores exitosos de los que han fracasado es la perseverancia.",
      "author": "Steve Jobs",
      "imageUrl": ""
    },
    {
      "id": 20,
      "sentence": "Los objetivos no sólo son necesarios para motivarnos. Son esenciales para mantenernos vivos.",
      "author": "Robert H. Schuller",
      "imageUrl": ""
    },
    {
      "id": 21,
      "sentence": "El noventa por ciento del éxito se basa simplemente en insistir.",
      "author": "Woody Allen",
      "imageUrl": ""
    },
    {
      "id": 22,
      "sentence": "Como una cobra, tu golpe debe sentirse antes que verse.",
      "author": "Bruce Lee",
      "imageUrl": ""
    },
    {
      "id": 23,
      "sentence":"La diferencia entre quien eres y quien quieres ser está en lo que haces.",
      "author":"Robert Kiyosaki",
      "imageUrl": ""
    },
    {
      "id": 24,
      "sentence": "Una persona inteligente se repone pronto de un fracaso. Un mediocre jamás se recupera de un éxito.",
      "author": "Séneca",
      "imageUrl": ""
    },
    {
      "id": 25,
      "sentence": "El tamaño de tu éxito será del tamaño de tu esfuerzo.",
      "author": "Francisco de Miranda",
      "imageUrl": ""
    },
    {
      "id": 26,
      "sentence": "No puedo darte la formula del éxito, pero si la del fracaso: Trata de complacer a todos.",
      "author": "Anónimo",
      "imageUrl": ""
    },
    {
      "id": 27,
      "sentence": "Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso.",
      "author": "Bill Gates",
      "imageUrl": ""
    },
    {
      "id": 28,
      "sentence": "La virtud, como el arte, se consagra constantemente a lo que es difícil de hacer, y cuanto más dura es la tarea más brillante es el éxito.",
      "author": "Aristóteles",
      "imageUrl": ""
    },
    {
      "id": 29,
      "sentence": "Yo nunca habría tenido éxito en la vida si no me hubiera dedicado a las cosas más pequeñas con la misma atención y cuidado que le dediqué a las más grandes.",
      "author": "Charles Dickens",
      "imageUrl": ""
    },
    {
      "id": 30,
      "sentence": "Debes realizar por lo menos un movimiento diario que te acerque un poco más a tu meta.",
      "author": "Bruce Lee",
      "imageUrl": ""
    }
  ];

  selectFirst() {
    return new Promise((resolve, reject) => {
      resolve(this.sentences[0]);
    });
  }

  selectRandom() {
    return this.getRandomInt(0, (this.sentences.length - 1)).then(numRandom => {
      if (this.sentences[Number(numRandom)].imageUrl !== '') {
        return this.sentences[Number(numRandom)];
      } else {
        return this.selectRandom();
      }
    });

  }

  getRandomInt(min, max) {
    return new Promise((resolve, reject) => {
      let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
      resolve(numRandom);
    });
  }

}
