<template>
	<div id="test">
		<input v-model="message" placeholder="edit me">
		<div>{{message}}</div>
		<div>{{expr}}</div>
		<div>{{fans}}</div>
	</div>
</template>
<script>
	export default ({
		data : function() {
			return {
				message : "hello world",
				fans : null
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