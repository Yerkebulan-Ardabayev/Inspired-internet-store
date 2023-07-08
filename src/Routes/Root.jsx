import { Outlet } from "react-router-dom"
import { Header } from "../Componets/Header/Header"
import { Main } from "../Componets/Layout/Main/Main"
import { Footer } from "../Componets/Footer/Footer"

const list = [
  {
    link: 'women',
    title: 'Женщины',
    categories: [
      { link: 'bras', title: 'Бюстгальтеры' },
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
      { link: 'pajamas', title: 'Пижамы' },
    ],
  },
  {
    link: 'men',
    title: 'Мужчины',
    categories: [
      { link: 'panties', title: 'Трусы' },
      { link: 'socks', title: 'Носки' },
      { link: 'bathrobes', title: 'Халаты' },
      { link: 'thermal', title: 'Термобелье' },
    ],
  },
];

export const Root = () => {
  return (
    <>
      <Header list={list/>
      <Main>
        <Outlet/>
      </Main>
      <Footer list={list} />
    </>
  )
}