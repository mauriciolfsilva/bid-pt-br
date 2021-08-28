Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'bid-pt-br',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
