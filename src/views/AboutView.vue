<template>
  <main class="content-prose">
    <h2>About v-dash</h2>
    <p>v-dash is a small demo dashboard built with Vue and Vite to showcase layout and typographic patterns. This page
      demonstrates how basic content will look across the app including headings, lists, tables, forms, code, and
      components. This page serves as a reference for styling and layout while the other
      pages are more custom components ala <em>emphasis</em>, and <code>inline code</code> to highlight text. Here's an
      example link to the <a href="/">home page</a>.</p>

    <ContentSep />

    <p>
      This dashboard doesn't use any external CSS frameworks — all styles are custom built for v-dash. it also features
      a custom modal system built with Vue's Composition API. Feel free to explore the code on <a href="https://github.com/jtkIII/v-dash">GitHub</a> to
      see how everything is implemented.
    </p>

    <ContentSep />

    <h3>Settings and Slots</h3>
    <p>Check out <strong>the /components/settings dir</strong> and SettingsView to see the slick settings components.
      Idiomatic Vue patterns are used throughout the app.</p>

    <ContentSep />

    <h2>Grid & Cards</h2>
    <div class="grid-cards">
      <article class="card">
        <h4>Card One</h4>
        <p>Short description to show card layout and spacing.</p>
      </article>
      <article class="card">
        <h4>Card Two</h4>
        <p>Cards automatically flow to available columns.</p>
      </article>
      <article class="card">
        <h4>Card Three</h4>
        <p>Use these for small summary items and actions.</p>
      </article>
    </div>

    <div class="callout">
      <strong>Tip:</strong> Keep content concise — use this page as the reference for typographic scale and spacing.
    </div>

    <ContentSep />

    <h2>Table</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Routing</td>
          <td>Done</td>
          <td>Vue Router configured</td>
        </tr>
        <tr>
          <td>State</td>
          <td>Partial</td>
          <td>Simple global state in `store/state.js`</td>
        </tr>
        <tr>
          <td>Custom Styling</td>
          <td>Implemented</td>
          <td><a @click="utilityClick" class="click-me">Utility and component custom styles</a></td>
        </tr>
        <tr>
          <td><a @click="onClick" class="click-me">Modal System</a></td>
          <td>Implement</td>
          <td>A global custom modal layer</td>
        </tr>
      </tbody>
    </table>

    <ContentSep />

    <h4>Blockquote</h4>
    <blockquote>"Good design is as little design as possible." — Dieter Rams</blockquote>

    <div class="flex-list">

      <div class="nested-list">
        <h3>Bullet List</h3>
        <ul>
          <li>Bullet list item</li>
          <li>Nested list:
            <ul class="nested-list">
              <li>Nested list item one</li>
              <li>Nested list item two</li>
            </ul>
          </li>
          <li>Another bullet item</li>
        </ul>
      </div>

      <div class="ordered-list">
        <h3>Ordered list</h3>
        <ol class="ordered-list">
          <li>Indentify the problem</li>
          <li>Imagine the solution</li>
          <li>Design the solution</li>
          <li>Test the solution</li>
          <li>Implement the solution</li>

        </ol>
      </div>

    </div>

    <h3>Code</h3>
    <pre><code>function greet(name) {
  return `Hello, ${name}!`
}</code></pre>

    <ContentSep />

    <h3>Form Elements</h3>
    <form @submit.prevent="onSubmit" class="about-form" aria-label="about form">
      <div class="form-row">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" v-model="form.name" placeholder="Your name" />
      </div>
      <div class="form-row">
        <label for="role">Role &nbsp; </label>
        <select id="role" v-model="form.role">
          <option>Product Designer</option>
          <option>Chief Engineer</option>
          <option>Lead Developer</option>
        </select>
      </div>
      <div class="form-row">
        <label class="subscribe">
          <input type="checkbox" v-model="form.subscribe" />
          Subscribe to updates
        </label>
      </div>
      <div class="form-row">
        <button type="submit">Submit</button>
        <button class="btn-secondary" type="button" @click="reset">Reset</button>
      </div>
    </form>

    <ContentSep />

    <div class="about-img">
      <a @click="jtkClick" class="click-me"><img src="/jtk.webp" id="jtk" alt="Coded by Jtk" /></a>
    </div>

  </main>
</template>

<script setup>
import { watch, reactive } from 'vue'
import ContentSep from '../components/shared/ContentSep.vue'
import { confirm, notice } from '@/composables/useModal'

const props = defineProps({
  modelValue: Boolean,
  autoCommit: { type: Boolean, default: true }
})

const emit = defineEmits(['update:modelValue', 'commit'])

watch(
  () => props.modelValue,
  () => {
    if (props.autoCommit) {
      emit('commit')
    }
  }
)

const form = reactive({
  name: '',
  role: 'Lead Developer',
  subscribe: false
})

const onSubmit = async () => {
  return await notice({
    title: form.name
      ? `Thanks, ${form.name}!`
      : 'Thanks for submitting!',
    message: form.subscribe
      ? 'You have been subscribed to updates.'
      : 'You have not been subscribed to updates.',
    confirmText: 'Achtung!',
    // cancelText: 'Back 2 Safety',
    variant: 'danger'
  })
}

const jtkClick = async () => {
  return await notice({
    title: 'jtkIII',
    message: 'Dashboard coded by Jtk using Vue 3 and Vite.',
    confirmText: 'Ok Then',
    variant: 'purple'
  })
}

const utilityClick = async () => {
  return await confirm({
    title: 'Custom CSS Styles',
    message: 'No external CSS frameworks here! All styles are custom built for v-dash.',
    confirmText: 'Cool',
    cancelText: 'okay',
    variant: 'standard'
  })
}

const onClick = async () => {
  return await confirm({
    title: 'Modal Madness!',
    message: 'Why add an external package when you can build your own modal system?',
    confirmText: 'Diggit',
    cancelText: 'Nope',
    variant: 'cool'
  })
}

const reset = () => {
  form.name = ''
  form.role = 'Lead Developer'
  form.subscribe = false
}
</script>


<style scoped>
.click-me {
  cursor: pointer;
  /* color: #6365f1; */
  /* text-decoration: underline; */
}

.about-img {
  width: fit-content;
  text-align: center;
  margin: 2rem auto;
}

img#jtk {
  width: 120px;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
  opacity: 0.9;
}

.flex-list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 0 1rem 1rem;
}

.nested-list,
.ordered-list {
  flex: 1 1 0;
  min-width: 220px;
}

.about-form .form-row label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  padding-left: 4px;
}

/* hide default box then style */
.about-form .form-row input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #d4cbe13e;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  transition: background .15s, border-color .15s;
}

/* checked state shows a tick */
.about-form .form-row input[type="checkbox"]:checked {
  background: #6365f1ae;
  border-color: #6365f170;
}

.about-form .form-row input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: 2px solid #ffffff45;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* focus for keyboard users */
.about-form .form-row input[type="checkbox"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, .15);
}

.subscribe {
  margin: 10px 0;
  color: #404143;
}

/* Keep nested UL spacing and indentation */
.nested-list ul {
  margin-top: 0.5rem;
  padding-left: 1.25rem;
}

/* Responsive: stack columns on narrow screens */
@media (max-width: 640px) {
  .flex-list {
    flex-direction: column;
    gap: 8px;
  }
}
</style>