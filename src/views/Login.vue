<template>
  <Container>
    <div class="login-page p">
      <h1>Login</h1>
      <div class="login-wrapper">
        <form @submit.prevent="onSubmit">
          <custom-input
            name="email"
            icon="pi-user"
            :required="true"
            placeholder="Email"
            valid-rule="email"
            type="email"
            v-model:value="login"
          />
          <custom-input
            name="password"
            :required="true"
            placeholder="Password"
            type="password"
            icon="pi-lock"
            v-model:value="password"
          />
          <Button type="submit" icon="pi pi-check" label="Submit" />
        </form>
      </div>
    </div>
  </Container>
</template>

<script>
import { defineComponent } from 'vue';
import Button from 'primevue/components/button/Button';
import Container from '@/components/container';
import CustomInput from '@/components/custom-input';
import router from '../router/index';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      login: null,
      password: null
    };
  },
  components: {
    Container,
    Button,
    CustomInput
  },
  methods: {
    async onSubmit() {
      this.$store
        .dispatch('login', {
          email: this.login,
          password: this.password
        })
        .then(() => {
          router.push('/');
        })
        .catch(() => {
          console.log('123');
          this.errorToast('Incorrect login or password');
        });
    }
  }
});
</script>
<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 60px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
}
</style>
