export interface IContent {
    id: string;
    photoUrl: string;
    title: string;
    description: string;
  }
  
  export const fakeData: IContent[] = [
    {
      id: '1',
      photoUrl: 'https://abcine.org.br/content/uploads/2024/09/aindaestouaqui-1160x680.jpg',
      title: 'Ainda estou aqui, o fenômeno do cinema brasileiro que fez história no Globo de Ouro',
      description: 'Uma história verdadeira. O filme, baseado na autobiografia de um filho do Paiva, conta a história da perspectiva de sua mãe. Ele começou a escrevê-lo quando percebeu que tanto Eunice, que sofria de Alzheimer, quanto o Brasil estavam começando a cair no esquecimento.'
    },
    {
      id: '2',
      photoUrl: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/11/24111821/Selton-Mello-compartilha-fotos-dos-bastidores-de-Ainda-Estou-Aqui-5.jpg',
      title: 'Brasil que nunca havia sido premiado pela Academia de Hollywood em quase cem anos.',
      description: 'O Brasil pôde saborear na noite de domingo um daqueles triunfos doces e planetários que o futebol uma vez lhes deu. O cineasta Walter Salles Ainda Estou Aqui foi coroado o melhor filme internacional no Oscar em uma vitória histórica para o Brasil, que nunca havia sido premiada pela Academia de Hollywood em quase cem anos.'
    },
    {
      id: '3',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Walter_Salles_in_2024.jpg/800px-Walter_Salles_in_2024.jpg',
      title: 'Quem é Walter Salles?',
      description: 'Walter Moreira Salles Júnior (Rio de Janeiro, 12 de abril de 1956) é um diretor e produtor brasileiro. Figura importante do Cinema de Retomada no Brasil, Salles é amplamente considerado um dos maiores cineastas brasileiros de todos os tempos. Entre seus reconhecimentos, seus filmes ganharam um Oscar, três prêmios no Festival de Cannes, três prêmios no Festival de Veneza, dois British Academy Film Awards, um Urso de Ouro e um Globo de Ouro, além de outras três indicações ao Oscar.'
    },
    
    
    
];