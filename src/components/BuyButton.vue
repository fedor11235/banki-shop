<template>
  <button
    class="buy"
    :class="{ 'buy--processing': state === 'processing', 'buy--in-cart': state === 'inCart' }"
    type="button"
    :disabled="state === 'processing'"
    @click.stop="onClick"
  >
    <span v-if="state === 'idle'" class="buy__content">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      Купить
    </span>

    <span v-else-if="state === 'processing'" class="buy__content">
      <svg class="buy__spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
      </svg>
      Обрабатывается…
    </span>

    <span v-else class="buy__content">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      В корзине
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { BuyState } from '@/types';

const PROCESSING_DELAY = 2000;

export default Vue.extend({
  name: 'BuyButton',
  props: {
    inCart: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      processing: false,
      timer: 0,
    };
  },
  computed: {
    state(): BuyState {
      if (this.processing) return 'processing';
      return this.inCart ? 'inCart' : 'idle';
    },
  },
  beforeDestroy() {
    window.clearTimeout(this.timer);
  },
  methods: {
    onClick() {
      if (this.state === 'inCart') {
        this.$emit('remove');
        return;
      }
      this.processing = true;
      this.timer = window.setTimeout(() => {
        this.processing = false;
        this.$emit('add');
      }, PROCESSING_DELAY);
    },
  },
});
</script>

<style scoped>
.buy {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #4f46e5;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.buy:hover:not(:disabled) {
  background: #4338ca;
}

.buy--processing {
  background: #eef0f4;
  color: #6b7280;
  cursor: default;
}

.buy--in-cart {
  background: #e7f7ef;
  color: #0f9d58;
}

.buy--in-cart:hover:not(:disabled) {
  background: #d7f0e3;
}

.buy__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.buy__spinner {
  animation: buy-spin 0.8s linear infinite;
}

@keyframes buy-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
