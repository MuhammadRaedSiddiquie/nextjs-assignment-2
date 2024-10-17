
import NavBar from "./components/Header/Navbar";
import Hero from "./components/Header/Hero/Hero";
import Footer from "./components/Header/Footer/Footer";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NextApp</title>
      </head>
      <body>
        <NavBar></NavBar>

        <Hero heading="Home page"></Hero>

        <Footer></Footer>


      </body>
    </html>
  );
}
