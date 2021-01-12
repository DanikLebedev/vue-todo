<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.container {
  padding: 3em;
}
</style>
