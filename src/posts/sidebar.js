import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const sidebar = {
  title: "Описание",
  description: "Описания страницы , ну типо кто такие космонавты и т.п.",
  archives: [
    { title: "Вчера", url: "#" },
    { title: "Сегодня", url: "#" },
    { title: "Завтра", url: "#" },
    { title: "Космонавты", url: "#" },
    { title: "Планеты", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
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
  return sidebar;
};

export default sidebarHook;
