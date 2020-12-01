export const toastMixin = {
  methods: {
    successToast(text) {
      this.$toast.add({ severity: 'success', summary: text, life: 3000, group: 'toasts' });
    },
    errorToast(text) {
      this.$toast.add({ severity: 'error', summary: text, life: 3000, group: 'toasts' });
    }
  }
};
