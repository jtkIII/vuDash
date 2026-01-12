<template>
    <div class="user-list">
        <div v-for="user in users" :key="user.id" class="user-card">
            <img class="avatar" :src="user.avatar" :alt="user.name" />

            <div class="user-info">
                <div class="user-header">
                    <h3 class="name">{{ user.name }}</h3>
                    <span class="position">{{ user.position }}</span>
                </div>

                <p class="blurb">
                    {{ user.blurb }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const users = [
    {
        id: 1,
        name: 'Alex Johnson',
        position: 'Frontend Engineer',
        blurb: 'Loves Vue, clean UI, and performance optimizations.',
        avatar: 'https://i.pravatar.cc/80?img=12'
    },
    {
        id: 2,
        name: 'Maria Lopez',
        position: 'Product Designer',
        blurb: 'Focused on usability, accessibility, and delightful UX.',
        avatar: 'https://i.pravatar.cc/80?img=32'
    },
    {
        id: 3,
        name: 'Sam Patel',
        position: 'Backend Developer',
        blurb: 'API specialist with a passion for scalable systems.',
        avatar: 'https://i.pravatar.cc/80?img=45'
    }
]
</script>

<style>
.user-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.user-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 16px;
    border-radius: 12px;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.user-card:hover {
    background-color: #f9fafb;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
}

.user-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.user-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
}

.name {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
    color: #111827;
}

.position {
    font-size: 13px;
    color: #6b7280;
}

.blurb {
    font-size: 13px;
    color: #4b5563;
    margin: 0;
    line-height: 1.4;
}
</style>