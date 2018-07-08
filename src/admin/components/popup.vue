<template lang="pug">
  .popup
    span.popup__text Сообщение отправлено
    button(type="submit").btn#popupBtn Закрыть
</template>

<style lang="scss" scoped>
.popup {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  max-width: 250px;
  padding: 25px;
  text-align: center;
  border-radius: 5px;
}

.popup__text {
  margin-bottom: 30px;
}
</style>
