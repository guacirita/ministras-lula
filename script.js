function carregaDados(){
    let biografias = {
        bio01: { 
        nome: "Ana Moser - Ministra do Esporte", 
        imagem: "https://i.postimg.cc/9f5Np38d/Ana-Moser.png", 
        descricao: "Natural de Blumenau -SC, Ana foi atleta profissional de voleibol por 15 anos e chegou a jogar na seleção brasileira, onde conquistou a primeira medalha olímpica feminina no vôlei para o País. Além de ser medalhista, ela tem em seu currículo uma extensa lista de dedicação a projetos de gestão e políticas públicas na área do esporte. Em 2001, criou o Instituto Esporte e Educação, que atua com esporte educacional em comunidades de baixa renda, além de capacitar profissionais de Educação Física.", 
        citacao: "O esporte tem condição de impactar positivamente na educação, na saúde, na ocupação dos espaços públicos, na diminuição da violência. A primeira luta é trazer o esporte integrado a essas áreas", 
    },
    bio02: { 
    nome: "Anielle Franco - Ministra da Igualdade Racial", 
    imagem: "https://i.postimg.cc/RVvKxvhs/Anielle-Franco.jpg", 
    descricao: "Educadora, jornalista, escritora, feminista preta, mãe de meninas, doutoranda, diretora do Instituto Marielle Franco. <q>Cria da Maré</q>, como gosta de dizer, se referindo ao conjunto de comunidades na zona norte do Rio onde nasceu, Anielle tornou-se uma voz importante na luta pelos direitos das mulheres negras e periféricas, sobretudo depois que assumiu a diretoria do Instituto Marielle Franco, criado logo após o assassinato da irmã vereadora, em 2018, crime político que segue sem resolução até hoje.", 
    citacao: "Importante ressaltar que não adentro a equipe de transição sozinha, chego com o legado de Marielle e com a trajetória das mulheres negras. Isso mostra que somos muito maiores que qualquer discurso de ódio, desinformação e violências. Também é importante que nós, mulheres e pessoas negras, estejamos em todos os espaços de decisão de forma transversal. Somos qualificadas para estarmos em todos os ministérios e secretarias. Vamos construir o Brasil do futuro, da esperança para todas, todes e todos.", 
}, 
    bio03: { 
    nome: "Cida Gonçalves - Ministra das Mulheres", 
    imagem: "https://i.postimg.cc/g2TZhRDQ/Cida-Gon-alves.jpg", 
    descricao: "A ativista de defesa dos direitos das mulheres, natural de Campo Grande - MS, é formada em Publicidade e Propaganda e trabalha como consultora em políticas públicas em gênero e violência contra a mulher. Nos governos petistas de Lula e Dilma ela foi secretária nacional de enfrentamento à violência contra as mulheres. Especialista em gênero e em violência contra a mulher, Cida Gonçalves atuou na equipe de transição do governo que fez a análise e o diagnóstico com relação às políticas direcionadas às questões de gênero e que deverão ser colocadas em práticas com mais urgência pelo terceiro governo de Lula.", 
    citacao: "Vamos fazer uma radiografia, crítica e apurada, sobre o que temos e o que não temos no governo e no País para elaborar os programas. Estou segura e confiante. À medida que o tempo avança, o quadro se consolida com a constatação de que a democracia já está assegurada pelo voto popular", 
}, 
    bio04: { 
    nome: "Daniela Carneiro - Ministra do Turismo", 
    imagem: "https://i.postimg.cc/TwYSyz3T/Daniela-do-Waguinho.jpg", 
    descricao: "É pedagoga, já foi professora do ensino fundamental e trabalhou na Secretaria Municipal de Educação do Rio. Possui pós-graduação em Psicomotricidade pela Universidade Cândido Mendes.Ela também passou pela Secretaria de Assistência Social e Cidadania, também do Rio, e na Secretaria Municipal de Assistência Social e Cidadania de Belford Roxo.",
    citacao: "É muito emblemático que isso aconteça no momento em que o Ministério do Turismo complete neste mês 20 anos, criado pela primeira vez pelo governo Lula.", 
}, 
    bio05: { 
    nome: "Esther Dweck - Ministra da Gestão", 
    imagem: "https://i.postimg.cc/Kzzqct0z/Esther-Dweck.webp", 
    descricao: "Dweck, 44 anos, é professora de Economia da UFRJ (Universidade Federal do Rio de Janeiro). Durante o 1º governo de Dilma Rousseff, foi chefe da assessoria econômica do Ministério de Planejamento e Gestão. De 2015 a 2016, atuou como secretária de Orçamento Federal.Foi eleita a Mulher Economista de 2021 pelo Conselho Federal de Economia - Cofecon.", 
    citacao: "No Brasil, com um PIB relativamente baixo, a desindustrialização não foi fruto de um processo de aumento do setor de serviços de alta qualificação, mas da perda da indústria devido políticas públicas e competição internacional, por exemplo, o que não é um processo positivo. Aliás, é muito grave e gera problemas de garantia de bom desenvolvimento, impedindo principalmente a criação de empregos com bons salários e a distribuição de renda, além de gerar dependência externa.", 
}, 
    bio06: { 
    nome: "Luciana Santos - Ministra de Ciência e Tecnologia", 
    imagem: "https://i.postimg.cc/9M6nxrBQ/Lucian-Santos.jpg", 
    descricao: "Presidenta nacional do PCdoB, foi vice-governadora de Pernambuco. Formou-se em engenharia elétrica na Universidade Federal de Pernambuco. Em 1987, filiou-se ao Partido Comunista do Brasil - PCdoB e entre os anos de 1989 e 1991 foi vice-presidente regional da União Nacional dos Estudantes - UNE. 1996, assumiu deputada estadual, Em 1998, conseguiu novo mandato como deputada e na Assembleia Legislativa foi líder do PCdoB. Em 2000 foi eleita prefeita de Olinda - PE pelo PCdoB, sendo a primeira mulher dessa agremiação a assumir uma prefeitura. Foi reeleita em 2004. Em 2009, tornou-se vice-presidente do PCdoB. No mesmo ano, ao sair da prefeitura, foi nomeada pelo governador pernambucano Eduardo Campos (2007-2014), do PSB, secretária de Ciência, Tecnologia e Meio Ambiente. ", 
    citacao: "É uma honra muito grande assumir o Ministério de CT&I! Um trabalho que vou realizar com muito compromisso e com muita disposição. Depois de quatro anos de negacionismo, a Ciência vai voltar a ser prioridade nesse país.", 
}, 
    bio07: { 
    nome: "Margareth Menezes - Ministra da Cultura", 
    imagem: "https://i.postimg.cc/pTvHTGgZ/Margareth-Menezes.webp",
    descricao: "Margareth nasceu em 1962, em Salvador (BA). Iniciou a carreira como artista em 1980, no teatro. Lançou o seu primeiro álbum em 1988 e atualmente soma 14 discos lançados. Já recebeu várias indicações ao Grammy e conquistou dois troféus Caymmi e quatro troféus Dodô e Osmar. Em 2004, fundou a Associação Fábrica Cultural, destinada a combater o trabalho infantil, exploração sexual e violações de direitos. Margareth também dirige o Mercado Iaô, uma agência de produção cultural na Bahia, e é embaixadora da IOV-UNESCO, grupo que busca fomentar e preservar a produção cultural. Neste ano, foi eleita pela lista Most Influential People of African Descent como uma das pessoas negras mais influentes do mundo", 
    citacao: "A riqueza da nossa cultura alimenta a nossa alma e fortalece a nossa identidade como nação. A cultura reflete a força, a grandeza e a beleza do povo brasileiro. Vamos precisar de todo mundo!", 
}, 
    bio08: { 
    nome: "Marina Silva - Ministra do Meio Ambiente", 
    imagem: "https://i.postimg.cc/63JrgRFg/Marina-Silva.webp", 
    descricao: "Marina Silva é uma ambientalista e política brasileira. Deputada federal eleita pela Rede em São Paulo em 2022, ela obteve 237.526 votos e ficou em 13º lugar entre os candidatos à Câmara mais votados no estado. Antes, Marina foi ministra do Meio Ambiente, senadora, deputada estadual no Acre, seu estado natal, e vereadora em Rio Branco. Disputou por três vezes a Presidência da República, em 2010, 2014 e 2018. Em 2022, Marina se reconciliou politicamente com o ex-presidente Luiz Inácio Lula da Silva (PT), de quem foi ministra do Meio Ambiente, e já na campanha para o primeiro turno apoiou a candidatura do petista à Presidência.", 
    citacao: "A sociedade sabe que agora a prioridade é combater sem trégua o desmatamento criminoso para que se alcance o desmatamento zero. Não é algo que seja fácil, porque hoje nós temos uma situação incomparavelmente mais grave do que tínhamos em 2003, mas temos uma vantagem. Nós já temos uma experiência que deu certo.", 
}, 
    bio09: { 
    nome: "Nísia Trindade - Ministra da Saúde", 
    imagem: "https://i.postimg.cc/t48WnWRJ/N-sia-Trindade.jpg", 
    descricao: "Nísia Trindade é graduada em ciências sociais com doutorado em sociologia, e atua como pesquisadora da Fiocruz desde 1987, tendo ocupado cargos-chave dentro da fundação, como o posto de diretora da Casa de Oswaldo Cruz (1998-2005), e vice-presidente de Ensino, Informação e Comunicação da Fiocruz (2011-2016).Em 2017, chegou à presidência da instituição. Teve papel fundamental durante o enfrentamento da pandemia da Covid-19. Na ocasião, Nísia liderou a criação de um novo Centro Hospitalar no campus de Manguinhos (RJ), além de ter gerido o aumento da produção de kits para diagnóstico rápido da doença e processamento célere dos resultados das testagens. Ainda no âmbito da crise sanitária, a pesquisadora coordenou o acordo da Fiocruz de encomenda tecnológica. Em parceria com a AstraZeneca, a fundação se tornou a primeira no Brasil a produzir uma vacina contra a Covid 100% nacional, tendo fornecido ao Ministério da Saúde mais de 200 milhões de doses. O desempenho durante a pandemia levou Nísia a ser reconhecida pela Organização Mundial da Saúde (OMS).", 
    citacao: "Transformaram várias posições do Ministério da Saúde em uma agenda conservadora e negacionista da ciência. Nossa gestão será pautada pela ciência e pelo diálogo com a comunidade científica.", 
}, 
    bio10: { 
    nome: "Simone Tebet - Ministra do Planejamento e Orçamento", 
    imagem: "https://i.postimg.cc/MT9yT4n2/Simone-Tebet.jpg", 
    descricao: "Formada em Direito pela Universidade Federal do Rio de Janeiro (UFRJ) e mestre em Direito do Estado pela Pontifícia Universidade Católica de São Paulo (PUC-SP), Simone Tebet é natural de Três Lagoas (MS) e é fruto da política local. A senadora teve como principal auxiliador político o pai, Ramez Tebet, que foi governador do estado do Mato Grosso do Sul, prefeito de Três Lagoas e também senador da República. Antes de concorrer a um mandato eletivo, Tebet atuou por 12 anos como professora universitária em universidades diversas, como a Universidade Federal de Mato Grosso do Sul. Também foi consultora técnica jurídica e diretora técnica legislativa da Assembleia Legislativa do Mato Grosso do Sul. Tebet foi eleita primeiramente como deputada estadual do MS, onde atuou entre 2002 e 2004. Decidiu concorrer às eleições à Prefeitura de Três Lagoas em 2004, sendo a primeira mulher eleita para o cargo com cerca de 66% dos votos. Conseguiu a reeleição à Prefeitura em 2008. Nas eleições de 2010, foi eleita como vice-governadora do Mato Grosso do Sul na chapa de André Puccinelli (PMDB), cargo no qual permaneceu até 2015. Tebet saiu do Executivo estadual para assumir como senadora do Mato Grosso do Sul.", 
    citacao: "O que está em jogo é muito maior do que cada um de nós. Votarei com a minha razão de democrata e minha consciência de brasileira. Omitir-me seria trair minha trajetória de vida pública. Agora, não cabe a omissão da neutralidade.", 
}, 
    bio11: { 
    nome: "Sônia Guajajara - Ministra dos Povos Indígenas", 
    imagem: "https://i.postimg.cc/XJYjVDMC/S-nia-Guajajara.jpg", 
    descricao: "Sônia Guajajara nasceu na terra indígena de Araribóia, no estado do Maranhão, e faz parte do povo Guajajara/Tentehar. Por sua luta pelo reconhecimento dos direitos dos povos indígenas, em maio deste ano foi eleita pela revista Time como uma das 100 pessoas mais influentes do mundo. Filha de pais analfabetos, aos 15 anos de idade Sônia recebeu ajuda da Fundação Nacional do Índio (Funai) para poder cursar o ensino médio em Minas Gerais. A ativista é formada em Letras e Enfermagem pela Universidade Estadual do Maranhão (UEMA) e pós-graduada em Educação Especial. Guajajara ainda desempenha o papel de Coordenadora Executiva da APIB, finalizando o seu segundo mandato (2017/2022) e compõe o Conselho da Iniciativa Inter-religiosa pelas Florestas Tropicais do Brasil, iniciativa que integra um programa das Nações Unidas.     Em 2018, Sônia Guajajara foi a primeira indígena a compor uma chapa presidencial no Brasil. A ativista foi candidata à vice-presidente do país pelo PSOL, ao lado do agora também deputado federal eleito Guilherme Boulos. Nas eleições de outubro de 2022, a líder indígena teve mais de 150 mil votos válidos e foi eleita deputada federal por São Paulo. Em novembro, Guajajara esteve presente na COP-27 (Conferência do Clima da ONU), no Egito, ao lado de Marina Silva e Izabella Teixeira — representantes de organizações ambientalistas — e outras lideranças indígenas, e cobrou a criação do Ministério dos Povos Originários e maior participação dos indígenas no governo.", 
    citacao: "Sinto muito honrada e feliz com a nomeação de Ministra. Mais do que uma conquista pessoal, esta é uma conquista coletiva dos povos indígenas, um momento histórico de princípio de reparação no Brasil.", 
},
}

let content = document.getElementById("content");

    for (let bio in biografias) {
        content.innerHTML +=
            '<div class="card">' +
            '<img src="' +
           biografias[bio].imagem +
            '"/>' +
            "<details>" +
            "<summary>" +
           biografias[bio].nome +
            "</summary>" +
            "<p>" +
           biografias[bio].descricao +
            "</p>" +
            "<blockquote><q>" +
           biografias[bio].citacao +
            "</q></blockquote>" +
            "</details>" +
            "</div>";
    }

}

carregaDados();

