<template>
  <div class="chart-card">
    <h3 class="chart-title">{{ title }}</h3>

    <svg class="pie-chart" viewBox="0 0 200 200" width="200" height="200">
      <g transform="translate(100, 100)">
        <template v-for="(slice, index) in slices" :key="index">
          <path :d="slice.path" :fill="slice.color" class="slice" />
        </template>
      </g>
    </svg>

    <ul class="legend">
      <li v-for="(item, index) in data" :key="index">
        <span class="legend-color" :style="{ backgroundColor: item.color }" />
        <span class="legend-label">{{ item.label }}</span>
        <span class="legend-value">{{ item.value }}%</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Your Teams Project Status Breakdown'
  },
  data: {
    type: Array,
    default: () => [
      { label: 'Projects finished on time', value: 45, color: '#58508d' },
      { label: 'Projects currently on schedule', value: 35, color: '#bc5090' },
      { label: 'Projects behind schedule', value: 15, color: '#ff6361' },
      { label: 'Projects that have failed', value: 5, color: '#ffa600' }
    ]
  }
})

const total = computed(() =>
  props.data.reduce((sum, item) => sum + item.value, 0)
)

function polarToCartesian(radius, angle) {
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  }
}

const slices = computed(() => {
  let startAngle = -Math.PI / 2
  const radius = 90

  return props.data.map(item => {
    const angle = (item.value / total.value) * Math.PI * 2
    const endAngle = startAngle + angle
    const start = polarToCartesian(radius, startAngle)
    const end = polarToCartesian(radius, endAngle)
    const largeArc = angle > Math.PI ? 1 : 0

    const path = `
      M 0 0
      L ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}
      Z
    `

    startAngle = endAngle

    return {
      path,
      color: item.color
    }
  })
})
</script>


<style scoped>
.pie-chart {
  display: block;
  margin: 0 auto 16px;
}

.slice {
  transition: transform 0.2s ease, filter 0.2s ease;
  transform-origin: center;
}

.slice:hover {
  filter: brightness(1.15);
  transform: scale(1.03);
}

.legend {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.legend-color {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-label {
  flex: 1;
  color: rgba(255, 255, 255, 0.8);
}

.legend-value {
  color: rgba(255, 255, 255, 0.6);
}
</style>