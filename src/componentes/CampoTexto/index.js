// no lugar de fazer uma função, vamos criar uma constante.
import './CampoTexto.css'

const CampoTexto = props => {
  const placeholderModificada = `${props.placeholder}...` // Para fazer interpolação, vamos trabalhar como se fosse JS, fiz isso para add os 3 pontos

  //let valor = 'banana'

 //ISSO DAQUI NÃO TEM QUE ESTAR AQUI... ISSO VAI LA PRA BAIXO NO PROPS//const [valor, setValor] = useState('Banana ') //Um hook é um gancho. É algo que o React nos entrega para que seja possível manter um estado dentro de uma função. O hook que vamos usar aqui é o useState. Sempre que encontrarem um o use, saibam que é um hook. O React já importa ele direto. O useState será uma string vazia '', queremos usar um estado de uma string que é um valor digitado no input. Porém, queremos guardar uma referência para ele. Ele vai nos retornar dois valores, o valor em si e uma função que é nosso setter. Quando queremos alterar esse valor, vamos chamar essa função, não podemos alterar o valor direto por atribuição. Então temos as variáveis valor e setValor.

// Normalmente usaríamos let valor = '', mas aqui usamos esse useState porque ele prepara uma pseudo variável, um objeto para ler e um para escrever, que é o setter. Dessa forma, se chamarmos pela setter, ele passa por uma séries de hooks, filtros, desparos do React para participar de seu ciclo de vida interno. 


  // const aoDigitado = evento => {
  //   setValor(evento.target.value)
  //   console.log(valor) // Isso vai gravar toda letra que eu digitar...
  // }

  const aoDigitado = evento => {
    props.aoAlterado(evento.target.value)
  } // Estamos elevando o estado, o CampoTexto está delegando o controle do estado para quem for usá-lo, ele em si não vai controlar seu própio estado. Mas para isso funcionar precisamos passar para o CampoTexto por meio de parâmetros o valor, que deve ser um state, e uma função que se chama aoAlterado



  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value = {props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  )
}

export default CampoTexto
