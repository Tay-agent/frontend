<script setup lang="ts">

</script>

<template>
	<NuxtLink class="logo-wrapper" to="/">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" rx="12.5" fill="white"/>
      <g opacity="0.1" filter="url(#filter0_f_28_21)">
        <circle cx="24.5" cy="25.5" r="14.5833" fill="#121212"/>
      </g>
      <g opacity="0.05" filter="url(#filter1_f_28_21)">
        <circle cx="24.5" cy="25.5" r="17.5" fill="#121212"/>
      </g>
      <circle cx="24.5" cy="25.5" r="11.6667" fill="#121212"/>
      <defs>
        <filter id="filter0_f_28_21" x="8.91669" y="9.91669" width="31.1667" height="31.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_28_21"/>
        </filter>
        <filter id="filter1_f_28_21" x="6" y="7" width="37" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_28_21"/>
        </filter>
      </defs>
    </svg>
	</NuxtLink>
</template>

<style lang="scss" scoped>
.logo-wrapper {
  text-decoration: none;
}
</style>