import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';
import Banner from 'componentes/Banner';
import { useFaviritoContext } from 'contextos/Favoritos';
import sytles from './Favoritos.module.css';

function Favoritos() {
  const { favorito } = useFaviritoContext();
  return (
    <>
    <Banner imagem="favoritos" />
      <Titulo>
        <h1>Videos favoritados</h1>
      </Titulo>
      <section className={sytles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}         
      </section>
    </>
  )
}

export default Favoritos;