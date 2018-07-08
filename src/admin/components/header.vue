<template lang="pug">
  #header
    h1.header__title Панель администрирования
    a.header__link(href="../") Вернуться на сайт
</template>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00bfa5;
  padding: 20px 25px;
}

.header__title {
  color: white;
  font-size: 28px;
  font-weight: 500;
  margin: 0;
}

.header__link {
  color: white;
  font-weight: 500;
}

@media (max-width: 520px) {
  #header {
    flex-direction: column;
  }

  .header__title {
    order: 2;
    font-size: 23px;
  }
}
</style>
