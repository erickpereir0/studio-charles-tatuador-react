const recurso = (nome) => import.meta.env.BASE_URL + 'recursos/' + nome;

export const NOME_ESTUDIO = 'Estúdio de Charles tatuador';

// Fotos fornecidas para a atividade. Os temas não atribuem autoria ou técnica.
export const CATEGORIAS_GALERIA = [
  {
    "valor": "personagens",
    "rotulo": "Personagens"
  },
  {
    "valor": "animais",
    "rotulo": "Animais"
  },
  {
    "valor": "humor",
    "rotulo": "Humor"
  },
  {
    "valor": "retratos",
    "rotulo": "Retratos"
  }
];

export const tatuagens = [
  {
    "id": "t01",
    "titulo": "Águia estilizada",
    "categoria": "animais",
    "rotuloCategoria": "Animais",
    "arquivo": "tatuagens/tatuagem-01.jpg",
    "largura": 728,
    "altura": 736,
    "descricaoAlternativa": "Foto de uma tatuagem colorida de uma águia na testa"
  },
  {
    "id": "t02",
    "titulo": "Ilusão com piercing",
    "categoria": "humor",
    "rotuloCategoria": "Humor",
    "arquivo": "tatuagens/tatuagem-02.png",
    "largura": 400,
    "altura": 600,
    "descricaoAlternativa": "Foto de uma tatuagem de rosto caricatural na barriga, com a boca integrada a um piercing"
  },
  {
    "id": "t03",
    "titulo": "Tigre em movimento",
    "categoria": "animais",
    "rotuloCategoria": "Animais",
    "arquivo": "tatuagens/tatuagem-03.jpg",
    "largura": 650,
    "altura": 1094,
    "descricaoAlternativa": "Foto de uma tatuagem de tigre em traços pretos no braço"
  },
  {
    "id": "t04",
    "titulo": "Tigre no peito",
    "categoria": "animais",
    "rotuloCategoria": "Animais",
    "arquivo": "tatuagens/tatuagem-04.jpg",
    "largura": 665,
    "altura": 862,
    "descricaoAlternativa": "Foto de uma tatuagem de tigre desenhada verticalmente no peito"
  },
  {
    "id": "t05",
    "titulo": "Bob Esponja",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-05.jpg",
    "largura": 736,
    "altura": 981,
    "descricaoAlternativa": "Foto de uma tatuagem em contorno do personagem Bob Esponja no braço"
  },
  {
    "id": "t06",
    "titulo": "Vault Boy criativo",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-06.jpg",
    "largura": 1365,
    "altura": 2048,
    "descricaoAlternativa": "Foto de uma tatuagem de personagem com pernas alongadas e uma cesta de basquete"
  },
  {
    "id": "t07",
    "titulo": "Dark Zera",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-07.jpg",
    "largura": 300,
    "altura": 420,
    "descricaoAlternativa": "Foto de uma tatuagem de fantasma estilizado com a inscrição Dark Zera"
  },
  {
    "id": "t08",
    "titulo": "Cortador de grama",
    "categoria": "humor",
    "rotuloCategoria": "Humor",
    "arquivo": "tatuagens/tatuagem-08.jpg",
    "largura": 288,
    "altura": 288,
    "descricaoAlternativa": "Foto de uma tatuagem de uma pessoa usando um cortador de grama na cabeça"
  },
  {
    "id": "t09",
    "titulo": "Onde está Wally?",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-09.webp",
    "largura": 583,
    "altura": 388,
    "descricaoAlternativa": "Foto de uma pequena tatuagem do personagem Wally junto à linha da cintura"
  },
  {
    "id": "t10",
    "titulo": "Salsicha estilizado",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-10.webp",
    "largura": 471,
    "altura": 504,
    "descricaoAlternativa": "Foto de uma tatuagem colorida de personagem estilizado com roupa verde e marrom"
  },
  {
    "id": "t11",
    "titulo": "Retrato com humor",
    "categoria": "retratos",
    "rotuloCategoria": "Retratos",
    "arquivo": "tatuagens/tatuagem-11.webp",
    "largura": 515,
    "altura": 566,
    "descricaoAlternativa": "Foto de uma tatuagem de rosto infantil em estilo caricatural"
  },
  {
    "id": "t12",
    "titulo": "Aranha em 3D",
    "categoria": "animais",
    "rotuloCategoria": "Animais",
    "arquivo": "tatuagens/tatuagem-12.webp",
    "largura": 591,
    "altura": 593,
    "descricaoAlternativa": "Foto de uma tatuagem de aranha ocupando a lateral do rosto e da cabeça"
  },
  {
    "id": "t13",
    "titulo": "Evolução dos primatas",
    "categoria": "humor",
    "rotuloCategoria": "Humor",
    "arquivo": "tatuagens/tatuagem-13.jpg",
    "largura": 457,
    "altura": 640,
    "descricaoAlternativa": "Foto de uma sequência de primatas tatuada na barriga"
  },
  {
    "id": "t14",
    "titulo": "Retrato no peito",
    "categoria": "retratos",
    "rotuloCategoria": "Retratos",
    "arquivo": "tatuagens/tatuagem-14.jpg",
    "largura": 400,
    "altura": 512,
    "descricaoAlternativa": "Foto de um retrato masculino tatuado no peito, com um olho integrado à anatomia do corpo"
  },
  {
    "id": "t15",
    "titulo": "Barbatana minimalista",
    "categoria": "animais",
    "rotuloCategoria": "Animais",
    "arquivo": "tatuagens/tatuagem-15.jpg",
    "largura": 1080,
    "altura": 1080,
    "descricaoAlternativa": "Foto de uma pequena tatuagem de barbatana em linhas pretas na lateral do corpo"
  },
  {
    "id": "t16",
    "titulo": "Sininho",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-16.jpg",
    "largura": 224,
    "altura": 225,
    "descricaoAlternativa": "Foto de uma tatuagem colorida de uma fada com asas azuis e vestido verde"
  },
  {
    "id": "t17",
    "titulo": "Unicórnio irreverente",
    "categoria": "humor",
    "rotuloCategoria": "Humor",
    "arquivo": "tatuagens/tatuagem-17.jpg",
    "largura": 495,
    "altura": 619,
    "descricaoAlternativa": "Foto de uma tatuagem de unicórnio em estilo de humor no tornozelo"
  },
  {
    "id": "t18",
    "titulo": "Cachorro estilizado",
    "categoria": "animais",
    "rotuloCategoria": "Animais",
    "arquivo": "tatuagens/tatuagem-18.jpg",
    "largura": 387,
    "altura": 516,
    "descricaoAlternativa": "Foto de uma tatuagem de cachorro com traços estilizados no braço"
  },
  {
    "id": "t19",
    "titulo": "Patrick na praia",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-19.jpg",
    "largura": 502,
    "altura": 611,
    "descricaoAlternativa": "Foto de uma tatuagem colorida de Patrick sobre uma concha diante do mar"
  },
  {
    "id": "t20",
    "titulo": "Pernalonga",
    "categoria": "personagens",
    "rotuloCategoria": "Personagens",
    "arquivo": "tatuagens/tatuagem-20.jpg",
    "largura": 700,
    "altura": 700,
    "descricaoAlternativa": "Montagem com uma tatuagem de Pernalonga no tronco e uma ampliação do desenho"
  }
].map((foto) => ({ ...foto, imagem: recurso(foto.arquivo) }));

