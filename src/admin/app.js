const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    "es-VE",
    "es",
    "es-MX",
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome to Crefinex",
      "Auth.form.welcome.subtitle": "Please sign in to continue",
    },
    es: {
      "Auth.form.welcome.title": "Bienvenido a Crefinex",
      "Auth.form.welcome.subtitle": "Por favor, inicie sesión para continuar",

      "app.components.LeftMenu.navbrand.title": "Panel de Control",
      "app.components.LeftMenu.navbrand.workplace": "Crefinex",
      "crefinex.plugin.name": "Crefinex",
      "upload.form.input.label.file-location": "Ubicación del archivo",
      "upload.form.input.label.folder-location-default-label": "Ubicación del archivo",
      "list.asset.at.finished": "Terminado",
      "upload.header.actions.no-permissions": "Sin permisos",
      "components.Select.placeholder": "Seleccionar",

      cancel: "Cancelar",
      "content-manager.plugin.name": "Content Manager",
      Exercise: "Ejercicio",
      "Exercise Completed": "Ejercicio Completado",
      Lesson: "Lección",
      "Lesson Completed": "Lección Completada",
      Section: "Sección",
      "Section Completed": "Sección Completada",
      User: "Usuario",
      World: "Mundo",
      "World Completed": "Mundo Completado",
      "content-manager.containers.ListPage.table-headers.id": "ID",
      "content-manager.containers.ListPage.table-headers.type": "Tipo",
      "content-manager.containers.ListPage.table-headers.lesson": "Lección",
      "content-manager.containers.ListPage.table-headers.order": "Orden",
      createdAt: "Creado",
      updatedAt: "Actualizado",
      publishedAt: "Publicado",
      id: "ID",
      type: "Tipo",
      lesson: "Lección",
      order: "Orden",

      "content-manager.containers.ListPage.table-headers.actions": "Acciones",
      "plugin::crefinex.exercise": "Ejercicio",
      "plugin::crefinex.lesson": "Lección",
      "plugin::crefinex.section": "Sección",
      "plugin::crefinex.world": "Mundo",
      "plugin::users-permissions.user": "Usuario",
      "plugin::crefinex.world-completed": "Mundo Completado",
      "plugin::crefinex.lesson-completed": "Lección Completada",
      "plugin::crefinex.section-completed": "Sección Completada",
      "plugin::crefinex.exercise-completed": "Ejercicio Completado",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
