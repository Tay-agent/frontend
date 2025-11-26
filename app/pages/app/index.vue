<script setup lang="ts">
import { Camera, Settings2 } from 'lucide-vue-next';

useSeoMeta({
  title: "Tayai.space | Chat with tay"
})

definePageMeta({
  layout: "",
  title: "Tayai.space | Chat with tay"
})

</script>

<template>
	<div class="app">
	  <div class="menu-options">
			<button class="option">
			  <Settings2 
					:size="24"
				  color="#121212"
					:stroke-width="1.5"
					class="option-icon"
				/>
			</button>
			<button class="option">
			  <Camera 
					:size="24"
				  color="#121212"
					:stroke-width="1.5"
					class="option-icon"
				/>
			</button>
		</div>
		<div class="assistant-container">
		  <div class="assist-mock"></div>
			<span>Could you check my email for me?</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  width: stretch;
  height: 100vh;
  padding: 40px;
  column-gap: 20px;
  @include responsive(mobile) {
    flex-direction: column-reverse;
    /* border: 1px solid blue; */
    column-gap: 0px;
    height: 100%;
    .menu-options {
      /* order: 1; */
      width: stretch;
      height: fit-content;
      align-items: center;
      justify-content: space-between;
    }
  }
  .menu-options {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    height: fit-content;
    @include responsive(mobile) {
      flex-direction: row;
    }
    button {
      all: unset;
      cursor: pointer;
      width: 44px;
      height: 44px;
      background: rgba(217, 217, 217, 0.4);
      border: 1px solid rgba(217, 217, 217, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
  .assistant-container {
    height: stretch;
    /* border: 1px solid black; */
    width: stretch;
    display: flex;
    row-gap: 80px;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    @include responsive(mobile) {
      margin-top: 5%;
    }
    .assist-mock {
      all: unset;
      cursor: pointer;
      margin-top: 30px;
      width: 350px;
      height: 350px;
      background: #121212;
      border-radius: 50%;
      @include responsive(mobile) {
        width: 325px;
        height: 325px;
      }
    }
    span {
      font-size: 32px;
      width: 400px;
      text-align: center;
      font-weight: 500;
      letter-spacing: -0.03em;;
    }
  }
}
</style>