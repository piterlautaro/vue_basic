new Vue({
	el: '#app',
	data(){
		return{
			name: 'Bitcoin',
			symbol: 'BTC',
			img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
			changePercent: 10,
			value: 0,
			color: 'F4F4F4',
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

	computed: {
		title(){
			return `${this.name} - ${this.symbol}`;
		},

		convertedValue(){
			if(!this.value){
				return 0;
			}
			return this.value / this.price;
		}
	},

	watch:{
		showPrices(newVal, oldVal){
			console.log(newVal, oldVal);
		}
	},

	methods: {
		toggleShowPrices(){
			this.showPrices = !this.showPrices;
			this.color = this.color.split('').reverse().join('');
		}	
	}
})