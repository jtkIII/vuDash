<template>
    <div class="stat-grid">
        <div v-for="card in cards" :key="card.id" class="stat-card">
            <div class="top">
                <span class="value">{{ card.displayValue }}</span>
                <span class="delta" :class="{ up: card.delta.startsWith('+'), down: card.delta.startsWith('-') }">
                    {{ card.delta }}
                </span>
            </div>

            <div class="label">{{ card.label }}</div>
            <div class="description">{{ card.description }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const cards = ref([
    {
        id: 1,
        value: 1240,
        displayValue: 240,
        delta: '+3%',
        label: 'Users',
        description: 'Active users this week'
    },
    {
        id: 2,
        value: 37,
        displayValue: 37,
        delta: '-1.2%',
        label: 'Errors',
        description: 'System errors reported'
    },
    {
        id: 3,
        value: 342,
        displayValue: 642,
        delta: '+12',
        label: 'Uploads',
        description: 'Files uploaded today'
    }
])


const timers = []

function randomDelta() {
    const sign = Math.random() > 0.5 ? '+' : '-'
    const amount = (Math.random() * 5).toFixed(1)
    return `${sign}${amount}%`
}

function startTimers() {
    cards.value.forEach((card, index) => {
        /* Stagger start times slightly */
        const deltaTimer = setInterval(() => {
            card.delta = randomDelta()
        }, 2000 + index * 400)

        const valueTimer = setInterval(() => {
            const next = card.value + Math.floor(Math.random() * 10)
            card.value = next
            tweenValue(card, next)
        }, 8000 + index * 1000)

        timers.push(deltaTimer, valueTimer)
    })
}

function stopTimers() {
    timers.forEach(clearInterval)
    timers.length = 0
}

function handleVisibilityChange() {
    if (document.hidden) {
        stopTimers()
    } else {
        setTimeout(startTimers, 500) // let browser settle
    }
}

function tweenValue(card, to) {
    const from = card.displayValue
    const duration = 300
    const start = performance.now()

    function animate(now) {
        const progress = Math.min((now - start) / duration, 1)
        const eased = progress * (2 - progress) // easeOutQuad

        card.displayValue = Math.round(
            from + (to - from) * eased
        )

        if (progress < 1) {
            requestAnimationFrame(animate)
        }
    }

    requestAnimationFrame(animate)
}


onMounted(() => {
    startTimers()
    document.addEventListener('visibilitychange', handleVisibilityChange)
})

onBeforeUnmount(() => {
    stopTimers()
    document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>


<style scoped>
.stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.stat-card {
    background: #1e1e1e;
    border: 1px solid #2f2f2f;
    border-radius: 12px;
    padding: 16px;
}

.stat-card:hover{
    background-color: #202020;
    border-color: #58508d45;
    box-shadow: 0 4px 10px rgba(165, 99, 241, 0.15);
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.value {
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
}

.delta {
    font-size: 12px;
    font-weight: 700;
}

.delta.up {
    color: #bc5090;
}

.delta.down {
    color: #ff6361;
}

.label {
    margin-top: 8px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
}

.description {
    margin-top: 4px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.45);
}

.value {
  font-variant-numeric: tabular-nums;
  transition: color 0.2s ease;
}


/* Mobile */
@media (max-width: 640px) {
    .stat-grid {
        grid-template-columns: 1fr;
    }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}

</style>
