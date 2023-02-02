import { render } from "@testing-library/react";
import React from "react";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="mt-10">
        <Noticias></Noticias>  
      </div>
    </div>
  );
}

class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <header className="mt-12">
          <h1 class="text-center text-blue-600 font-sans text-3xl font-medium">As principais notícias sobre o Brasil com a <a target="_blank" className="hover:text-blue-800 visited:text-blue-900" href="https://newsapi.org/">News API</a></h1>
      </header>
    )
  }
}

class Paginacao extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div class="flex flex-col items-center">
        <span class="text-sm text-gray-700">
            Mostrando <span class="font-semibold text-gray-900">1</span> a <span class="font-semibold text-gray-900">10</span> de <span class="font-semibold text-gray-900">{this.props.total}</span> notícias.
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
}

class Noticias extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      noticias: [],
      resultados: 0,
      isLoaded: false,
      isError: null
    }
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=e6f66d10a1ac4f669f92e6e447fe58f9').then(res => res.json()).then(
      (result) => {
        this.setState({
          noticias: result.articles,
          resultados: result.totalResults,
          isLoaded: true,
          isError: false
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          isError: error
        })
      }
    )
  }

  render(){
    let jsx = "";
    if(!this.state.isLoaded){
      jsx = (
        <div>
          <div class="mt-3 border shadow-lg rounded-md p-4 max-w-5xl w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="bg-gray-500 h-20 w-20"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-gray-500 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-gray-500 rounded col-span-2"></div>
                    <div class="h-2 bg-gray-500 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-gray-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mt-3 border shadow-lg rounded-md p-4 max-w-5xl w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="bg-gray-500 h-20 w-20"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-gray-500 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-gray-500 rounded col-span-2"></div>
                    <div class="h-2 bg-gray-500 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-gray-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mt-3 border shadow-lg rounded-md p-4 max-w-5xl w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="bg-gray-500 h-20 w-20"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-gray-500 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-gray-500 rounded col-span-2"></div>
                    <div class="h-2 bg-gray-500 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-gray-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else{
      if(!this.state.isError){
          this.state.noticias.forEach(noticia => {
              let aux = (
                <a target="_blank" href={noticia.url}>
                  <div class="mt-3 p-6 max-w-5xl mx-auto bg-white hover:bg-white/0 transition-all ease-in-out delay-150 hover:border-2 hover:border-blue-700/80 rounded-xl shadow-lg flex items-center space-x-4">
                    <div class="shrink-0">
                      <img class="h-40" src={noticia.urlToImage != null ? noticia.urlToImage : "indisponivel.png"} alt="Imagem não encontrada."></img>
                    </div>
                    <div>
                      <h2 class="text-2xl font-medium text-black">{noticia.title} | {noticia.author != null ? noticia.author : "Autor indisponível"}</h2>
                      <p class="mt-3 text-slate-500 text-justify">{noticia.description}</p>
                    </div>
                  </div>
                </a>
              )
              jsx = [jsx, aux];
          });
      } else{
        jsx = (
          <div class="mt-3 p-6 max-w-5xl mx-auto bg-red-50 rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
              <img class="h-20" src="error.png" alt="Erro"></img>
            </div>
            <div>
              <h2 class="text-2xl font-medium text-red-700">Erro ao conectar-se com a API</h2>
              <p class="mt-3 text-red-500 text-justify">Desculpe, não foi possível efetuar a conexão com a News API. Por favor, volte mais tarde!</p>
            </div>
          </div>
        )
      }
    }
    return (
      jsx
    )
  }
}

export default App;
