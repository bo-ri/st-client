<template>
  <div class="contents">
    <login v-if="page_info.selected === 'login'" />
    <createAgent v-if="page_info.selected === 'createAgent'" />
    <div>
      <a @click="onClickLink">{{ link_text }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Cookies from 'js-cookie';
  import { reactive, computed } from 'vue';
  import login from '@/components/Organisms/login.vue';
  import createAgent from '@/components/Organisms/createAgent.vue';

  // get cookie about SpaceTraders' token
  const token = Cookies.get('stclient');

  // if token is already in cookie
  // redirect to home
  if (token) {
    await navigateTo('/home');
  }

  const page_info = reactive<{ selected: 'login' | 'createAgent' }>({
    selected: 'login',
  });

  const link_text = computed(() => {
    if (page_info.selected === 'login') {
      return 'create agent';
    } else {
      return 'login';
    }
  });

  const onClickLink = () => {
    if (page_info.selected === 'login') {
      page_info.selected = 'createAgent';
    } else {
      page_info.selected = 'login';
    }
  };
</script>

<style>
  h2 {
    margin: 0;
    padding: 0;
  }

  .contents {
    width: 30vh;
    padding-top: 100px;
    margin: 0 auto;
    display: grid;
    justify-content: center;
  }
</style>
