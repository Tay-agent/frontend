<script setup lang="ts">

</script>

<template>
	<div class="mainlayout">
		<nav class="nav">
		  <div class="logo-text">
				<Logo />
				<div class="text">
				  <span class="main">Tay</span>
					<span class="clarity">by Clarity0</span>
				</div>
			</div>
			<div class="ctas">
			  <NuxtLink class="login-link" to="/login">
					<span class="login-text">Log in</span>
				</NuxtLink>
				<NuxtLink class="signup-link" to="/signup">
				  <span class="signup-text">Get Started</span>
				</NuxtLink>
			</div>
		</nav>
		<NuxtPage />
		<footer></footer>
	</div>
</template>

<style lang="scss" scoped>
.mainlayout {
  height: 100vh;
  width: stretch;
  background: #121212;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #FFFFFF;
  nav {
    display: flex;
    /* border: 1px solid white; */
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
    /* position: fixed; */
    /* top: 10px; */
    width: stretch;
    height: fit-content;
    padding: 5px 25px;
    .logo-text {
      display: flex;
      align-items: center;
      column-gap: 10px;
      .text {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        span {
          font-family: Spectral;
          font-size: 18px;
          line-height: 20px;
          font-weight: 700;
          font-style:normal;
          letter-spacing: -0.03em;
        }
        .clarity {
          color: #D9D9D9;
          opacity: 0.7;
        }
      }
      .logo {
        height: 50px;
        width: 50px;
      }
    }
    .ctas {
      display: flex;
      align-items: center;
      column-gap: 30px;
      .login-link {
        text-decoration: none;
        color: #FFFFFF;
        user-select: none;
        .login-text {
          /* font-family: Space Grotesk, ui-sans-serif, -apple-system, system-ui, sans-serif; */
          font-weight: 600;
          font-size: 16px;
          color: #D9D9D9;
          letter-spacing: -0.03em;
          transition: 0.1s ease-in;
        }
        &:hover {
          .login-text {
            color: #FFFFFF;
          }
        }
      }
      .signup-link {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 12.5px;
        background: #FFFFFF;
        width: fit-content;
        padding: 5px 20px;
        height: 28px;
        .signup-text {
          font-size: 17px;
          font-weight: 600;
          font-style: normal;
          color: #121212;
          letter-spacing: -0.03em;
        }
      }
    }
  }
}
</style>