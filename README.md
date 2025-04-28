Funcionalidades
Consulta de CEP utilizando a AwesomeAPI CEP

Obtenção de previsão do tempo usando a Open-Meteo API

Exibição organizada das informações de endereço e clima

Interface responsiva e amigável

Tratamento de erros e feedback ao usuário

Pré-requisitos
Node.js (versão 16 ou superior)

npm ou yarn

Conta de desenvolvedor não é necessária (APIs públicas)

Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/cep-weather-app.git
cd cep-weather-app
Instale as dependências:

bash
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

bash
npm start
# ou
yarn start
A aplicação estará disponível em http://localhost:3000.

Estrutura do Projeto
src/
├── components/       # Componentes React
│   ├── AddressInfo.jsx  # Exibe informações de endereço
│   ├── WeatherInfo.jsx  # Exibe previsão do tempo
│   ├── CepForm.jsx      # Formulário de entrada de CEP
│   └── Loading.jsx      # Indicador de carregamento
├── services/         # Serviços de API
│   ├── cepService.js    # Serviço de consulta de CEP
│   └── weatherService.js # Serviço de previsão do tempo
├── App.js            # Componente principal
├── App.css           # Estilos principais
└── index.js          # Ponto de entrada da aplicação
Como usar
Na página inicial, digite um CEP válido (apenas números) no campo de entrada.

Clique em "Buscar" para enviar a requisição.

A aplicação irá:

Buscar informações de endereço na AwesomeAPI

Usar as coordenadas (latitude/longitude) para obter a previsão do tempo

Exibir ambas as informações em cards separados

APIs utilizadas
AwesomeAPI CEP
Endpoint: https://cep.awesomeapi.com.br/json/{cep}

Retorna informações completas de endereço a partir de um CEP

Documentação: https://cep.awesomeapi.com.br/

Open-Meteo Weather API
Endpoint: https://api.open-meteo.com/v1/forecast

Retorna dados meteorológicos atuais baseados em coordenadas geográficas

Documentação: https://open-meteo.com/

Personalização
Você pode personalizar a aplicação modificando:

Estilos: Edite o arquivo App.css ou adicione novos arquivos CSS

Componentes: Modifique os componentes em /components para alterar a aparência ou comportamento

Serviços: Ajuste os serviços em /services para mudar a lógica de chamada à API

Melhorias futuras
Adicionar histórico de consultas recentes

Implementar autocompletar para CEPs

Adicionar mais detalhes meteorológicos (previsão para próximos dias)

Internacionalização (i18n)

Testes unitários e de integração

Contribuição
Contribuições são bem-vindas! Siga os passos:

Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.
