import { useFetch } from "../hooks/useFetch";


const Card = () => {

  const { data, isLoading } = useFetch('https://hp-api.onrender.com/api/characters')

  return (
    <>
      {isLoading && <p className="loading">Carregando...</p>}

      {data.map(char => {
        return (
          <div className="card-char" key={char.id}>
            <img className="img-char" src={char.image === "" ? "nophoto.png" : char.image}></img>
            <p>Nome: {char?.name}</p>
            <p>Data de Nascimento: {char?.dateOfBirth?char.dateOfBirth:"desconhecido"}</p>
            <p>Casa: {char?.house?char.house:"desconhecida"}</p>
            <p>Patrono: {char?.patronus?char.patronus:"desconhecido"}</p>
            <p>Ator: {char?.actor?char?.actor:"desconhecido(a)"}</p>
            <p>Status: {char?.alive === true? "Vivo(a)" : "Morto(a)"}</p>
          </div>
        )
      })}

    </>
  )
}

export default Card;