export const tatuagemDestaque = tatuagens.find((tatuagem) => tatuagem.id === 't19');

export const artistas = [
  { id: 'charles', nome: 'Charles', iniciais: 'CT', estilo: 'Criação personalizada', descricao: 'Referências criativas, personagens e ideias pessoais para compor uma tatuagem com personalidade.' },
  { id: 'caio', nome: 'Caio Nunes', iniciais: 'CN', estilo: 'Preto sólido', descricao: 'Geometria, contraste e composições marcantes em tinta preta.' },
  { id: 'nina', nome: 'Nina Souza', iniciais: 'NS', estilo: 'Tradicional', descricao: 'Contornos definidos e desenhos inspirados na tatuagem tradicional.' },
];

export const perguntasFrequentes = [
  { id: 'orcamento', titulo: 'Como pedir um orçamento?', conteudo: 'Preencha seu nome, o estilo, o local do corpo e uma descrição da ideia. Nesta demonstração, o envio é simulado e nenhuma informação é enviada a um estúdio.' },
  { id: 'referencia', titulo: 'Posso levar uma referência?', conteudo: 'Sim. Uma referência ajuda a explicar sua ideia e pode servir como ponto de partida para uma criação autoral. No formulário, descreva os elementos de que você gosta.' },
  { id: 'primeira-sessao', titulo: 'Como funciona a primeira conversa?', conteudo: 'A proposta é conversar sobre estilo, tamanho, composição e localização da tatuagem. Os próximos passos e a disponibilidade seriam combinados diretamente com o estúdio.' },
  { id: 'estilo', titulo: 'Como encontrar uma inspiração?', conteudo: 'Explore a galeria pelos temas Personagens, Animais, Humor e Retratos. Você pode abrir cada fotografia em tamanho completo e descrever no formulário os elementos que gostaria de usar como referência.' },
];
