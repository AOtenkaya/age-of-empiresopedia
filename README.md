# age-of-empiresopedia

## Dev Progress And Short Explanation


1. This test case project was developed with vue, vuex, vue-router and vuetify.

2. As requested there are 3 pages: Home, Unit List, and Unit Details. I made 3 views for them and only Home View directly has a view code inside.
Other views have containers inside them and components inside their containers.

3. I used NavigationBar container and router view on my App.vue so I don't repeat the navigation code on every page. I hesitated to decide NavigationBar should
be a component or container but since it has router interactions I decided to make it a container after my research.

4. I used components as reusable if needed on other pages. Datatable component shows data sent to it and only handles row clicks. Filters component shows
2 types of filters and set their value with emitting prop of filters come to it.

5. I hold the unit data inside a JSON inside assets/data. I was told to use data from the store and any request for data is not needed. So I took unitData from that JSON
and set it to store and use it in needed places from there.

6. I did my best to use BEM notation as correctly as I could and didn't leave any inline CSS. I also didn't use Vuetify classes since I'm already writing BEM notation custom CSS i don't like using my own CSS with ui package CSS together so I wrote my own CSS. I only used Vueteify for the data table, checkbox, and range sliders. I also tried my best to make it responsive. It would be a lot easier to do it with Vuetify classes but since I wanted to write the whole CSS myself i didn't use them and used media queries.

7. I also tried my best to keep test coverage high. I only had one problem with the UnitDetailsContainer file. It had router params in it and even if I mock the router
and params inside it kept giving an error and couldn't reach it so I removed it.

8. In my jest unit test experience we always wrote tests for the script side. I know it's a viable option to make dom checks on jest tests too but I feel like it's more End-to-end testing job to do that generally and because of this I only wrote dom checking tests for 3 views which only render components or basic code inside them.

It was quite a fun and learning experience in some aspects for me. Thank you for the time in advance to check the project. Also, I sincerely thank Adesso for the good feeling and joyful experience from the beginning with the HR and team speaking sides.

P.S: I also deployed my project on gh-pages and you can access it from [https://aotenkaya.github.io/age-of-empiresopedia/](https://aotenkaya.github.io/age-of-empiresopedia/). It's working just fine but I'm also aware of It has 404 problems on page refreshes except the home page. I'm aware of the problem and it originated from the history mode of the v-router there are some tricks to solve it and I'm gonna do my research on it but for now, I wanted to push and publish it.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
npm run test:unit
```

### Run your tests with coverage rates
```
npm run test:unit --coverage
```
