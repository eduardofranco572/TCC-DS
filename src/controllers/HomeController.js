const SerpApi = require('google-search-results-nodejs');
const { differenceInMinutes, format } = require('date-fns');
const ultimaAtualizacao = undefined ?? Date.now();
var dadosEnviados = false;

class HomeController {
  static index(_req, res) {
    return res.render("home")
  }

  static buscaDados(req, res) {
    const { nome } = req.session.usuario;
    const dataAtual = Date.now();
    const atualizacao = format(ultimaAtualizacao, "HH:mm");


    if (dadosEnviados == false || differenceInMinutes(dataAtual, ultimaAtualizacao) >= 30) {
      dadosEnviados = true;
      const search = new SerpApi.GoogleSearch("36882d91d3ec14f3514c5b613fa94bc526e78997b110d4bba49d7dec30683702");

      const config = {
        engine: "google_maps_reviews",
        data_id: "0x94c856f0dd034083:0x9a3c1f8c167a3ac1",
        sort_by: "newestFirst",
        hl: "pt-pt"
      };

      const buscaDadosApi = () => {
        return new Promise((resolve) => search.json(config, resolve))
      }

      const pegaResultados = async () => {
        const todasReviews = {
          reviews: [],
        };
        while (true) {
          const resultadoJson = await buscaDadosApi();
          if (!todasReviews.placeInfo) todasReviews.placeInfo = resultadoJson.place_info;
          if (resultadoJson.reviews) todasReviews.reviews.push(...resultadoJson.reviews);
          else break;
          if (resultadoJson.serpapi_pagination?.next_page_token) {
            config.next_page_token = resultadoJson.serpapi_pagination?.next_page_token;
          }
          else break;
        }
        return todasReviews;
      };

      pegaResultados().then((dados) => {
        dados.ultimaAtualizacao = atualizacao
        dados.nome = nome

        // Mudar depois
        return res.status(200).json({ dados: dados });
        // return res.status(401).json({ dados: { mensagem: "Nada de novo por aqui", ultimaAtualizacao: atualizacao } });
      })

    }
    else return res.status(401).json({ dados: { mensagem: "Nada de novo por aqui", ultimaAtualizacao: atualizacao, nome: nome } });
  }

}



module.exports = HomeController;