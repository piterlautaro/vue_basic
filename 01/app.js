// Las propiedades son valores que el componente padre envía al componente hijo
Vue.component('CoinDetail',{
	props: ['coin'],

	data (){
		return {
			showPrices: false,
			value: 0,
		}
	},

	methods:{
		toggleShowPrices(){
			this.showPrices = !this.showPrices;

			this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D');
		}
	},

	computed: {
		title(){
			return `${this.coin.name} - ${this.coin.symbol}`;
		},
		convertedValue(){
			if(!this.value){
				return 0;
			}
			return this.value / this.coin.price;
		}
	},

	template: `
	<div>
		<img
			v-on:mouseover="toggleShowPrices"
			v-on:mouseout="toggleShowPrices"
			v-bind:src="coin.img"
			v-bind:alt="coin.name"
			width="100">
		<h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'"> {{title}}
			<span v-if="coin.changePercent > 0">👍</span>
			<span v-else>👎</span>
			<span class="button" v-on:click="toggleShowPrices">{{showPrices ? '🙈' : '🐵'}}</span>
		</h1>
		<input type="number" v-model="value">
		<span>{{convertedValue}}</span>
		<ul v-show="showPrices">
			<li 
				v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }"
				v-for="(p, index) in coin.pricesWithDays" 
				v-bind:key="p.day">
				{{ index }} | <b> {{ p.day }} </b> - {{ p.value }}
			</li>
		</ul>
	</div>`
});

// Parent component
new Vue({
	el: '#app',
	data(){
		return{
			btc:{
				name: 'Bitcoin',
				symbol: 'BTC',
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
			},
			
			color: 'F4F4F4',
		}
	},

	// watch:{
	// 	showPrices(newVal, oldVal){
	// 		console.log(newVal, oldVal);
	// 	}
	// },

	methods: {
		updateColor(color){
			this.color = color || this.color.split('').reverse().join('');
		}	
	}
})