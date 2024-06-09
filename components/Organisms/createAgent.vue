<template>
  <h2>Create Agent</h2>
  <p>Symbol</p>
  <input v-model="agent_info.symbol" placeholder="Symbol" />
  <p>Faction</p>
  <select v-model="agent_info.faction">
    <option v-for="faction_list in FACTION_LIST" :value="faction_list.value">
      {{ faction_list.text }}
    </option>
  </select>
  <input
    type="button"
    value="register"
    :disabled="!isValidatedSymbol"
    class="registerButton"
    @click="onClickRegister"
  />
</template>

<script lang="ts" setup>
  import type { components } from '~/infrastructures/apiClient/api';
  import { reactive, computed } from 'vue';

  const agent_info = reactive({
    symbol: '',
    faction: 'COSMIC',
  });

  const FACTION_LIST: {
    text: components['schemas']['FactionSymbol'];
    value: components['schemas']['FactionSymbol'];
  }[] = [
    { text: 'COSMIC', value: 'COSMIC' },
    { text: 'VOID', value: 'VOID' },
    { text: 'GALACTIC', value: 'GALACTIC' },
    { text: 'QUANTUM', value: 'QUANTUM' },
    { text: 'DOMINION', value: 'DOMINION' },
    { text: 'ASTRO', value: 'ASTRO' },
    { text: 'CORSAIRS', value: 'CORSAIRS' },
    { text: 'OBSIDIAN', value: 'OBSIDIAN' },
    { text: 'AEGIS', value: 'AEGIS' },
    { text: 'UNITED', value: 'UNITED' },
    { text: 'SOLITARY', value: 'SOLITARY' },
    { text: 'COBALT', value: 'COBALT' },
    { text: 'OMEGA', value: 'OMEGA' },
    { text: 'ECHO', value: 'ECHO' },
    { text: 'LORDS', value: 'LORDS' },
    { text: 'CULT', value: 'CULT' },
    { text: 'ANCIENTS', value: 'ANCIENTS' },
    { text: 'SHADOW', value: 'SHADOW' },
    { text: 'ETHEREAL', value: 'ETHEREAL' },
  ] as const;

  const isValidatedSymbol = computed(() => {
    if (agent_info.symbol.length >= 3 && agent_info.symbol.length <= 14) {
      if (/[A-Z0-9]|_/.test(agent_info.symbol)) {
        return true;
      }
    }
    return false;
  });

  const onClickRegister = async () => {
    // call register api
    // if symbol is already registered,
    // let retry register with other symbol
    console.log(`${agent_info.symbol} : ${agent_info.faction}`);
  };
</script>

<style>
  h2,
  p {
    color: white;
    text-align: center;
  }

  .registerButton {
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    height: 40px;
    width: 80px;
  }
</style>
