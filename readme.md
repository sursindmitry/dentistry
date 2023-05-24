# Стажировка

## Собрать самому проект
### Создать локальную базу данных
    docker run --name dentistry -e POSTGRESQL_USERNAME=root -e POSTGRESQL_PASSWORD=root -e POSTGRESQL_DATABASE=dentistry -p 15432:5432 bitnami/postgresql:11

#### Сборка фронтенд части в target:
`build-frontend`

#### Создание докер образа проекта
`jib-push-to-local`
#### Собрать два докер образа
`docker compose up`

---
## Без сборки проекта
#### Загрузить проект из docker hub
`docker pull dmitrysursin/springboot-react-fullstack`
#### Загрузить базу данных
`docker pull bitnami/postgresql`
#### Собрать два докер образа
`docker compose up`

