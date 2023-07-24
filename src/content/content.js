//Board
export const news = 'A eso de las seis y cuarto comenzaron a aullar todos los perros de la ciudad. Un par de minutos después se escucharon las primeras sirenas de evacuación. Durante el año posterior al segundo encuentro me había prometido a mí misma una exposición de valentía que, llegado el momento, no fui capaz de concretar. Al irme acercando al muelle mis palabras se hicieron más cortas, hasta que mi voz terminó por apagarse. Al llegar a la zona de combate, las fuerzas de paz de la ONU me dotaron de un chaleco antibalas beige, de esos que usan para operaciones en el desierto; y un casco azul cielo con antiparras, micrófono y auricular. Un soldado raso, casi adolescente, me ayudó a ajustar el chaleco y a montar el pesado arpón en mi espalda. Miré el chaleco sobre mi anorak y pensé en lo inútil que era aquella cosa, casi tan inútil como ese llamativo casco que sólo le facilitaba al espíritu asesino conocer mi posición.'


//BookCard
export const cardInfo = "Una tarde vuelves a casa agotada por la clase de gimnasia. Te duchas, comes algo y te acuestas a mirar un rato la televisión. Sientes un poco de frío; te abrigas, pero el frío no se va. Estás mareada y crees que te cayó mal algo que comiste. No le das importancia, eres joven y la muerte es algo demasiado lejano, algo a lo que temes para los que amas, no para tí. La noche no mejora. Te cuesta un montón levantarte para ir a vomitar. Te duelen todos los huesos, el techo da vueltas, y te retuerces hasta que pierdes completamente la vista. Tu madre te encuentra un par de horas más tarde, tirada sobre la alfombra, con la boca llena de espuma. Grita desesperada, te da por muerta. Escuchas las sirenas, a un millón de kilómetros, en Plutón, en Andrómeda. Te conectan a una máquina rarísima y te sacan sangre hasta de los párpados. Sabes que vas a morir, que se acabó, y sufres por no poder hablar, para decirle adiós a tu padre, que trata de salvarte la vida bajo el embrujo de un angustioso sprint de adrenalina. Despiertas dos días después, sabiendo que algo ha cambiado, no sólo en tí; en todo lo que ves y tocas. La vida fluye en las lágrimas de tu padre, que te abraza como si fuese la última vez. Estás viva, todo está vivo; lo sabes, lo entiendes, al fin puedes ver lo que antes era un concepto abstracto, un principio religioso o un postulado científico. Eres vida."


//Author
export const authorContent = 'Yo sólo quería escribir. En el camino han pasado un montón de cosas, algunas buenas, algunas malas, algunas peores. Es difícil escribir durante las peores. Carezco de la templanza necesaria para enfocarme en lo que está fuera de la realidad mientras la realidad está a punto de estallar. Admiro a aquellos que han logrado sacar sus mejores líneas en medio de la adversidad, aunque algo me dice que esas mejores líneas son producto de un par de buenas líneas. Por mi parte, haciendo lo que me gusta mientras me he sentido a gusto, he logrado sacar adelante algunas historias que, prefiero creer, pueden resultar más o menos entretenidas. El mundo está hecho de muchas pretenciones y de pocos compromisos, por eso no pretendo comprometerme con nada. Escribo porque quiero y porque de vez en cuando puedo.'


import otono from '../assets/otono.png'
import invierno from '../assets/invierno.png'
import epica from '../assets/epica.png'
import felikaGaiden from '../assets/felikaGaiden.png'
import ellxs from '../assets/ellxs.png'
import felika from '../assets/felika.png'
import felika2 from '../assets/felika2.png'
import contraMi from '../assets/contraMi.png'

