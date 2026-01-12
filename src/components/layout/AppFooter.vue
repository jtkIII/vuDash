<template>
  <footer>
    <div class="footer-content">
      <div class="footer-left">
      </div>
      <div class="footer-center">
        <Heart class="inline-icon" /> <span> &nbsp; JTk Coded This in 2026</span>
      </div>
      <div class="footer-right">
        <a href="https://github.com/jtk/vudash">
          <GitBranch class="inline-icon" />
           <HatGlasses class="inline-icon" />
           <Coffee class="inline-icon" />
        </a>
       
      </div>
    </div>
  </footer>
</template>

<script setup>
  import {
  HatGlasses,  Coffee, GitBranch, Heart
} from 'lucide-vue-next'
</script>

<style scoped>
  
footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--footer-height);
  width: 100%;
  text-align: center;
  font-size: 0.66rem;
  margin-top: 0;
  background-color: rgba(22, 22, 22, 0.95);
  /* box-shadow: 0 -6px 18px rgba(0,0,0,0.6); */
  z-index: 1000;
}
  .footer-content, .footer-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 20px;
    background-color: #171717;
    color: #cfcfcf;
    font-size: 14px;
  }

  .footer-right a {
    display: flex;
  }

  .inline-icon {
    width: 16px;
    height: 16px;
    margin-left: 4px;
    vertical-align: middle;
    color: #9a9a9a;
  }
  .inline-icon:hover {
  color: #bc5090;
}
</style>