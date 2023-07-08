import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h2>Oшибка 404</h2>
      <p>{error?.message || "Неизвестная ошибка" }</p>
    </>
  )
}