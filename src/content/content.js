//Board
export const news = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro sint at consequuntur itaque voluptatum, accusantium hic dolores culpa sed suscipit vitae debitis libero. Natus, hic. Eos commodi ipsum nihil voluptate.'


//BookCard
export const cardInfo = "Una tarde vuelves a casa agotada por la clase de gimnasia. Te duchas, comes algo y te acuestas a mirar un rato la televisión. Sientes un poco de frío; te abrigas, pero el frío no se va. Estás mareada y crees que te cayó mal algo que comiste. No le das importancia, eres joven y la muerte es algo demasiado lejano, algo a lo que temes para los que amas, no para tí. La noche no mejora. Te cuesta un montón levantarte para ir a vomitar. Te duelen todos los huesos, el techo da vueltas, y te retuerces hasta que pierdes completamente la vista. Tu madre te encuentra un par de horas más tarde, tirada sobre la alfombra, con la boca llena de espuma. Grita desesperada, te da por muerta. Escuchas las sirenas, a un millón de kilómetros, en Plutón, en Andrómeda. Te conectan a una máquina rarísima y te sacan sangre hasta de los párpados. Sabes que vas a morir, que se acabó, y sufres por no poder hablar, para decirle adiós a tu padre, que trata de salvarte la vida bajo el embrujo de un angustioso sprint de adrenalina. Despiertas dos días después, sabiendo que algo ha cambiado, no sólo en tí; en todo lo que ves y tocas. La vida fluye en las lágrimas de tu padre, que te abraza como si fuese la última vez. Estás viva, todo está vivo; lo sabes, lo entiendes, al fin puedes ver lo que antes era un concepto abstracto, un principio religioso o un postulado científico. Eres vida."


//Author
export const authorContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo corrupti excepturi dignissimos magni porro provident quos libero quo, minus quaerat culpa error harum labore nihil ad, commodi odio nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi sed ut eius cum optio deleniti nobis architecto eos eveniet, perferendis dignissimos reprehenderit, necessitatibus quasi veniam corporis cumque sint inventore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptas dolorum sed iste nihil nulla accusantium vitae provident aliquid, ducimus ipsam ad est, impedit aperiam nesciunt? Molestiae hic cum ullam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima ratione voluptas nostrum. Molestias facere vero sint ducimus atque magni magnam natus maiores excepturi inx, explicabo a, iusto labore perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui odit dolores, totam sit temporibus exercitationem, itaque amet ducimus optio libero esse incidunt nobis pariatur? Veniam ut exercitationem quas aliquam eos.'


import otono from '../assets/otono.png'
import invierno from '../assets/invierno.png'
import epica from '../assets/epica.png'
import felikaGaiden from '../assets/felikaGaiden.png'
import ellxs from '../assets/ellxs.png'
import felika from '../assets/felika.png'
import contraMi from '../assets/contraMi.png'

export const books = [
    {
        id: 1,
        title: "Felika",
        Author: "Alain Gamarov",
        cover: felika,
        tags: ["fantasía", "Acción",],
        description: "El 17 de Julio de 2003 la muerte envió a su primer emisario a destruirlo todo, a borrarnos de la historia. Ante la amenaza, la vida inmediatamente responde en conformidad. Djibril muere en batalla, llevándose consigo al espíritu asesino y dejándonos un año de maniobra para prepararnos ante la próxima embestida. Hemos prevalecido y aún hay esperanza. Desafortunadamente, la vida me ha elegido para defender a una especie que no se entiende a sí misma.",
    },
    {
        id :2,
        title: "Felika-Gaiden",
        Author: "Alain Gamarov",
        cover: felikaGaiden,
        info: cardInfo,
        tags: ["fantasía", "Acción", "Drama",],
        description: "En este gaiden conoceremos los origenes de CER, la naturaleza de los espiritus asesinos y entenderemos qué hay detrás del enorme sacrificio hecho por Djbril en la montaña del silencio. También descubriremos los primeros días de Felicia como defensora de la vida, su batalla interna y su performance durante el segundo encuentro."
    },
    {
        id:3,
        title: "Otoño",
        Author: "Alain Gamarov",
        cover: otono,
        tags: ["Misterio", "Drama", "Suspenso"],
        description: "Una tarde de otoño, mientras sacaba a pasear a su perro, María descubre los cadáveres de los miembros del equipo de natación. El pequeño pueblo se encuentra conmovido por el terrible suceso, finalmente catalogado como suicidio colectivo, sin embargo, nadie parece poner reparo en el quinto miembro del equipo, Thiago Odreman, que se encuentra desaparecido. Sobreviviente o asesino, esta pequeña comunidad se enbarcará en una busqueda fratricida por la verdad de Thiago."
    },
    {
        id:4,
        title: "Invierno",
        Author: "Alain Gamarov",
        cover: invierno,
        tags: ["Misterio", "Drama", "Suspenso"],
        description: "Los acontecimientos del otoño han dejado heridas sin sicatrizar. Lo que fuera un pueblo pacifico y ejemplar, se ha convertido en un hervidero de bandas y vengadores. Con una guerra en ciernes, María aún tiene mucho por descubrir. No todo es lo que parece y cualquier paso en falso podría desencadenar la violencia generalizada."
    },
    {
        id:5,
        title: "Épica Batalla En El Colegio",
        Author: "Alain Gamarov",
        cover: epica,
        tags: ["Fantasía", "Acción", "Epopeya", "Beat em up"],
        description: "Axel ha recibido la mejor noticia de su vida: la dulce Avril Larousse ha aceptado desayunar con él durante el recreo. Su alegría es efímera, pues ese mismo día ha sido retado a tres combates legendarios. ¿Podrá Axel derrotar a todos su enemigos antes de que suene la campana? ¿Esperará Avril por él?"
    },
    {
        id:6,
        title: "Ellxs",
        Author: "Ciri Lestany",
        cover: ellxs,
        tags: ["Distopía", "Acción"],
        description: "Equiz Spano ha sido liberado. Cinco años de reformación deberían bastar para convertir a un terrible criminal de odio en un elemento cuanto menos tolerable dentro de la <<Munda Nueva>>. Su delito: llamar gorda a su esposa; su condena: ser execrado de por vida de la sociedad. Eso siempre y cuando las guerrillas urbanas, subversivas y desbordadas de intolerancia, no logren destruir lo que tanto esfuerzo le ha costado a la humanidad levantar."
    },
    {
        id:7,
        title: "Contra Mí",
        Author: "Ciri Lestany",
        cover: contraMi,
        tags: ["Distopía", "Acción", "Beat em up"],
        description: "La presidenta de la nación ha sido asesinada en un stream. Los asesinos, influencers de oficio, la mataron durante un directo. Entraron a su baño mientras defecaba y la balearon. Se llenaron de likes y visitas, pero el pandemonium que han desatado no tiene comparación histórica. La única forma de sobrevivir es llegar al sur, y para eso hay que sortear bandas de psicópatas, saqueos, rebeldes y cazadores de hombres."
    },
        
]