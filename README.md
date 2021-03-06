## Training Project Portfolio

**Loftschool** - Level 3 (4.06.2018 - 9.07.2018)

**Description:** SCSS, PUG, Adaptive, Js, Vue.js, admin panel (API), Gulp 4 + Webpack, GoogleMaps

**Ученик:** Харламов Дмитрий

**Преподователь:** Юрий Кучма

**GitHub Pages:** [portfolio-mountains](https://baradatbiu.github.io/portfolio-loftschool/)
[![Build Status](https://travis-ci.com/BARADATbIU/portfolio-loftschool.svg?branch=dev)](https://travis-ci.com/BARADATbIU/portfolio-loftschool)


## Node & NPM

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/)

##  Что бы развернуть проект необходимо:
```sh
$ git clone https://github.com/BARADATbIU/portfolio-loftschool.git
$ cd portfolio-loftschool
$ npm install
```

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev:mpa | Разработка основного сайта. Страницы **обо мне**, **блог** и т.п. Запустит dev сценарии **Gulp**. |
| dev:spa | Разработка админ панели в стиле **SPA** на **Vue.js** |
| build  | Сборка обоих частей проекта. Все файлы будут доступны из директории **dist** |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Что бы запустить скрипт:
```sh
$ npm run имя_скрипта
```
