<template>
    <div class="wrapper">
		<p>report</p>
		<div class="" style="width: 200px; height: 300px; border: 2px red">

		</div>
		<router-link class="" to="/">Landing</router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
		mounted () {
			console.log("loading")
		}
        methods: {
            // fetchEntries () {
            //     this.$http.post('',)
            //     .then(response => {
            //         console.log(response)
            //     }, response => {
			// 		console.log(response)
            //     })
            // }
        }
    }
</script>

<style scoped>
	p {
		color: black;
	}
</style>
