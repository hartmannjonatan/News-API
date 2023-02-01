function App() {
  return (
    <div>
      <Header></Header>
      <div className="mt-10">
        <Noticia link="https://www.tmz.com/2023/02/01/nba-youngboy-mormonism-billboard-married-music-streaming/" title="Bitcoin sobe 5,5% para $ 19897 - Reuters" author="Reuters" descricao="Bitcoin subiu 5,54% para $ 19.897 às 22:13 GMT na sexta-feira, adicionando $ 1.044 ao seu fechamento anterior." img="https://www.reuters.com/resizer/x2f-ufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg"></Noticia>
        <Noticia link="https://www.tmz.com/2023/02/01/nba-youngboy-mormonism-billboard-married-music-streaming/" title="Bitcoin sobe 5,5% para $ 19897 - Reuters" author="Reuters" descricao="Bitcoin subiu 5,54% para $ 19.897 às 22:13 GMT na sexta-feira, adicionando $ 1.044 ao seu fechamento anterior." img="https://www.reuters.com/resizer/x2f-ufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg"></Noticia>
      </div>
    </div>
  );
}

function Header(){
  return (
    <header className="mt-12">
        <h1 class="text-center text-blue-600 font-sans text-3xl font-medium">As principais notícias sobre o Brasil com a <a target="_blank" className="hover:text-blue-800 visited:text-blue-900" href="https://newsapi.org/">News API</a></h1>
    </header>
  )
}

function Pagination(props) {
    return (
    <div class="flex flex-col items-center">
      <span class="text-sm text-gray-700">
          Mostrando <span class="font-semibold text-gray-900">1</span> a <span class="font-semibold text-gray-900">10</span> de <span class="font-semibold text-gray-900">{props.total}</span> notícias.
      </span>
      <div class="inline-flex mt-2 xs:mt-0">
        <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-l hover:bg-blue-800">
            <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
            Anterior
        </button>
        <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 border-0 border-l border-blue-600 rounded-r hover:bg-blue-800">
            Próximo
            <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
    )
}

function Noticia(props){
    return (
      <a target="_blank" href={props.link}>
        <div class="mt-3 p-6 max-w-5xl mx-auto bg-white hover:bg-white/0 transition-all ease-in-out delay-150 hover:border-2 hover:border-blue-700/80 rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-40" src={props.img} alt="Imagem disponibilizada pela notícia"></img>
          </div>
          <div>
            <h2 class="text-2xl font-medium text-black">{props.title} | {props.author}</h2>
            <p class="mt-3 text-slate-500 text-justify">{props.descricao}</p>
          </div>
        </div>
      </a>
    )
}

export default App;
