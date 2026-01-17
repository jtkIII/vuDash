<template>
    <div class="global-search">
        <SearchInput v-model="query" placeholder="Search Everything Here" />
        <SearchResults :results="filteredResults" @select="onSelect" />
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import SearchInput from './SearchInput.vue'
import SearchResults from './SearchResults.vue'

const emit = defineEmits(['select'])

const query = ref('')

/* Mock global data */
const data = {
    Users: [
        { id: 1, title: 'Alex Johnson', meta: 'Frontend Engineer' },
        { id: 2, title: 'Maria Lopez', meta: 'Product Designer' },
        { id: 3, title: 'Sam Patel', meta: 'Backend Developer' },
        { id: 4, title: 'Linda Wong', meta: 'Project Manager' },
        { id: 5, title: 'James Smith', meta: 'QA Specialist' },
        { id: 6, title: 'Sofia Garcia', meta: 'DevOps Engineer' },
        { id: 7, title: 'Michael Brown', meta: 'UX Researcher' },
        { id: 8, title: 'Emma Davis', meta: 'Data Scientist' },
        { id: 9, title: 'Olivia Martinez', meta: 'Marketing Lead' }

    ],
    Messages: [
        { id: 10, title: 'Meeting rescheduled to 3pm', meta: 'Alex · 2h ago' },
        { id: 11, title: 'Can you review this PR?', meta: 'Sam · Yesterday' },
        { id: 12, title: 'Design mockups ready for review', meta: 'Maria · 3 days ago' },
        { id: 13, title: 'Sprint planning notes', meta: 'Linda · Last week' },
        { id: 14, title: 'Bug report: Login issue', meta: 'James · 2 weeks ago' },
        { id: 15, title: 'Deployment scheduled for Friday', meta: 'Sofia · 3 weeks ago' },
        { id: 16, title: 'User research findings', meta: 'Michael · 1 month ago' },
        { id: 17, title: 'Data analysis report', meta: 'Emma · 1 month ago' },
        { id: 18, title: 'Marketing strategy update', meta: 'Olivia · 2 months ago' }
    ],
    Files: [
        { id: 20, title: 'Q4-report.pdf', meta: 'PDF · 2.1 MB' },
        { id: 21, title: 'wireframes.fig', meta: 'Figma File' },
        { id: 22, title: 'project-plan.docx', meta: 'Word Document' },
        { id: 23, title: 'budget.xlsx', meta: 'Excel Spreadsheet' },
        { id: 24, title: 'presentation.pptx', meta: 'PowerPoint' },
        { id: 25, title: 'logo.png', meta: 'Image File' },
        { id: 26, title: 'user-research.mp4', meta: 'Video File' },
        { id: 27, title: 'api-documentation.pdf', meta: 'PDF · 1.5 MB' },
        { id: 28, title: 'design-system.sketch', meta: 'Sketch File' }
    ],
    Links: [
        { id: 30, title: 'Project Roadmap', meta: 'Notion' },
        { id: 31, title: 'Design System', meta: 'Internal Wiki' },
        { id: 32, title: 'Client Website', meta: 'https://client.com' },
        { id: 33, title: 'Marketing Blog', meta: 'https://marketingblog.com' },
        { id: 34, title: 'Support Portal', meta: 'https://support.portal.com' },
        { id: 35, title: 'Developer Docs', meta: 'https://devdocs.com' },
        { id: 36, title: 'Team Calendar', meta: 'Google Calendar' },
        { id: 37, title: 'Sales Dashboard', meta: 'Tableau' },
        { id: 38, title: 'HR Policies', meta: 'Internal Wiki' }
    ]
}

/* Very basic filtering (mock-stage only) */
const filteredResults = computed(() => {
    if (!query.value.trim()) {
        return {
            Users: [],
            Messages: [],
            Files: [],
            Links: []
        }
    }

    const q = query.value.toLowerCase()

    return Object.fromEntries(
        Object.entries(data).map(([group, items]) => [
            group,
            items.filter(item =>
                item.title.toLowerCase().includes(q)
            )
        ])
    )
})

function onSelect(payload) {
    emit('select', payload)
}
</script>
