import { render } from "@testing-library/react";
import React from "react";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="mt-10">
        <Noticias></Noticias>  
      </div>
      <Footer></Footer>
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

class Footer extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <footer className="mt-12 border-t-2 border-gray-400 bg-gray-300 text-center w-full">
          <span class="text-center text-blue-600 font-sans font-medium">Jonatan Hartmann, 2023, todos os direitos reservados. Disponível em meu <a target="_blank" className="hover:text-blue-800 visited:text-blue-900" href="https://github.com/hartmannjonatan/News-API">GitHub</a>.</span>
      </footer>
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
      isError: null,
      perPage: 0,
      currentPage: 0,
      lastPage: true,
      firstPage: true
    }
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage(){
    this.setState(state=> ({
      currentPage: state.currentPage + 1
    }))
  }

  previousPage(){
    this.setState(state=> ({
      currentPage: state.currentPage - 1
    }))
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=br&pageSize=100&apiKey=e6f66d10a1ac4f669f92e6e447fe58f9').then(res => res.json()).then(
      (result) => {
        this.setState({
          noticias: result.articles,
          resultados: result.totalResults,
          isLoaded: true,
          isError: false,
          perPage: 10
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
          let noticias = this.state.noticias;

          let first = this.state.currentPage*this.state.perPage + 1;
          let last = first+this.state.perPage - 1 < this.state.resultados ? first+this.state.perPage - 1 : this.state.resultados;

          jsx = (
            <div class="flex flex-col items-center">
              <span class="text-sm text-gray-700">
                  Mostrando <span class="font-semibold text-gray-900">{first}</span> a <span class="font-semibold text-gray-900">{last}</span> de <span class="font-semibold text-gray-900">{this.state.resultados}</span> notícias.
              </span>
              <div class="inline-flex mt-2 xs:mt-0">
                <button onClick={this.previousPage} disabled={first == 1 ? true : false} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white disabled:text-gray-400 bg-blue-700 disabled:bg-blue-300 rounded-l enabled:hover:bg-blue-800">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                    Anterior
                </button>
                <button onClick={this.nextPage} disabled={last == this.state.resultados ? true : false} class="inline-flex items-center px-4 py-2 text-sm font-medium text-white disabled:text-gray-400 disabled:bg-blue-300 bg-blue-700 border-0 border-l border-blue-600 rounded-r hover:bg-blue-800">
                    Próximo
                    <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </div>
            </div>
          )
          
          for(let i = this.state.currentPage*this.state.perPage; i < this.state.perPage*this.state.currentPage+10; i++){
            if(i < this.state.resultados){
              let aux = (
                <a target="_blank" href={noticias[i].url}>
                  <div class="mt-3 p-6 max-w-5xl mx-auto bg-white hover:bg-white/0 transition-all ease-in-out delay-150 hover:border-2 hover:border-blue-700/80 rounded-xl shadow-lg flex items-center space-x-4">
                    <div class="shrink-0">
                      <img class="h-40" src={noticias[i].urlToImage != null ? noticias[i].urlToImage : "indisponivel.png"} alt="Imagem não encontrada."></img>
                    </div>
                    <div>
                      <h2 class="text-2xl font-medium text-black">{noticias[i].title} | {noticias[i].author != null ? noticias[i].author : "Autor indisponível"}</h2>
                      <p class="mt-3 text-slate-500 text-justify">{noticias[i].description}</p>
                    </div>
                  </div>
                </a>
              )
              jsx = [jsx, aux];
            }
          }

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
