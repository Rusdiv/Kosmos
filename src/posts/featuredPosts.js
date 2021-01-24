let featuredPosts = [];

export default function featuredPostsHook(props) {
  if (props === "people") {
    featuredPosts = [
      {
        title: "Алексей Архипович Леонов",
        date: "Янв 24",
        description:
          "лётчик-космонавт СССР № 11, первый человек, вышедший в открытый космос.",
        fullDescription: `лётчик-космонавт СССР № 11, первый человек, вышедший в открытый космос. Дважды Герой Советского Союза (1965, 1975), генерал-майор авиации (1975), лауреат Государственной премии СССР (1981), член Высшего совета партии «Единая Россия» (2002—2019).`,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/Alexei_Leonov.jpg",
        imageText: "Алексей Архипович Леонов",
      },
      {
        title: "Валентина Владимировна Терешкова",
        date: "Янв 24",
        description: "лётчик-космонавт СССР, первая в мире женщина-космонавт",
        fullDescription: `Депутат Верховного Совета СССР VII—XI созывов (1966—1989), член Президиума Верховного Совета СССР (1974—1989). Глава Комитета советских женщин (1968—1987) и Союза советских обществ дружбы и культурной связи с зарубежными странами (1987—1992).

        Российский политик, депутат Государственной думы Российской Федерации, член Высшего совета партии «Единая Россия». В марте 2020 года предложила вызвавшую большой резонанс поправку к Конституции РФ, которая позволила действующему президенту России Владимиру Путину ещё дважды претендовать на пост президента.`,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4a/Valentina_Tereshkova_%282017-03-06%29.jpg",
        imageText: "Валентина Владимировна Терешкова",
      },
    ];
  }
  return featuredPosts;
}