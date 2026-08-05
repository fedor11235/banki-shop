<template>
  <div class="search">
    <svg class="search__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
    <input
      class="search__input"
      type="text"
      :value="value"
      placeholder="Поиск по товарам…"
      @input="$emit('input', $event.target.value)"
    />
    <button
      v-if="value"
      class="search__clear"
      type="button"
      aria-label="Очистить поиск"
      @click="$emit('input', '')"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SearchBar',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
}

.search__icon {
  position: absolute;
  left: 12px;
  color: #9ca3af;
  pointer-events: none;
}

.search__input {
  width: 100%;
  height: 42px;
  padding: 0 40px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #f9fafb;
  font-size: 15px;
  color: #1f2430;
  outline: none;
  transition: border-color 0.15s, background 0.15s;
}

.search__input::placeholder {
  color: #9ca3af;
}

.search__input:focus {
  border-color: #4f46e5;
  background: #ffffff;
}

.search__clear {
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #9ca3af;
  cursor: pointer;
}

.search__clear:hover {
  background: #eef0f4;
  color: #1f2430;
}
</style>
