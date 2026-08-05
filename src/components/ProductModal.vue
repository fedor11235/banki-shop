<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal__dialog" role="dialog" aria-modal="true" :aria-label="product.name">
      <button class="modal__close" type="button" aria-label="Закрыть" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div class="modal__slider">
        <ImageSlider :images="product.images" :alt="product.name" />
      </div>

      <div class="modal__info">
        <h2 class="modal__name">{{ product.name }}</h2>
        <p class="modal__description">{{ product.description }}</p>
        <p class="modal__price">{{ formattedPrice }}</p>
        <BuyButton
          :in-cart="inCart"
          @add="$emit('add')"
          @remove="$emit('remove')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ImageSlider from '@/components/ImageSlider.vue';
import BuyButton from '@/components/BuyButton.vue';
import { Product } from '@/types';
import { formatPrice } from '@/formatPrice';

export default Vue.extend({
  name: 'ProductModal',
  components: { ImageSlider, BuyButton },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    inCart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedPrice(): string {
      return formatPrice(this.product.price);
    },
  },
  mounted() {
    document.addEventListener('keydown', this.onKeydown);
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown);
    document.body.style.overflow = '';
  },
  methods: {
    onKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.$emit('close');
      }
    },
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(15, 18, 26, 0.55);
  animation: modal-fade 0.2s ease;
}

.modal__dialog {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  max-width: 760px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  animation: modal-pop 0.2s ease;
}

.modal__close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #f4f5f9;
  color: #1f2430;
  cursor: pointer;
}

.modal__close:hover {
  background: #e8eaf0;
}

.modal__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
}

.modal__name {
  margin: 0;
  font-size: 22px;
  line-height: 1.3;
  padding-right: 24px;
}

.modal__description {
  margin: 0;
  color: #4b5563;
  line-height: 1.5;
}

.modal__price {
  margin: auto 0 0;
  font-size: 26px;
  font-weight: 700;
}

@keyframes modal-fade {
  from {
    opacity: 0;
  }
}

@keyframes modal-pop {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
}

@media (max-width: 640px) {
  .modal__dialog {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
  }

  .modal__info {
    padding-top: 0;
  }

  .modal__name {
    font-size: 18px;
  }

  .modal__price {
    font-size: 22px;
  }
}
</style>
