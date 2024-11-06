# RAIZ & RITMO

Raiz e Ritmo é um aplicativo móvel que simula um sistema de aluguel de músicas, onde os usuários podem explorar músicas, pacotes e gerenciar sua lista de desejos. O aplicativo foi desenvolvido com o objetivo de aprendizado de desenvolvimento mobile, utilizando React Native para o frontend.

- Link do repositório: [TEF STYLE - REPOSITÓRIO](https://github.com/igoorsr/raizeritmo)
- App para Fins Educacionais: O aplicativo é um projeto desenvolvido para aprendizado e demonstração de conceitos de desenvolvimento mobile.

## Indíce
- Visão Geral
- Funcionalidades
- Tecnologias Utilizadas
- Instalação e Uso
- Estrutura do Projeto
- Licença

### Visão Geral

O Raiz e Ritmo é um aplicativo mobile que ensina fundamentos musicais de forma interativa, com recursos de áudio, listas de músicas, pacotes educativos, e um perfil de usuário. O app conta com uma navegação por abas, possibilitando ao usuário explorar diversas funcionalidades de forma intuitiva.

### Funcionalidades
- Lista de Desejos: O usuário pode adicionar músicas e pacotes aos seus itens desejados.
- Música e Áudio: O app oferece a reprodução de músicas educacionais com controle de áudio.
- Página Sobre: Exibe informações sobre o aplicativo e seus desenvolvedores.

### Tecnologias Utilizadas
- Frontend: React Native
- Backend: Node.js (não fornecido neste repositório, mas mencionado como parte do app)
- Bibliotecas Principais:
  - @expo-google-fonts/montserrat: Para fontes personalizadas no app.
  - react-navigation: Para navegação entre telas com abas (bottom tabs).
  - react-native-vector-icons: Para ícones no aplicativo.
  - expo-av: Para funcionalidades de áudio, permitindo tocar músicas.

### Instalação e Uso

#### Pré-requisitos
- Node.js e npm ou yarn instalados.
- Expo CLI instalado globalmente.
- Um dispositivo ou emulador para testar o app.

#### Passo a Passo para Rodar o Projeto Localmente

1. Clone o repositório
```bash
   git clone https://github.com/igoorsr/raizeritmo
```

2. Backend
- Instale as dependências:
```bash
cd raizeritmo
npm install
```

- Inicie o App:
```bash
npm start
```

3. Abra o aplicativo no seu dispositivo ou emulador:
- Se você estiver utilizando o Expo Go, escaneie o QR code fornecido pelo terminal para abrir o app no dispositivo.
- Caso esteja utilizando um emulador, ele será aberto automaticamente ou apertando a tecla A.

### Estrutura do Projeto

#### Estrutura do Diretório

```bash
raizeritmo/
├── .expo/                  # Arquivos temporários do Expo
├── assets/                 # Imagens e outros recursos estáticos
├── node_modules/           # Dependências do projeto
├── src/
│   ├── componentes/        # Componentes reutilizáveis
│   │   ├── Botao.js        # Botão customizado
│   │   ├── CardMusica.js   # Cartão de música
│   │   └── Texto.js        # Componente de texto estilizado
│   ├── mocks/              # Dados simulados para músicas e produtos
│   │   ├── musicas.js      # Lista de músicas
│   │   ├── produtos.js     # Produtos simulados
│   │   └── sobre.js        # Informações sobre o app
│   └── telas/              # Páginas principais do app
│       ├── ListaDesejos/   # Tela de lista de desejos
│       ├── Musica/         # Tela de músicas
│       ├── Pacote/         # Tela de pacotes educacionais
│       ├── Perfil/         # Tela de perfil do usuário
│       └── Sobre/          # Tela sobre o app
├── .gitignore              # Arquivos a serem ignorados no git
├── app.js                  # Arquivo principal de configuração do app
├── app.json                # Configurações do Expo
├── babel.config.js         # Configurações do Babel
├── package-lock.json       # Dependências do projeto
├── package.json            # Metadados do projeto
└── README.md               # Documentação do projeto

```

### Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE).
