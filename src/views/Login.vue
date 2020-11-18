<template>
  <div class="login-page">
    <h1>Login</h1>
    <div class="login-wrapper">
      <span class="p-input-icon-right">
        <i class="pi pi-user" />
        <label>
          <Input placeholder="Login" id="login" type="text" v-model="login" />
        </label>
      </span>
      <span class="p-input-icon-right">
        <label>
          <Input placeholder="Password" id="password" type="text" v-model="password" />
        </label>
        <i class="pi pi-lock" />
      </span>
      <Button icon="pi pi-check" label="Submit" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Input from "primevue/components/inputtext/InputText";
import Button from "primevue/components/button/Button";

export default defineComponent({
  name: "Login",
  data() {
    return {
      login: null,
      password: null
    };
  },
  components: {
    Input,
    Button
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
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
  span {
    margin-bottom: 20px;
  }
}
</style>
