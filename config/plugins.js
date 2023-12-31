module.exports = {
  // ...
  crefinex: {
    enabled: true,
    resolve: "./src/plugins/crefinex",
  },
  graphql: {
    enabled: true,

    config: {
      playgroundAlways: false,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
      shadowCRUD: true,
    },
  },
  "expo-notifications": {
    enabled: true,
  },
  // Step 1: Configure the redis connection
  // @see https://github.com/strapi-community/strapi-plugin-redis
  // redis: {
  //   config: {
  //     connections: {
  //       default: {
  //         connection: {
  //           host: "127.0.0.1",
  //           port: 6379,
  //           db: 0,
  //         },
  //         settings: {
  //           debug: false,
  //         },
  //       },
  //     },
  //   },
  // },
  // // Step 2: Configure the redis cache plugin
  // "rest-cache": {
  //   config: {
  //     provider: {
  //       name: "redis",
  //       options: {
  //         max: 32767,
  //         connection: "default",
  //       },
  //     },
  //     strategy: {
  //       enableEtagSupport: true,
  //       logs: true,
  //       clearRelatedCache: true,
  //       maxAge: 3600000,
  //     },
  //   },
  // },
  // ...
};
