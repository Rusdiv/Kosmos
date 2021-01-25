import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from '@material-ui/icons/Telegram';

const sidebar = {
  title: "Описание",
  description: "Описания страницы , ну типо кто такие космонавты и т.п.",
  archives: [
    { title: "Вчера", url: "yesterday" },
    { title: "Сегодня", url: "today" },
    { title: "Завтра", url: "nextday" },
    { title: "Космонавты", url: "people" },
    { title: "Планеты", url: "planets" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon , url: 'https://github.com/Rusdiv'},
    { name: "Telegram", icon: TelegramIcon, text: '@Kiren79'},
  ],
};

const sidebarHook = (props) => {
  if (props === "people") {
    sidebar.title = "Космонавты";
    sidebar.description =
      "Космонавт — человек, проводящий испытания и эксплуатацию космической техники в космическом полёте";
  }
  if (props === "planets") {
    sidebar.title = "Планеты";
    sidebar.description =
      "Планета (др.-греч. πλανήτης, альтернати́вная фо́рма др.-греч. πλάνης — «странник») — небесное тело, вращающееся по орбите вокруг звезды или её остатков, достаточно массивное, чтобы стать округлым под действием собственной гравитации, но недостаточно массивное для начала термоядерной реакции, и сумевшее очистить окрестности своей орбиты от планетезималей";
  }
  if (props === "yesterday") {
    sidebar.title = "Освоение космоса";
    sidebar.description =
      " освоение (обживание, промышленное использование) человеком космического пространства и небесных тел с помощью космических аппаратов.";
  }
  if (props === "today") {
    sidebar.title = "Космическое пространство";
    sidebar.description =
      "относительно пустые участки Вселенной, которые лежат вне границ атмосфер небесных тел. Космос не является абсолютно пустым пространством: в нём есть, хотя и с очень низкой плотностью, межзвёздное вещество (преимущественно молекулы водорода), кислород в малых количествах (остаток после взрыва звезды), космические лучи и электромагнитное излучение, а также гипотетическая тёмная материя.";
  }
  return sidebar;
};

export default sidebarHook;
