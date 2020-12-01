<template>
  <Container>
    <div class="login-page">
      <h1>Sign up</h1>
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
          <custom-input
            name="confirm-password"
            :required="true"
            placeholder="Confirm Password"
            type="password"
            icon="pi-lock"
            v-model:value="confirmPassword"
          />
          <Button type="submit" icon="pi pi-check" label="Submit" />
        </form>
      </div>
      <Toast position="top-center" />
    </div>
  </Container>
</template>

<script>
import { defineComponent } from 'vue';
import Button from 'primevue/components/button/Button';
import Toast from 'primevue/components/toast/Toast';
import Container from '@/components/container';
import CustomInput from '@/components/custom-input';

export default defineComponent({
  name: 'SignUp',
  data() {
    return {
      login: null,
      password: null,
      confirmPassword: null
    };
  },
  components: {
    Container,
    CustomInput,
    Button,
    Toast
  },
  methods: {
    async onSubmit() {
      if (this.password === this.confirmPassword) {
        this.$store.dispatch('signup', {
          email: this.login,
          password: this.password
        });
      } else {
        this.errorToast('Passwords do not match');
      }
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
