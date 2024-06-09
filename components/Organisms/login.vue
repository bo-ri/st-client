<template>
  <h2>Login Agent</h2>
  <p>Your auth token</p>
  <input v-model="agent_info.token" placeholder="your token" />
  <input
    type="button"
    value="login"
    :disabled="!isValidatedToken"
    class="loginButton"
    @click="onClicklogin"
  />
</template>

<script setup>
  import { reactive, computed } from 'vue';

  const agent_info = reactive({
    token: undefined,
  });

  const isValidatedToken = computed(() => {
    if (agent_info.token && agent_info.token.length > 1) {
      return true;
    }
    return false;
  });

  const onClicklogin = async () => {
    // call api
    console.log(`${agent_info.token}`);
  };
</script>

<style>
  h2,
  p {
    color: white;
    text-align: center;
  }

  .loginButton {
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    height: 40px;
    width: 80px;
  }
</style>
