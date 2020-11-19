<template>
  <Container>
    <div class="login-page">
      <h1>Login</h1>
      <div class="login-wrapper">
        <form @submit.prevent="onSubmit">
          <div class="form-field">
            <span class="p-input-icon-right ">
              <i class="pi pi-user" />
              <label for="login">
                <Input
                  v-valid:email
                  aria-describedby="login-help"
                  placeholder="Email"
                  id="login"
                  type="email"
                  required
                  v-model="login"
                />
              </label>
            </span>
          </div>
          <div class="form-field">
            <span class="p-input-icon-right p-field">
              <i class="pi pi-lock" />
              <label>
                <Input
                  placeholder="Password"
                  id="password"
                  type="password"
                  v-model="password"
                  required
                />
              </label>
            </span>
          </div>
          <Button type="submit" icon="pi pi-check" label="Submit" />
        </form>
      </div>
    </div>
  </Container>
</template>

<script>
import { defineComponent } from "vue";
import Input from "primevue/components/inputtext/InputText";
import Button from "primevue/components/button/Button";
import Container from "@/components/container";

export default defineComponent({
  name: "Login",
  data() {
    return {
      login: null,
      password: null
    };
  },
  components: {
    Container,
    Input,
    Button
  },
  methods: {
    async onSubmit() {
      this.$store.dispatch("login", {
        email: this.login,
        password: this.password
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

.form-field {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  input {
    width: 400px;
  }
  .error-span {
    display: none;
  }
  small {
    margin-top: 5px;
  }
}
</style>
