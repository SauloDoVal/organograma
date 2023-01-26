import './Banner.css'
// Pra puxar o CSS que a gente criou, metemos este import

function Banner() {
  // JSX: Isso é o que chamamos de JSX, esta é a forma como o React trabalha com a parte visual. Então isso parece um HTML, mas não é. O que o React vai fazer por debaixo nos panos é entender o que é isso e fazer o apende no DOM. É como se no modo clássico nós fizessos um document.createElement e criássemos o img e definíssemos o atributo src e o atributo alt. Então, o JSX é como o React lê isso e transforma em elementos no DOM. Ele parece HTML, mas não é, ele é JSX.

  // Não vamos usar a palavra class para chamar nosso banner no nosso " pedaço HTML" porque class é uma palavra reservada do JS e isso poderia dar conflito... dai o pq do ClassName.

  return (
    <header className="banner"> 
      <img
        src="imagens/banner.png "
        alt="O Banner principal da página do Organo"
      />
    </header>
  )
}

export default Banner
