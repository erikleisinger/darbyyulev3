<template>
  <Container class="grid grid-cols-1 lg:grid-cols-2">
    <div class="flex justify-center items-center h-full w-full min-h-[inherit] md:w-fit md:min-w-[500px] md:m-auto ">

      <div class="px-6 w-full">
        <h1 class="text-mustard mb-2">Contact</h1>

      <form class="flex flex-col gap-y-8 max-w-full"  ref="form" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" :value="web3Key">
        <div class="flex gap-2 ">
          <ContactInput v-model="name" label="Name" placeholder="Your name" required name="text" />
          <ContactInput v-model="email" label="Email" placeholder="name@address.com" required name="email"/>
        </div>
        <ContactInput v-model="subject" label="Subject" placeholder="A subject for your message" required name="subject"/>
        <ContactInput v-model="message" label="Message" placeholder="Write something here" required name="message" textarea rows="1" style="resize: none"/>
        <Button class="w-fit m-auto"  :disabled="submitting" type="submit">Send</Button>
      </form>
    </div>
    </div>
    <div class=" hidden md:flex bg-cover  justify-center items-center" style="background-image: url('/images/contact_new_bg.png')">
      <img src="/images/contact_splash.png" class="desktop-splash max-h-[60vh]"  />
      </div>
  </Container>
</template>
<script setup lang="ts">
import { useEventListener } from '@vueuse/core';
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';
  let name = ref('')
  let email = ref('')
  let subject = ref('')
  let message = ref('')

  let {web3Key} = useRuntimeConfig().public

  let form = ref(null)

  let submitting = ref(false)

  function goToast() {
    toast.loading('wow', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  let {isSm} = useWindowSize();

  useEventListener(form, 'submit', (e) => {
    e.preventDefault()
    submitting.value = true;
    let toastId = toast.loading('Sending email...', {
      position: toast.POSITION.TOP_CENTER
    })

    const formData = new FormData(form.value);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
    
        
            toast.update(toastId, {
              render: json.message,
              autoClose: true,
              closeOnClick: true,
              closeButton: true,
              type: 'success',
              isLoading: false,
            })
        })
        .catch(error => {
            console.log(error);
            toast.update(toastId, {
              render: 'Error sending message. Sorry about that!',
              autoClose: true,
              closeOnClick: true,
              closeButton: true,
              type: 'error',
              isLoading: false,
            })
          
        })
        .then(function() {
            form.value.reset();
 
        })
        .finally(() => {
          submitting.value = false;
        })
  })

  
</script>
