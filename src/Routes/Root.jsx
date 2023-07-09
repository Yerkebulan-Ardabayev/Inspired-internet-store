import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { Main } from "../Components/Layout/Main/Main"
import { Footer } from "../Components/Footer/Footer"

// const list = [
//   {
//     link: 'women',
//     title: 'Женщины',
//     categories: [
//       { link: 'bras', title: 'Бюстгальтеры' },
//       { link: 'panties', title: 'Трусы' },
//       { link: 'socks', title: 'Носки' },
//       { link: 'bathrobes', title: 'Халаты' },
//       { link: 'thermal', title: 'Термобелье' },
//       { link: 'pajamas', title: 'Пижамы' },
//     ],
//   },
//   {
//     link: 'men',
//     title: 'Мужчины',
//     categories: [
//       { link: 'panties', title: 'Трусы' },
//       { link: 'socks', title: 'Носки' },
//       { link: 'bathrobes', title: 'Халаты' },
//       { link: 'thermal', title: 'Термобелье' },
//     ],
//   },
// ];

export const Root = () => {
  return (
    <>
      <Header  />
      <Main>
        <Outlet/>
      </Main>
      <Footer />
    </>
  )
}