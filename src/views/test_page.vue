<template>
	<div>{{message}}</div>
	<div>{{fans}}</div>
</template>
<script>
	export default{
		message : "hello world",
		fans : null,
		computed : {
			expr : function(){
				return this.message + ", no, hello xingmo"
			}	
		},
		watch : {
			message : function(val){
				this.fans = val
			}
		}
	}
</script>