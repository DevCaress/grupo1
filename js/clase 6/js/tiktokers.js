var tiktokers = [
    {
        name: 'luis angel',
        stars: 10,
        type: 'Frio/ADA',
        info: 'Este mosntruo de angular, se alimenta de JavaScript, su debilidad son los corridos tumbados',
        atk: 1200,
        def: 900,
        img: 'IMG-20211005-WA0001.jpg',
    },
    {
        name: 'Daniel',
        stars: 10,
        type: 'Bestia Divina / Efecto',
        info: 'Alias Dev Caress no puede ser invocado de modo especial. Requiere 3 sacrificios de desarrolladores, su debilidad es PHP',
        atk: 3200,
        def: 200,
        img: 'IMG-20211005-WA0003.jpg'
    },
    {
        name: "KaoLo",
        stars: 7,
        type: "Especialista / Normal",
        info: "Experta en horóscopos, habilidad sobre humana para el baile, debilidad maquetación en HTML",
        atk: 2500,
        def: 2200,
        img: 'IMG-20211005-WA0005.jpg'
    },
    {
        name: 'Cesar García',
        stars: 1,
        type: '[Demonio / Efecto ]',
        info: 'Alias Cesar Código Bits, habilidad experto en wordpress y en wix, debilidad la chancla, este demonio es hermano de Kuriboh',
        atk: 300,
        def: 200,
        img: 'IMG-20211005-WA0008.jpg'
    },
    {
        name: 'Gerardo Schekaiban',
        stars: 5,
        type: 'Guerrero/Fusion',
        info: 'Poder especial "Yo soy tu amigo fiel de la programacion" aumenta el poder de tus otros programadores en el campo de batalla, debilidad Andy',
        atk: 1800,
        def: 1200,
        img: 'IMG-20211005-WA0011.jpg'
    },
    {
        name: 'Carlita M.F. Román',
        stars: 6,
        type: '[Especialista / Efecto]',
        info: 'Evangelizar a otros programadores al muno de la IA, por cada programador evangelizado Carlita.py aumenta 100 ATK, debilidad por las cumbias mexicanas',
        atk: 2000,
        def: 1700,
        img: 'IMG-20211005-WA0019.jpg'
    },
    {
        name: 'Edrissi Machorro',
        stars: 7,
        type: 'Dragon/Fusión',
        info: 'Habilidad dormir, y hacerle broma a Cesar Código Bits, cuando está carta en juego junto con la de Cesar García, Cesar García pierde 100 ATK',
        atk: 2400,
        def: 200,
        img: 'IMG-20211005-WA0024.jpg'
    },
    {
        name: 'arelis reyes',
        stars: 8,
        type: 'dragon',
        info: 'Alias Chica Python, habilidad dar consejos de programación y evangelizar con su fuego de dragon.py debilidad Maeva',
        atk: 3000,
        def: 2500,
        img: 'IMG-20211005-WA0028.jpg'
    },
    {
        name: 'francisco jiménez',
        stars: 2,
        type: 'Lanzador de conjuros / Efecto',
        info: 'Alias Pamsho.dev hsbilidad maestro en las artes místicas de JavaScript y sacar tiempo para redes sociales, stream, trabajar y estudiar pero además tener pareja, debilidad la vacuna del covid',
        atk: 500,
        def: 400,
        img: 'IMG-20211005-WA0033.jpg'
    },
    {
        name: 'toledo floang',
        stars: 12,
        type: 'Bestía Divina/EFECTO',
        info: 'Alias: Ingesaurio. Habilidad especial: Dañar libros de ingeniería y dar consejos de ingenieria. En cada ronda aumenta 500ATK.',
        atk: 4000,
        def: 4000,
        img: 'IMG-20211005-WA0042.jpg'
    },
    {
        name: 'stefan castillo',
        stars: 10,
        type: 'Hechicero/EFECTO',
        info: 'Hbailidad para las artes oscuras del CSS mágico. Habilidad especial: Logos con CSS. Debilidad: Usar JavaScript le quita 100 ATK',
        atk: 2200,
        def: 2000,
        img: 'IMG-20211005-WA0044.jpg'
    },
    {
        name: "Maeva Mazadiego",
        stars: 12,
        type: "Hechicero / Efecto",
        info: "Alias Mae, habilidad seriedad absoluta divina, cuando se encuentra en el juego Chica Python Maeva obtiene 1000 ATK",
        atk: 3200,
        def: 3000,
        img: 'IMG-20211005-WA0047.jpg'
    },
    {
        name: 'jessica azcona',
        stars: 9,
        type: 'hechicera',
        info: 'Hablilidad magia antigua que es capaz de borrar cuentas de github, debilidad C, C++',
        atk: 1200,
        def: 900,
        img: 'IMG-20211005-WA0052.jpg'
    },
    {
        name: 'david corteza',
        stars: 12,
        type: 'Bestia/Divino',
        info: 'Habilidad hacer carnitas asadas, habiliad especial titktok geniales de risa, debilidad el hermano de Kuriboh le resta la mitad de DEF y ATK',
        atk: 4000,
        def: 4000,
        img: 'IMG-20211005-WA0053.jpg'
    },
    {
        name: 'Rodo Ferro',
        stars: 12,
        type: ' Mona China / Synchro / Effect ',
        info: 'Habilidad sobre humana para generación de monas chinas para atacar con su ejército, si en el campo de batalla se encuentra Carlita.py evangelizan el doble de rápido al mundo del IA, debilidad el hermano de Kuriboh',
        atk: 3000,
        def: 2500,
        img: 'IMG-20211005-WA0065.jpg'
    },
    {
        name: 'joss pelcastre',
        stars: 8,
        type: 'Metal/Efect',
        info: 'Habilidad divina de charla astral, especial hackear Facebook de tu ex, si se encuentra al hermano de Kuriboh se igualan sus ATK y DEF',
        atk: 1900,
        def: 1400,
        img: 'IMG-20211005-WA0066.jpg'
    },
    {
        name: 'david portilla',
        stars: 8,
        type: 'Mona China / Metal / Efect',
        info: 'Alias el Frontend Mecatronico Habilidad especial jugar pokimon con el Rodo Ferro y sus monas chinas, si en el campo se encuentra a Pamsho.dev incrementa ambos su poder con esteroides a 2500 ATK y DEF',
        atk: 1900,
        def: 1900,
        img: 'IMG-20211005-WA0068.jpg'
    },
    {
        name: 'MaybeMar',
        stars: 12,
        type: 'Frio/ADA',
        info: 'MaybeMAr eres la mejor programadora del mundo 🙂 aparte estas demasiado hermosa, todo eso acampañado de una hermosa carita de angel',
        atk: 5000,
        def: 5000,
        img: 'IMG-20211005-WA0070.jpg'
    },
];