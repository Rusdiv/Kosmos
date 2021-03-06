const mainFeaturedPost = {
  title: "Большое название )",
  description:
    "Текст про что-то бла бла бла бла бла бла бла бла бла бла бла бла",
  image: "https://source.unsplash.com/random/?Galaxy,stars,blackHole",
  imgText: "main image description",
  linkText: "Продолжить чтение...",
};

const mainPostHook = (props) => {
  if (props === "people") {
    mainFeaturedPost.title = "Юрий Алексеевич Гагарин";
    mainFeaturedPost.description =
      " советский космонавт, первый человек, побывавший в космосе";
    mainFeaturedPost.fullDescription = `лётчик-космонавт СССР, Герой Советского Союза, кавалер высших знаков отличия ряда государств, почётный гражданин многих российских и зарубежных городов.Перейти к разделу «Почётные звания и награды»
    Полковник ВВС СССР (1963), военный лётчик 1-го класса, заслуженный мастер спорта СССР (1961), член ЦК ВЛКСМ, депутат Верховного Совета СССР 7-го и 8-го созывов.
    12 апреля 1961 года Юрий Гагарин стал первым человеком в мировой истории, совершившим полёт в космическое пространство. Ракета-носитель «Восток» с кораблём «Восток-1», на борту которого находился Гагарин, была запущена с космодрома Байконур, расположенного в Кызыл-Ординской области Казахстана. После 108 минут полёта Гагарин успешно приземлился в Саратовской области, неподалёку от Энгельса. 12 апреля 1961 года, день полёта Юрия Гагарина в космос был объявлен праздником — Днём космонавтики.Перейти к разделу «Полёт»
    Первый космический полёт вызвал большой интерес во всём мире, а сам Юрий Гагарин превратился в мировую знаменитость. По приглашениям зарубежных правительств и общественных организаций он посетил около 30 стран.Перейти к разделу «Зарубежные визиты» Также у первого космонавта было много поездок и внутри Советского Союза. В последующие годы Гагарин вёл большую общественно-политическую работу, окончил Военно-воздушную инженерную академию имени профессора Н. Е. Жуковского, работал в Центре подготовки космонавтов и готовился к новому полёту в космос.`;
    mainFeaturedPost.image =
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Yuri_Gagarin_and_Zakaria_Mohieddin_05-02-1962_Cairo_Almaza_Air_Base_Egypt.jpg";
  }
  if (props === "planets") {
    mainFeaturedPost.title = "Земля";
    mainFeaturedPost.description =
      "третья по удалённости от Солнца планета Солнечной системы";
    mainFeaturedPost.fullDescription = `Научные данные указывают на то, что Земля образовалась из солнечной туманности около 4,54 миллиарда лет назад Перейти к разделу «История Земли» и вскоре после этого обрела свой единственный естественный спутник — Луну. Жизнь, предположительно, появилась на Земле примерно 4,25 млрд лет назад, то есть вскоре после её возникновенияПерейти к разделу «Возникновение жизни». С тех пор биосфера Земли значительно изменила атмосферу и прочие абиотические факторы, обусловив количественный рост аэробных организмов, а также формирование озонового слоя, который вместе с магнитным полем Земли ослабляет вредную для жизни солнечную радиацию, тем самым сохраняя условия существования жизни на Земле. Радиация, обусловленная самой земной корой, со времён её образования значительно снизилась благодаря постепенному распаду радионуклидов, содержавшихся в ней. Кора Земли разделена на несколько сегментов, или тектонических плит, которые движутся по поверхности со скоростями порядка нескольких сантиметров в год. Изучением состава, строения и закономерностей развития Земли занимается наука геология`;
    mainFeaturedPost.image =
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Africa_and_Europe_from_a_Million_Miles_Away.png";
  }
  if (props === "yesterday") {
    mainFeaturedPost.title = "«Восток-1»";
    mainFeaturedPost.description =
      " космический корабль из серии «Восток», первый космический аппарат, поднявший человека на околоземную орбиту.";
    mainFeaturedPost.fullDescription = `Масса аппарата — 4,725 т;
    Диаметр герметичного корпуса — 2,2 м;
    Длина (без антенн) — 4,4 м;
    Максимальный диаметр — 2,43 м.
    В мае 1959 года по инициативе заместителя Председателя Совета Министров СССР, председателя Комиссии Президиума Совета Министров СССР по военно-промышленным вопросам Д. Ф. Устинова было принято решение Совета Министров СССР об утверждении разработки пилотируемого комплекса «Восток».
    
    Участие СССР в космической гонке привело к тому, что при создании корабля был выбран ряд неоптимальных, но зато простых и быстро осуществимых решений[4]. Некоторые компоненты создать вовремя не успели, в результате пришлось отказаться от системы аварийного спасения на старте и системы мягкой посадки корабля. Кроме того, из конструкции строящегося корабля была убрана дублирующая тормозная установка. Последнее решение было обосновано тем, что при запуске корабля на низкую 180-200-километровую орбиту он в любом случае в течение 10 суток сошёл бы с неё вследствие естественного торможения о верхние слои атмосферы и вернулся бы на Землю. На эти же 10 суток рассчитывались и системы жизнеобеспечения`;
    mainFeaturedPost.image =
      "https://knowhistory.ru/sites/default/files/styles/cover/public/images/journal/cover/3476-4068.jpg?itok=HWx5cSFg";
  }
  if (props === "today") {
    mainFeaturedPost.title =
      "Space Exploration Technologies Corporation (SpaceX) ";
    mainFeaturedPost.description =
      "американская компания, производитель космической техники.";
    mainFeaturedPost.fullDescription = `Штаб-квартира — в городе Хоторн, Калифорния, США. Основана в 2002 году прежним акционером PayPal и CEO Tesla Motors Илоном Маском с целью сократить расходы на полёты в космос и для открытия пути к колонизации Марса.
        Компания разработала ракеты-носители Falcon 1, Falcon 9 и Falcon Heavy, с самого начала преследуя цель сделать их многоразовыми, и космический корабль Dragon (выводимый на орбиту теми же Falcon 9), предназначенный для пополнения запасов на Международной космической станции. 30 мая 2020 года состоялся первый пилотируемый запуск пассажирской версии корабля Dragon V2, предназначенной для транспортировки астронавтов на МКС. С 2015 года участвует также в реализации проекта вакуумного поезда Hyperloop[⇨].
        С целью контроля над качеством и стоимостью разработки, производство и испытания большинства компонентов продукции производится с опорой на внутренние ресурсы, включая ракетные двигатели Merlin, Kestrel, Draco и SuperDraco, используемые на ракетах-носителях Falcon и корабле Dragon.`;
    mainFeaturedPost.image =
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/SpaceX_Headquarters%2C_Hawthorne%2C_CA.jpg";
  }
  if (props === "nextday") {
    mainFeaturedPost.title = `Колонизация Марса`;
    mainFeaturedPost.description = `В силу относительно небольшого расстояния до нашей планеты и природных характеристик, Марс, наряду с Луной является самым вероятным кандидатом на основание колонии людей в обозримом будущем. `;
    mainFeaturedPost.fullDescription = `В качестве целей колонизации Марса называются следующие:
    Создание постоянной базы для научных исследований самого Марса и его спутников, в перспективе — для изучения, а также, возможно, и колонизации пояса астероидов (в том числе добычи полезных ископаемых на них) и дальних планет Солнечной Системы.
    Промышленная добыча ценных полезных ископаемых. С одной стороны, Марс может оказаться достаточно богат минеральными ресурсами, причём из-за отсутствия свободного кислорода в атмосфере возможно наличие на нём богатых месторождений самородных металлов: меди, железа, вольфрама, рения, урана, золота; и сама добыча этих элементов может проходить гораздо плодотворнее, чем на Земле, так как, например, благодаря отсутствию биосферы и высокому фону излучения можно широкомасштабно применять термоядерные заряды для вскрытия рудных тел. С другой стороны, на текущий момент стоимость доставки грузов и организации добычи в агрессивной среде настолько велика, что никакое богатство месторождений не обеспечит окупаемости добычи, по крайней мере быстрой[1].
    Решение демографических проблем Земли
    Создание «Колыбели Человечества» на случай глобального катаклизма на Земле.
    Таким образом, на текущий момент и ближайшее будущее актуальна только первая цель. Ряд энтузиастов идеи колонизации Марса считает, что при больших первоначальных затратах на организацию колонии в перспективе, при условии достижения высокой степени автономии и организации производства части материалов и предметов первой необходимости (прежде всего — кислород, вода, продукты питания) из местных ресурсов, этот путь ведения исследований окажется в целом экономически эффективнее, чем отправка возвращаемых экспедиций или создание станций-поселений для работы вахтовым методом. Кроме того, в перспективе Марс может стать удобным полигоном для проведения масштабных научных и технических экспериментов, опасных для земной биосферы.`;
    mainFeaturedPost.image =
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Possible_exploration_of_the_surface_of_Mars.jpg";
  }
  return mainFeaturedPost;
};

export default mainPostHook;
