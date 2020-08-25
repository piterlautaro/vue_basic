new Vue({
  el: '#app',
  
  data () {
    return {
    	courses: [],
    	title: '',
    	time: 0,
    }
  },
  
  computed: {
  	totalTime(){
  		let total = 0;
  		this.courses.forEach(function(course){
  			total = total + course.time;
  		});
  		return total;
  	}
  },
  
  methods: {
  	addCourse(){
  		if(this.title.trim() != '' && this.time){
  			this.courses.push({title: this.title, time: parseInt(this.time)});
  		}
  	}
  }
})