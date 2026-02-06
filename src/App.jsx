import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import Footer from "./assets/components/Footer";

// header links
const headerLinks = [
  { url: "#", text: "CHARACTERS" },
  { url: "#", text: "COMICS" },
  { url: "#", text: "MOVIES" },
  { url: "#", text: "TV" },
  { url: "#", text: "GAMES" },
  { url: "#", text: "COLLECTIBLES" },
  { url: "#", text: "VIDEOS" },
  { url: "#", text: "FANS" },
  { url: "#", text: "NEWS" },
  { url: "#", text: "SHOP" },
];

export default function App() {
  return (
    <>
      <Header links={headerLinks} />
      <Main />
      <Footer />
    </>
  );
}
