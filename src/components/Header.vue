<template>
  <header class="my-header">
    <div class="my-grid-container my-header__container">
      <div class="my-grid-row">
        <!-- TITLE -->
        <div class="my-grid-column my-header__title">
          <h1 class="my-font-title">My cars</h1>
        </div>

        <!-- USER -->
        <div class="my-grid-column my-header__user">
          Firmino Changani
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.my-header {
  $header-height: 60px;

  width: 100%;
  height: $header-height;
  color: $my-color-white;
  background-color: $my-color-black;

  &__container {
    height: inherit;
  }

  &__user {
    justify-content: flex-end;
  }

  &__user,
  &__title {
    display: flex;
    align-items: center;
    height: $header-height;
  }
}
</style>