export const books = [
    {
        id: 1,
        title: "Felika",
        author: "Alain Gamarov",
        cover: felika,
        cover2: felika2,
        tags: ["fantasía", "Acción",],
        description: "El 17 de Julio de 2003 la muerte envió a su primer emisario a destruirlo todo, a borrarnos de la historia. Ante la amenaza, la vida inmediatamente responde en conformidad. Djibril muere en batalla, llevándose consigo al espíritu asesino y dejándonos un año de maniobra para prepararnos ante la próxima embestida. Hemos prevalecido y aún hay esperanza. Desafortunadamente, la vida me ha elegido para defender a una especie que no se entiende a sí misma.",
    },
    {
        id :2,
        title: "Felika-Gaiden",
        author: "Alain Gamarov",
        cover: felikaGaiden,
        info: cardInfo,
        tags: ["fantasía", "Acción", "Drama",],
        description: "En este gaiden conoceremos los origenes de CER, la naturaleza de los espiritus asesinos y entenderemos qué hay detrás del enorme sacrificio hecho por Djbril en la montaña del silencio. También descubriremos los primeros días de Felicia como defensora de la vida, su batalla interna y su performance durante el segundo encuentro."
    },
    {
        id:3,
        title: "Otoño",
        author: "Alain Gamarov",
        cover: otono,
        tags: ["Misterio", "Drama", "Suspenso"],
        description: "Una tarde de otoño, mientras sacaba a pasear a su perro, María descubre los cadáveres de los miembros del equipo de natación. El pequeño pueblo se encuentra conmovido por el terrible suceso, finalmente catalogado como suicidio colectivo, sin embargo, nadie parece poner reparo en el quinto miembro del equipo, Thiago Odreman, que se encuentra desaparecido. Sobreviviente o asesino, esta pequeña comunidad se enbarcará en una busqueda fratricida por la verdad de Thiago."
    },
    {
        id:4,
        title: "Invierno",
        author: "Alain Gamarov",
        cover: invierno,
        tags: ["Misterio", "Drama", "Suspenso"],
        description: "Los acontecimientos del otoño han dejado heridas sin sicatrizar. Lo que fuera un pueblo pacifico y ejemplar, se ha convertido en un hervidero de bandas y vengadores. Con una guerra en ciernes, María aún tiene mucho por descubrir. No todo es lo que parece y cualquier paso en falso podría desencadenar la violencia generalizada."
    },
    {
        id:5,
        title: "Épica Batalla En El Colegio",
        author: "Alain Gamarov",
        cover: epica,
        tags: ["Fantasía", "Acción", "Epopeya", "Beat em up"],
        description: "Axel ha recibido la mejor noticia de su vida: la dulce Avril Larousse ha aceptado desayunar con él durante el recreo. Su alegría es efímera, pues ese mismo día ha sido retado a tres combates legendarios. ¿Podrá Axel derrotar a todos sus enemigos antes de que suene la campana? ¿Esperará Avril por él?"
    },
    {
        id:6,
        title: "Ellxs",
        author: "Ciri Lestany",
        cover: ellxs,
        tags: ["Distopía", "Acción"],
        description: "Equiz Spano ha sido liberado. Cinco años de reformación deberían bastar para convertir a un terrible criminal de odio en un elemento cuanto menos tolerable dentro de la <<Munda Nueva>>. Su delito: llamar gorda a su esposa; su condena: ser execrado de por vida de la sociedad. Eso siempre y cuando las guerrillas urbanas, subversivas y desbordadas de intolerancia, no logren destruir lo que tanto esfuerzo le ha costado a la humanidad levantar."
    },
    {
        id:7,
        title: "Contra Mí",
        author: "Ciri Lestany",
        cover: contraMi,
        tags: ["Distopía", "Acción", "Beat em up"],
        description: "La presidenta de la nación ha sido asesinada en un stream. Los asesinos, influencers de oficio, la mataron durante un directo. Entraron a su baño mientras defecaba y la balearon. Se llenaron de likes y visitas, pero el pandemonium que han desatado no tiene comparación histórica. La única forma de sobrevivir es llegar al sur, y para eso hay que sortear bandas de psicópatas, saqueos, rebeldes y cazadores de hombres."
    },
        
]