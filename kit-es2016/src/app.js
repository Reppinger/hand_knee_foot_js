export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia by committee'
    config.map([
      { route: '',        name: 'welcome', moduleId: './welcome', nav: false, title:'Home' },
      { route: 'welcome', name: 'welcome', moduleId: './welcome', nav: true,  title:'Welcome' },
      { route: 'users',   name: 'users',   moduleId: './users',   nav: true,  title:'Github Users' }
    ])

    this.router = router
  }
}