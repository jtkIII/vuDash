<template>
    <header>
        <section id="heading">
            <h1>VuDash</h1>
            <nav>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </nav>
        </section>
    </header>
</template>

<script>
import { state } from '@/store/state'
state.isLoggedIn = true
</script>
