var r2_root = self.location.pathname.split('/').slice(0, -2).join('/');

enyo.kind({
	name: 'Graph',
	kind: 'Scroller',
	style: 'background-color:#c0c0c0',
	components: [
		{tag: 'h2', content: 'Open graph', style: 'margin-left:10px;'},
		{kind: 'Group', classes: 'enyo-border-box group', defaultKind: 'onyx.Button', components: [
			{content: 'Basic blocks', classes: 'onyx-dark menu-button', ontap: 'openGraphBB' },
			{content: 'Callgraph', classes: 'onyx-dark menu-button', ontap: 'openGraphCG' }
		]}
	],
	openGraphBB: function() {
		window.open(r2_root + '/graph/', '_self');
	},
	openGraphCG: function() {
		window.open(r2_root + '/d3/', '_self');
	}
});
