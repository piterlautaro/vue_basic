new Vue({
	el: '#app',
	data(){
		return{
			name: 'Bitcoin',
			img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
			changePercent: 10,
			price: 8200,
			pricesWithDays: [
				{day: 'Lunes', value: 8400},
				{day: 'Martes', value: 7900},
				{day: 'Miércoles', value: 8200},
				{day: 'Jueves', value: 9000},
				{day: 'Viernes', value: 9100},
				{day: 'Sábado', value: 6000},
				{day: 'Domingo', value: 6300},
			],

			showPrices: false,
		}
	},

	methods: {
		toggleShowPrices(){
			this.showPrices = !this.showPrices;
		}	
	}
})