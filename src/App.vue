<template>
  <div class="app">
    <header class="app__header">
      <div class="app__header-inner">
        <a class="app__logo" href="#" @click.prevent>
          Banki<span class="app__logo-accent">.shop</span>
        </a>
        <SearchBar v-model="searchQuery" class="app__search" />
        <div class="app__cart" :title="cartTitle">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span v-if="cartIds.length" class="app__cart-badge">{{ cartIds.length }}</span>
        </div>
      </div>
    </header>

    <main class="app__main">
      <h1 class="app__title">Каталог</h1>

      <div v-if="filteredProducts.length" class="app__grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          :in-cart="cartIds.includes(product.id)"
          @open="openProduct(product)"
          @add="addToCart(product.id)"
          @remove="removeFromCart(product.id)"
        />
      </div>

      <div v-else class="app__empty">
        <p class="app__empty-title">Ничего не найдено</p>
        <p class="app__empty-text">
          По запросу «{{ searchQuery }}» нет ни одной позиции. Попробуйте изменить запрос.
        </p>
      </div>
    </main>

    <footer class="app__footer">Banki.shop — тестовое задание</footer>

    <ProductModal
      v-if="openedProduct"
      :product="openedProduct"
      :in-cart="cartIds.includes(openedProduct.id)"
      @close="openedProduct = null"
      @add="addToCart(openedProduct.id)"
      @remove="removeFromCart(openedProduct.id)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductModal from '@/components/ProductModal.vue';
import { products } from '@/data/products';
import { loadCart, saveCart } from '@/cartStorage';
import { Product } from '@/types';

export default Vue.extend({
  name: 'App',
  components: { SearchBar, ProductCard, ProductModal },
  data() {
    return {
      products,
      searchQuery: '',
      cartIds: loadCart(),
      openedProduct: null as Product | null,
    };
  },
  computed: {
    filteredProducts(): Product[] {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) return this.products;
      return this.products.filter((p) => p.name.toLowerCase().includes(query));
    },
    cartTitle(): string {
      return this.cartIds.length
        ? `В корзине позиций: ${this.cartIds.length}`
        : 'Корзина пуста';
    },
  },
  watch: {
    cartIds(ids: number[]) {
      saveCart(ids);
    },
  },
  methods: {
    addToCart(id: number) {
      if (!this.cartIds.includes(id)) {
        this.cartIds = [...this.cartIds, id];
      }
    },
    removeFromCart(id: number) {
      this.cartIds = this.cartIds.filter((cartId) => cartId !== id);
    },
    openProduct(product: Product) {
      this.openedProduct = product;
    },
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: #f4f5f9;
  color: #1f2430;
  -webkit-font-smoothing: antialiased;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app__header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0 1px 0 rgba(31, 36, 48, 0.08);
}

.app__header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.app__logo {
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: #1f2430;
  white-space: nowrap;
}

.app__logo-accent {
  color: #4f46e5;
}

.app__search {
  flex: 1;
  max-width: 480px;
  margin-left: auto;
}

.app__cart {
  position: relative;
  color: #1f2430;
  display: flex;
  align-items: center;
}

.app__cart-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #4f46e5;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
}

.app__main {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.app__title {
  margin: 0 0 20px;
  font-size: 28px;
}

.app__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.app__empty {
  padding: 64px 16px;
  text-align: center;
}

.app__empty-title {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
}

.app__empty-text {
  margin: 0;
  color: #6b7280;
}

.app__footer {
  padding: 20px 24px;
  text-align: center;
  color: #9ca3af;
  font-size: 13px;
}

@media (max-width: 640px) {
  .app__header-inner {
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px 16px;
  }

  .app__search {
    order: 3;
    flex-basis: 100%;
    max-width: none;
  }

  .app__cart {
    margin-left: auto;
  }

  .app__main {
    padding: 16px;
  }

  .app__title {
    font-size: 22px;
    margin-bottom: 14px;
  }

  .app__grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
  }
}
</style>
