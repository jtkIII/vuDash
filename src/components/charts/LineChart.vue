<template>
  <div class="chart-card">
    <h3 class="chart-title">{{ title }}</h3>

    <div class="chart-body">
      <svg ref="svgRef" class="line-chart" viewBox="0 0 400 200" width="100%" height="200" @mousemove="onMouseMove"
        @mouseleave="onMouseLeave">
        <!-- Gradient -->
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
          </linearGradient>
        </defs>

        <!-- Grid -->
        <g class="grid">
          <line v-for="y in 4" :key="y" x1="0" :y1="y * 40" x2="400" :y2="y * 40" />
        </g>

        <!-- Area -->
        <path :d="areaPath" fill="url(#lineGradient)" />

        <!-- Line -->
        <path :d="linePath" class="line" />

        <!-- Hover guide -->
        <line v-if="hoverPoint" class="hover-line" :x1="hoverPoint.x" y1="0" :x2="hoverPoint.x" y2="160" />

        <!-- Points -->
        <g class="points">
          <circle v-for="(point, index) in points" :key="index" :cx="point.x" :cy="point.y" r="4" />
        </g>

        <!-- Active point -->
        <circle v-if="hoverPoint" :cx="hoverPoint.x" :cy="hoverPoint.y" r="6" class="active-point" />
      </svg>

      <!-- Tooltip -->
      <div v-if="hoverPoint" class="tooltip" :style="{
        left: hoverPoint.x + 'px',
        top: hoverPoint.y + 'px'
      }">
        <div class="tooltip-label">{{ labels[hoverIndex] }}</div>
        <div class="tooltip-value">{{ data[hoverIndex] }}</div>
      </div>

      <!-- Labels -->
      <div class="labels">
        <span v-for="(label, i) in labels" :key="i">
          {{ label }}
        </span>
      </div>
    </div>

  </div>
</template>


<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Activity Over Time' },
  data: { type: Array, default: () => [12, 18, 10, 24, 30, 22, 28] },
  labels: {
    type: Array,
    default: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
})

const width = 400
const height = 160
const padding = 20

const svgRef = ref(null)
const hoverIndex = ref(null)

const maxValue = computed(() => Math.max(...props.data))

const points = computed(() => {
  const stepX = (width - padding * 2) / (props.data.length - 1)

  return props.data.map((value, index) => ({
    x: padding + index * stepX,
    y: height - (value / maxValue.value) * (height - padding)
  }))
})

const linePath = computed(() =>
  points.value
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ')
)

const areaPath = computed(() => {
  const first = points.value[0]
  const last = points.value[points.value.length - 1]

  return `
    ${linePath.value}
    L ${last.x} ${height}
    L ${first.x} ${height}
    Z
  `
})

const hoverPoint = computed(() =>
  hoverIndex.value !== null ? points.value[hoverIndex.value] : null
)

function onMouseMove(event) {
  const rect = svgRef.value.getBoundingClientRect()
  const mouseX = ((event.clientX - rect.left) / rect.width) * width

  let closest = 0
  let minDistance = Infinity

  points.value.forEach((point, index) => {
    const distance = Math.abs(point.x - mouseX)
    if (distance < minDistance) {
      minDistance = distance
      closest = index
    }
  })

  hoverIndex.value = closest
}

function onMouseLeave() {
  hoverIndex.value = null
}
</script>


<style scoped>
  .chart-card {
  position: relative;
}

.line-chart {
  display: block;
  margin-bottom: 8px;
}

.grid line {
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 1;
}

.line {
  fill: none;
  stroke: #6366f1;
  stroke-width: 2;
}

.points circle {
  fill: #6366f1;
  transition: transform 0.2s ease, fill 0.2s ease;
}

.points circle:hover {
  transform: scale(1.5);
  fill: #818cf8;
}

.hover-line {
  stroke: rgba(255, 255, 255, 0.15);
  stroke-dasharray: 4;
}

.active-point {
  fill: #818cf8;
  stroke: #1e1e1e;
  stroke-width: 2;
}

.tooltip {
  position: absolute;
  transform: translate(-50%, -120%);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  pointer-events: none;
  white-space: nowrap;
}

.tooltip-label {
  color: var(--mid);
}

.tooltip-value {
  font-weight: 600;
}

.chart-body {
  width: 100%;
  display: block;
}

.labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  width: 100%;
  font-size: var(--txt-sm);
  color: var(--text-heading);
}
</style>