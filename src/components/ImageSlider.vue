<template>
  <div class="slider">
    <div class="slider__viewport">
      <div class="slider__track" :style="{ transform: `translateX(-${current * 100}%)` }">
        <img
          v-for="(image, index) in images"
          :key="index"
          class="slider__image"
          :src="image"
          :alt="`${alt} — фото ${index + 1}`"
        />
      </div>

      <button
        v-if="images.length > 1"
        class="slider__arrow slider__arrow--prev"
        type="button"
        aria-label="Предыдущее фото"
        @click="prev"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        v-if="images.length > 1"
        class="slider__arrow slider__arrow--next"
        type="button"
        aria-label="Следующее фото"
        @click="next"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>

    <div v-if="images.length > 1" class="slider__dots">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="slider__dot"
        :class="{ 'slider__dot--active': index === current }"
        type="button"
        :aria-label="`Фото ${index + 1}`"
        @click="current = index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'ImageSlider',
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    },
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
  },
});
</script>

<style scoped>
.slider__viewport {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.slider__track {
  display: flex;
  transition: transform 0.3s ease;
}

.slider__image {
  display: block;
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.slider__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  color: #1f2430;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(31, 36, 48, 0.2);
  transition: background 0.15s;
}

.slider__arrow:hover {
  background: #fff;
}

.slider__arrow--prev {
  left: 10px;
}

.slider__arrow--next {
  right: 10px;
}

.slider__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.slider__dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #d1d5db;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}

.slider__dot--active {
  background: #4f46e5;
  transform: scale(1.25);
}
</style>
