<template>
  <Container>
    <div :class="$style.login_page">
      <h1>Sign up</h1>
      <div :class="$style.login_wrapper">
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
    </div>
  </Container>
</template>

<script>
import { defineComponent } from 'vue';
import Button from 'primevue/components/button/Button';
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
    Button
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
<style lang="scss" module>
.login_page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.login_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 60px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
}
</style>
