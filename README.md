# Стартовый шаблон для адаптивной верстки сайтов с помощью Twig - шаблонизатора PHP

Автор сборки: **Курочка Всеволод**

Чистые, готовые к бою HTML5 шаблоны (CSS и SASS), предназначенные для ускорения разработки современных адаптивных сайтов. Шаблоны содержат наиболее используемые и актуальные компоненты.

Шаблоны поддерживаются и регулярно обновляются, перед стартом проекта - рекомендую скачать новую версию.

## Что вошло в последнюю сборку:
1. Стартовая структура файлов, принятая большинством Front-End разработчиков.
2. Индексный PHP файл `app/index.php`, с подключением Twig и рендерингом `site/index.twig`
3. (SASS) файлы - `app/assets/src/sass`
4. Изображения - `app/assets/src/img`
5. Скрипты, которые обрабатываются <b>gulp-babel</b> - `app/assets/src/babel`
6. Библиотеки, которые обрабатываются <b>скриптами по минификации</b> - `app/assets/src/libs`

## Как запустить сборку

### Запустить OpenServer

### Склонировать папку в C:\OSPanel\domains (по умолчанию)
```
git clone https://github.com/VsevolodKurochka/twig-starter.template
```

### Зайди в папку
```
cd twig-starter.template
```

### Установите все зависимости (убедитесь, что **Node.js** и **NPM** установлен на вашем компьютере)
```
npm install
```

### Перейти в папку 'tasks' и открыть файл 'browserSync.js' и если нужно, то поменять на 26 строке proxy(по умолчанию: twig-starter.template)

### Запустить проект
```
gulp
```

Если есть вопросы - пишите **seva.kurochka@gmail.com**