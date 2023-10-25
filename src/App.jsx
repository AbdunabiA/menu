import Menu from "components/menu"
import Header from "components/header"
import { useTranslation } from "react-i18next";


function App() {
  const { i18n } = useTranslation();
  if (i18n.language == "ru-RU") {
    i18n.changeLanguage("ru");
  }

  return (
    <>
      <Header/>
      <main>
        <Menu/>
      </main>
    </>
  )
}

export default App
