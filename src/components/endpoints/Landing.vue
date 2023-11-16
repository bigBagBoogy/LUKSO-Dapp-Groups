<script setup lang="ts">
import { ref } from 'vue';
//   import LSP3MetadataForm from '@/components/endpoints/LSP3MetadataForm.vue';
import ProfileUpload from '@/views/profile/Upload.vue'
 
      const showForm = ref(false);
  
      const handleButtonClick = () => {
        showForm.value = !showForm.value;
      };
  
  
      const handleSubmit = (lsp3Profile) => {
        console.log(lsp3Profile);  
    }
  </script>

<template>
    <div>
      <h1>Lukso Dapp</h1>      
        <img src="/bearPink-spinning.svg" class="logo" alt="logo" />      
      <!-- only show the form onClick -->
      <button @click="handleButtonClick">Create Universal Group</button>
      <ProfileUpload     v-if="showForm" @onSubmit="handleSubmit" />
    </div>
</template>
  
  <style scoped>
  .logo {  /*window glare*/
  height: 8em;
  position: absolute;
  padding: 1.5em;
  top: 15%; /* Center vertically */
  left: 95%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the element precisely */
  z-index: -1;
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  color: #fff
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input[type="text"],
input[type="file"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

  </style>
  