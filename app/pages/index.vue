<script setup lang="ts">

useSeoMeta({
  title: "Tayai.space | The best assistant you will ever need"
})

</script>

<template>
	<div class="homepage">
	  <section class="hero-text">
			<h1 class="main">The best assistant you will ever need</h1>
			<!-- <span>
			  Tay connects you the various areas of your life inorder to act as the best assistant you will ever need
			</span> -->
		</section>
	</div>
</template>

<style lang="scss" scoped>
.homepage {
  height: stretch;
  width: stretch;
  display: flex;
  padding: 25px;
  .hero-text {
    margin-top: 50px;
    display: flex;
    /* flex-direction: column; */
    row-gap: 10px;
    /* border: 1px solid white; */
    height: fit-content;
    width: stretch;
    align-items: start;
    justify-content: center;
    h1 {
      font-family: Spectral;
      font-size: 30px;
      font-style: normal;
      letter-spacing: -0.03em;
      font-weight: 500;
      margin: 0;
      line-height: 37px;
    }
    span {
     font-family: Spectral;
     font-size: 20px;
     font-style: normal;
     letter-spacing: -0.03em;
     font-weight: 300;
    }
  }
}
</style>