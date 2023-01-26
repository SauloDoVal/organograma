import Colaborador from '../Colaborador'
import './Time.css'

const Time = props => {
  const css = { backgroundColor: props.corSecundaria }

  if (!props.colaboradores.length) {
    return ''
  }

  return (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(colaborador => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  )
}

export default Time

//Como as cores estão em uma variavel props eu não vou fazer isso via CSS, vou fazer via tag style, por aqui no index.js que o React consegue trabalhar... posso fazer isso via style={{borderColor: props.corPrimaria}} com duas } mesmo... ou posso botar em uma variavel, como no caso 1 com CSS...

//props.colaboradores.lenght > 0 &&<section className="time" style={css}>  Isso é uma reendenização condicional, se o lado esquerdo do && for true ele me retorna o lado direito
