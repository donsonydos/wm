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

  sentences:any = [
    {
      "id": 1,
      "sentence": "Algunas personas quieren que algo ocurra, otras sueñan con que pasara, otras hacen que suceda.",
      "author": "Michael Jordan"
    },
    {
      "id": 2,
      "sentence": "Si buscas resultados distintos, no hagas siempre lo mismo.",
      "author": "Albert Einstein"
    },
    {
      "id": 3,
      "sentence": "Sacrificate unos pocos años haciendo lo que otros no están dispuestos a hacer, y disfrutarás el resto de tu vida como otros nunca podrán.",
      "author": "Mark Hughes"
    },
    {
      "id": 4,
      "sentence": "El éxito es la capacidad de ir de un fracaso a otro sin perder entusiasmo.",
      "author": "Winston Churchill"
    },
    {
      "id": 5,
      "sentence": "Muchos fracasos ocurren en personas que no se dieron cuenta lo cerca que estuvieron del éxito.",
      "author": "Thomas Alva Edison"
    },
    {
      "id": 6,
      "sentence": "El éxito está conectado con la acción. La gente exitosa se mantiene en movimiento. Hacen errores pero nunca se dan por vencidos.",
      "author": "Conrad Hilton"
    },
    {
      "id": 7,
      "sentence": "Todo parece imposible hasta que se hace.",
      "author": "Nelson Mandela"
    },
    {
      "id": 8,
      "sentence": "Cualquier cosa que la mente pueda concebir o crear se puede lograr",
      "author": "Napoleon Hill"
    },
    {
      "id": 9,
      "sentence": "No puedes cambiar el viento, pero puedes ajustar las velas para alcanzar tu destino.",
      "author": "Paulo Coelho"
    },
    {
      "id": 10,
      "sentence": "Muchos de nosotros no estamos viviendo nuestros sueños porque tememos vivir nuestros miedos.",
      "author": "Les Brown"
    },
    {
      "id": 11,
      "sentence": "No hay secretos para el éxito. Éste se alcanza preparándose, trabajando arduamente y aprendiendo del fracaso.",
      "author": "Colin Powell"
    },
    {
      "id": 12,
      "sentence": "No soy producto de mis circunstancias. Soy producto de mis decisiones.",
      "author": "Stephen Covey"
    },
    {
      "id": 13,
      "sentence": "No le pongas excusas a lo que no puedes terminar. Enfócate en todas aquellas razones por las que debas hacer que suceda.",
      "author": "Ralph Marston"
    },
    {
      "id": 14,
      "sentence": "No existe falta de tiempo, existe falta de interés. Porque cuando la gente realmente quiere, la madrugada se vuelve día, el martes se vuelve sábado y un momento se vuelve oportunidad",
      "author": "Anónimo"
    },
    {
      "id": 15,
      "sentence": "El miedo no existe en otro lugar excepto en la mente.",
      "author": "Daniel Carnegie"
    },
    {
      "id": 16,
      "sentence": "El deseo es la clave de la motivación, pero es la determinación y el compromiso absoluto a lograr tu meta lo que te permitirá lograr el éxito que buscas.",
      "author": "Mario Andretti"
    },
    {
      "id": 17,
      "sentence":"No existe gran talento sin gran voluntad",
      "author": "Honoré de Balzac"
    },
    {
      "id": 18,
      "sentence": "Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento.",
      "author": "Henry Ford"
    },
    {
      "id": 19,
      "sentence": "Estoy convencido que la mitad de lo que separa a los emprendedores exitosos de los que han fracasado es la perseverancia.",
      "author": "Steve Jobs"
    },
    {
      "id": 20,
      "sentence": "Los objetivos no sólo son necesarios para motivarnos. Son esenciales para mantenernos vivos.",
      "author": "Robert H. Schuller"
    },
    {
      "id": 21,
      "sentence": "El noventa por ciento del éxito se basa simplemente en insistir.",
      "author": "Woody Allen"
    },
    {
      "id": 22,
      "sentence": "Como una cobra, tu golpe debe sentirse antes que verse.",
      "author": "Bruce Lee"
    },
    {
      "id": 23,
      "sentence": "Si A es el éxito en la vida, entonces A = X + Y + Z. Donde X es trabajo, Y es placer y Z es mantener la boca cerrada.",
      "author": "Albert Einstein"
    },
    {
      "id": 24,
      "sentence": "Una persona inteligente se repone pronto de un fracaso. Un mediocre jamás se recupera de un éxito.",
      "author": "Séneca"
    },
    {
      "id": 25,
      "sentence": "El tamaño de tu éxito será del tamaño de tu esfuerzo.",
      "author": "Francisco de Miranda"
    },
    {
      "id": 26,
      "sentence": "No puedo darte la formula del éxito, pero si la del fracaso: Trata de complacer a todos.",
      "author": "Anónimo"
    },
    {
      "id": 27,
      "sentence": "Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso.",
      "author": "Bill Gates"
    },
    {
      "id": 28,
      "sentence":"La virtud, como el arte, se consagra constantemente a lo que es difícil de hacer, y cuanto más dura es la tarea más brillante es el éxito.",
      "author": "Aristóteles"
    },
    {
      "id": 29,
      "sentence": "Yo nunca habría tenido éxito en la vida si no me hubiera dedicado a las cosas más pequeñas con la misma atención y cuidado que le dediqué a las más grandes.",
      "author": "Charles Dickens"
    },
    {
      "id": 30,
      "sentence": "Debes realizar por lo menos un movimiento diario que te acerque un poco más a tu meta.",
      "author": "Bruce Lee"
    }
  ];

  selectFirst() {
    return new Promise((resolve, reject)=>{
      resolve(this.sentences[0]);
    });
  }

  selectRandom() {
    return this.getRandomInt(0, (this.sentences.length - 1)).then(numRandom=> {
      return this.sentences[Number(numRandom)];
    });

  }
  getRandomInt(min, max) {
    return new Promise((resolve,reject)=>{
      let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
      resolve(numRandom);
    });
  }

}
