<template>
  <article class="card">
    <button class="card__media" type="button" @click="$emit('open')">
      <img class="card__image" :src="product.images[0]" :alt="product.name" loading="lazy" />
    </button>
    <div class="card__body">
      <button class="card__name" type="button" @click="$emit('open')">
        {{ product.name }}
      </button>
      <p class="card__price">{{ formattedPrice }}</p>
      <BuyButton
        :in-cart="inCart"
        @add="$emit('add')"
        @remove="$emit('remove')"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BuyButton from '@/components/BuyButton.vue';
import { Product } from '@/types';
import { formatPrice } from '@/formatPrice';

export default Vue.extend({
  name: 'ProductCard',
  components: { BuyButton },
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
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(31, 36, 48, 0.08);
  transition: box-shadow 0.15s, transform 0.15s;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(31, 36, 48, 0.12);
  transform: translateY(-2px);
}

.card__media {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.card__image {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 14px;
}

.card__name {
  padding: 0;
  border: none;
  background: none;
  text-align: left;
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
  color: #1f2430;
  cursor: pointer;
}

.card__name:hover {
  color: #4f46e5;
}

.card__price {
  margin: auto 0 0;
  font-size: 18px;
  font-weight: 700;
}

@media (max-width: 640px) {
  .card__body {
    padding: 10px;
  }

  .card__name {
    font-size: 13px;
  }

  .card__price {
    font-size: 15px;
  }
}
</style>
