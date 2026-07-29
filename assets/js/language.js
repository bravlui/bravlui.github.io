(function () {
	'use strict';

	var translations = {
		en: {
			title: 'Luiz Bravo | Statistics, AI & Information Retrieval',
			description: 'Luiz Bravo is a Computer Science researcher working at the intersection of statistics, artificial intelligence, information retrieval, graph neural networks, and deep metric learning.',
			ogDescription: 'Research on similarity, context, uncertainty, and relationships in intelligent systems.',
			switcherLabel: 'Language selection',
			items: [
				['#intro .eyebrow', 'Statistics · Artificial Intelligence · Complex Networks'],
				['#intro > p:not(.eyebrow)', 'I investigate how uncertainty, graphs, and nature-inspired algorithms can improve semantic spaces—<br class="desktop-only"> producing better solutions at a lower cost.'],
				['#intro .button', 'Explore my work'],
				['#nav .links li:nth-child(1) a', 'About'],
				['#nav .links li:nth-child(2) a', 'Research'],
				['#nav .links li:nth-child(3) a', 'Projects'],
				['#nav .links li:nth-child(4) a', 'Writing'],
				['#nav .links li:nth-child(5) a', 'Contact'],
				['#about .section-label', 'About me'],
				['#about h2', 'Between statistical rigor<br>and the search for simpler solutions'],
				['#about .major p:nth-of-type(1)', "I am a Master's student in Computer Science at São Paulo State University (UNESP) and hold a Bachelor's degree in Statistics and Data Science from the University of São Paulo (USP)."],
				['#about .major p:nth-of-type(2)', 'My research seeks to improve semantic spaces by combining probability, graphs, heuristics, and metaheuristics. I am interested in how these tools can better represent similarities, relationships, and uncertainty—and how computationally simpler solutions can outperform more complex approaches.'],
				['#about img', 'Portrait of Luiz Bravo', 'alt'],
				['#about .question-grid', 'Research questions', 'aria-label'],
				['#about .question-grid p:nth-child(1)', 'How can uncertainty be represented in predominantly deterministic deep learning models?'],
				['#about .question-grid p:nth-child(2)', 'How can properties of complex networks and dynamical processes make GNNs more interpretable?'],
				['#about .question-grid p:nth-child(3)', 'How can nature-inspired algorithms simplify the solution of complex problems?'],
				['#about .question-grid p:nth-child(4)', 'When do continuous approaches offer better solutions to discrete information retrieval and ranking problems?'],
				['#research .section-label', 'Research interests'],
				['#research header h2', 'Problems that<br>guide my work'],
				['#research article:nth-child(1) h3', 'Probabilistic Deep Metric Learning'],
				['#research article:nth-child(1) p', 'Developing loss functions that combine contextual similarity, uncertainty estimation, and probabilistic reasoning for image retrieval and representation learning.'],
				['#research article:nth-child(2) h3', 'Graph Neural Networks'],
				['#research article:nth-child(2) p', 'Studying graph-based approaches for scientific image classification and complex relational data.'],
				['#research article:nth-child(3) h3', 'Information Retrieval'],
				['#research article:nth-child(3) p', 'Investigating ranking optimization, contextual similarity, pseudo relevance feedback, and retrieval effectiveness.'],
				['#research article:nth-child(4) h3', 'Network Science'],
				['#research article:nth-child(4) p', 'Exploring graph sampling, structural preservation, and how network properties relate to machine learning performance.'],
				['#projects .section-label', 'Selected work'],
				['#projects h2', 'Featured projects'],
				['.portfolio-list article:nth-child(1) .project-field', 'Information Retrieval · Fairness'],
				['.portfolio-list article:nth-child(1) h3', 'Query Fairness Estimation Under Demographic Data Scarcity'],
				['.portfolio-list article:nth-child(1) > p', "Experimental pipeline evaluating Query Fairness Estimation methods (Naive@k, CC, PACC, KDEy) under low availability of demographic labels, extending Jaenich et al. (2026) to correction pools of 100–10,000 labeled documents over 162,200 documents and 25 queries from trec-fair/2022. Proposes dRAE, a rank-discounted extension of RAE, and shows that recalibrating the sensitive-attribute classifier via temperature scaling cuts KDEy's error from 0.792 to 0.094."],
				['.portfolio-list article:nth-child(2) .project-field', 'Computer Vision · GNNs'],
				['.portfolio-list article:nth-child(2) h3', 'Microfossil Identification using AI'],
				['.portfolio-list article:nth-child(2) > p', 'Research developed in partnership between UNESP and PETROBRAS, applying Computer Vision and Graph Neural Networks to the automatic classification of microfossils in scientific imaging.'],
				['.portfolio-list article:nth-child(3) .project-field', 'Network Science'],
				['.portfolio-list article:nth-child(3) h3', 'Graph Sampling — Preserving Network Structure Under Subsampling'],
				['.portfolio-list article:nth-child(3) > p', 'Systematic study of six network sampling methods across three classic synthetic graph models (Erdős–Rényi, Barabási–Albert, Watts–Strogatz) and two network sizes, evaluating how well each method preserves the original topology using KL, JS, Wasserstein, and KS distance metrics. Coursework for Complex Networks and Dynamic Processes (ICMC-USP).'],
				['.portfolio-list article:nth-child(4) .project-field', 'Deep Learning · Full-stack'],
				['.portfolio-list article:nth-child(4) h3', 'Predictive Maintenance Chatbot'],
				['.portfolio-list article:nth-child(4) > p', "Full-stack project combining a FastAPI backend, a Next.js frontend, and a machine learning training pipeline into an intelligent chatbot for predictive maintenance analysis. Coursework for the Deep Learning discipline of UNESP's Graduate Program in Computer Science."],
				['.portfolio-list article:nth-child(5) .project-field', 'Statistics · Data Mining'],
				['.portfolio-list article:nth-child(5) h3', 'Statistical Data Mining'],
				['.portfolio-list article:nth-child(5) > p', 'Coursework for SME0878 — Statistical Data Mining (USP), applying statistical data mining techniques to a real dataset.'],
				['.portfolio-list .button', 'View on GitHub'],
				['.portfolio-more a', 'See all projects on GitHub →'],
				['#writing .section-label', 'Essays and reflections'],
				['#writing h2', 'Ideas between<br>science and society'],
				['#writing div > p', 'I write about questions that emerge both within and beyond research: philosophy, sociology, science, and the ways knowledge, technology, and society transform one another.'],
				['#writing .button', 'Read on Medium'],
				['#writing li:nth-child(1)', 'Science and Society'],
				['#writing li:nth-child(2)', 'Philosophy of Technology'],
				['#writing li:nth-child(3)', 'Power and Social Structures'],
				['#writing li:nth-child(4)', 'Knowledge and Authorship'],
				['#writing li:nth-child(5)', 'Adaptation and Change'],
				['#technologies-title', 'Technologies'],
				['#contact .section-label', 'Contact'],
				['#contact h2', "Let's connect"],
				['#contact > p', 'I am always interested in thoughtful conversations about research, collaboration, and ideas that cross disciplinary boundaries.'],
				['#contact .button', 'Connect on LinkedIn'],
				['#footer .contact > section:nth-child(1) h3', 'Based in'],
				['#footer .contact > section:nth-child(1) p', 'São Paulo, Brazil'],
				['#footer .contact > section:nth-child(2) h3', 'Profiles'],
				['#copyright li:nth-child(2)', 'Design adapted from <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>']
			]
		},
		pt: {
			title: 'Luiz Bravo | Estatística, IA e Recuperação de Informação',
			description: 'Luiz Bravo é pesquisador em Ciência da Computação e atua na interseção entre estatística, inteligência artificial, recuperação de informação, redes neurais de grafos e aprendizado profundo de métricas.',
			ogDescription: 'Pesquisa sobre similaridade, contexto, incerteza e relações em sistemas inteligentes.',
			switcherLabel: 'Seleção de idioma',
			items: [
				['#intro .eyebrow', 'Estatística · Inteligência Artificial · Redes Complexas'],
				['#intro > p:not(.eyebrow)', 'Investigo como incerteza, grafos e algoritmos inspirados na natureza podem aprimorar espaços semânticos —<br class="desktop-only"> produzindo soluções melhores com menor custo.'],
				['#intro .button', 'Conheça meu trabalho'],
				['#nav .links li:nth-child(1) a', 'Sobre'],
				['#nav .links li:nth-child(2) a', 'Pesquisa'],
				['#nav .links li:nth-child(3) a', 'Projetos'],
				['#nav .links li:nth-child(4) a', 'Textos'],
				['#nav .links li:nth-child(5) a', 'Contato'],
				['#about .section-label', 'Sobre mim'],
				['#about h2', 'Entre o rigor estatístico<br>e a busca por soluções mais simples'],
				['#about .major p:nth-of-type(1)', 'Sou mestrando em Ciência da Computação pela Universidade Estadual Paulista (UNESP) e bacharel em Estatística e Ciência de Dados pela Universidade de São Paulo (USP).'],
				['#about .major p:nth-of-type(2)', 'Minha pesquisa busca aprimorar espaços semânticos combinando probabilidades, grafos, heurísticas e meta-heurísticas. Interessa-me entender como essas ferramentas podem representar melhor similaridades, relações e incertezas — e como soluções computacionalmente mais simples podem superar abordagens mais complexas.'],
				['#about img', 'Retrato de Luiz Bravo', 'alt'],
				['#about .question-grid', 'Questões de pesquisa', 'aria-label'],
				['#about .question-grid p:nth-child(1)', 'Como representar a incerteza em modelos de deep learning predominantemente determinísticos?'],
				['#about .question-grid p:nth-child(2)', 'Como propriedades de redes complexas e processos dinâmicos podem tornar as GNNs mais interpretáveis?'],
				['#about .question-grid p:nth-child(3)', 'Como algoritmos inspirados na natureza podem simplificar a solução de problemas complexos?'],
				['#about .question-grid p:nth-child(4)', 'Quando abordagens contínuas oferecem melhores soluções para problemas discretos de recuperação de informação e ranqueamento?'],
				['#research .section-label', 'Interesses de pesquisa'],
				['#research header h2', 'Problemas que<br>orientam meu trabalho'],
				['#research article:nth-child(1) h3', 'Aprendizado Profundo Probabilístico de Métricas'],
				['#research article:nth-child(1) p', 'Desenvolvimento de funções de perda que combinam similaridade contextual, estimação de incerteza e raciocínio probabilístico para recuperação de imagens e aprendizado de representações.'],
				['#research article:nth-child(2) h3', 'Redes Neurais de Grafos'],
				['#research article:nth-child(2) p', 'Estudo de abordagens baseadas em grafos para classificação de imagens científicas e dados relacionais complexos.'],
				['#research article:nth-child(3) h3', 'Recuperação de Informação'],
				['#research article:nth-child(3) p', 'Investigação de otimização de ranqueamento, similaridade contextual, realimentação por pseudorrelevância e efetividade da recuperação.'],
				['#research article:nth-child(4) h3', 'Ciência de Redes'],
				['#research article:nth-child(4) p', 'Exploração de amostragem de grafos, preservação estrutural e da relação entre propriedades de redes e o desempenho de aprendizado de máquina.'],
				['#projects .section-label', 'Trabalhos selecionados'],
				['#projects h2', 'Projetos em destaque'],
				['.portfolio-list article:nth-child(1) .project-field', 'Recuperação de Informação · Equidade'],
				['.portfolio-list article:nth-child(1) h3', 'Estimação de Equidade em Consultas com Escassez de Dados Demográficos'],
				['.portfolio-list article:nth-child(1) > p', 'Pipeline experimental que avalia métodos de estimação de equidade em consultas (Naive@k, CC, PACC e KDEy) sob baixa disponibilidade de rótulos demográficos. O estudo estende Jaenich et al. (2026) para conjuntos de correção de 100 a 10.000 documentos rotulados, em uma coleção de 162.200 documentos e 25 consultas do trec-fair/2022. Propõe o dRAE, uma extensão do RAE com desconto por posição, e mostra que recalibrar o classificador de atributo sensível por temperature scaling reduz o erro do KDEy de 0,792 para 0,094.'],
				['.portfolio-list article:nth-child(2) .project-field', 'Visão Computacional · GNNs'],
				['.portfolio-list article:nth-child(2) h3', 'Identificação de Microfósseis com IA'],
				['.portfolio-list article:nth-child(2) > p', 'Pesquisa desenvolvida em parceria entre UNESP e PETROBRAS, aplicando Visão Computacional e Redes Neurais de Grafos à classificação automática de microfósseis em imagens científicas.'],
				['.portfolio-list article:nth-child(3) .project-field', 'Ciência de Redes'],
				['.portfolio-list article:nth-child(3) h3', 'Amostragem de Grafos — Preservação da Estrutura de Redes em Subamostras'],
				['.portfolio-list article:nth-child(3) > p', 'Estudo sistemático de seis métodos de amostragem em três modelos clássicos de grafos sintéticos (Erdős–Rényi, Barabási–Albert e Watts–Strogatz) e dois tamanhos de rede. Avalia a preservação da topologia original por meio das métricas de distância KL, JS, Wasserstein e KS. Trabalho da disciplina Redes Complexas e Processos Dinâmicos (ICMC-USP).'],
				['.portfolio-list article:nth-child(4) .project-field', 'Aprendizado Profundo · Full-stack'],
				['.portfolio-list article:nth-child(4) h3', 'Chatbot de Manutenção Preditiva'],
				['.portfolio-list article:nth-child(4) > p', 'Projeto full-stack que integra backend em FastAPI, frontend em Next.js e um pipeline de treinamento de aprendizado de máquina em um chatbot inteligente para análise de manutenção preditiva. Trabalho da disciplina de Aprendizado Profundo do Programa de Pós-Graduação em Ciência da Computação da UNESP.'],
				['.portfolio-list article:nth-child(5) .project-field', 'Estatística · Mineração de Dados'],
				['.portfolio-list article:nth-child(5) h3', 'Mineração Estatística de Dados'],
				['.portfolio-list article:nth-child(5) > p', 'Trabalho da disciplina SME0878 — Mineração Estatística de Dados (USP), aplicando técnicas estatísticas de mineração a um conjunto de dados real.'],
				['.portfolio-list .button', 'Ver no GitHub'],
				['.portfolio-more a', 'Ver todos os projetos no GitHub →'],
				['#writing .section-label', 'Ensaios e reflexões'],
				['#writing h2', 'Ideias entre<br>ciência e sociedade'],
				['#writing div > p', 'Escrevo sobre as inquietações que surgem dentro e fora da pesquisa: filosofia, sociologia, ciência e as formas como conhecimento, tecnologia e sociedade se transformam mutuamente.'],
				['#writing .button', 'Ler no Medium'],
				['#writing li:nth-child(1)', 'Ciência e sociedade'],
				['#writing li:nth-child(2)', 'Filosofia da tecnologia'],
				['#writing li:nth-child(3)', 'Poder e estruturas sociais'],
				['#writing li:nth-child(4)', 'Conhecimento e autoria'],
				['#writing li:nth-child(5)', 'Adaptação e mudança'],
				['#technologies-title', 'Tecnologias'],
				['#contact .section-label', 'Contato'],
				['#contact h2', 'Vamos conversar'],
				['#contact > p', 'Tenho sempre interesse em conversas relevantes sobre pesquisa, colaboração e ideias que atravessam fronteiras disciplinares.'],
				['#contact .button', 'Conectar no LinkedIn'],
				['#footer .contact > section:nth-child(1) h3', 'Localização'],
				['#footer .contact > section:nth-child(1) p', 'São Paulo, Brasil'],
				['#footer .contact > section:nth-child(2) h3', 'Perfis'],
				['#copyright li:nth-child(2)', 'Design adaptado de <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>']
			]
		}
	};

	function setLanguage(language) {
		var selected = translations[language] ? language : 'en';
		var content = translations[selected];

		document.documentElement.lang = selected === 'pt' ? 'pt-BR' : 'en';
		document.title = content.title;
		document.querySelector('meta[name="description"]').setAttribute('content', content.description);
		document.querySelector('meta[property="og:title"]').setAttribute('content', content.title);
		document.querySelector('meta[property="og:description"]').setAttribute('content', content.ogDescription);
		document.querySelector('.language-switcher').setAttribute('aria-label', content.switcherLabel);

		content.items.forEach(function (item) {
			var elements = document.querySelectorAll(item[0]);
			elements.forEach(function (element) {
				if (item[2]) {
					element.setAttribute(item[2], item[1]);
				} else {
					element.innerHTML = item[1];
				}
			});
		});

		document.querySelectorAll('.language-switcher button').forEach(function (button) {
			var active = button.getAttribute('data-lang') === selected;
			button.setAttribute('aria-pressed', active ? 'true' : 'false');
		});

		try {
			window.localStorage.setItem('preferred-language', selected);
		} catch (error) {
			// Language selection still works when storage is unavailable.
		}
	}

	var savedLanguage;
	try {
		savedLanguage = window.localStorage.getItem('preferred-language');
	} catch (error) {
		savedLanguage = null;
	}

	var initialLanguage = savedLanguage || (/^pt\b/i.test(window.navigator.language || '') ? 'pt' : 'en');
	setLanguage(initialLanguage);

	document.querySelectorAll('.language-switcher button').forEach(function (button) {
		button.addEventListener('click', function () {
			setLanguage(button.getAttribute('data-lang'));
		});
	});
}());
