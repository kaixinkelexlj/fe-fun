<template>
	<div id="test">
		<input v-model="message" placeholder="edit me">
		<div>{{message}}</div>
		<div>{{expr}}</div>
		<div>{{fans}}</div>
		<ul id="example-1">
		  <li v-for="item in items">
		    {{ item.message }}
		  </li>
		</ul>
	</div>
</template>
<script>
	export default ({
		data : function() {
			return {
				message : "hello world",
				fans : null,
				items: [
			      { message: 'Foo' },
			      { message: 'Bar' }
			    ]
			}
		},
		computed : {
			expr : function(){
				return this.message + ", no, hello xingmo"
			}	
		},
		watch : {
			message : function(val){
				this.fans = "your fans:" + val
			}
		}
	})
</script>