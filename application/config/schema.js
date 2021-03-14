module.exports = {
  environment: { doc: 'Environment', default: 'development', format: String },
  api: {
    port: { doc: 'API port', default: 8080, format: 'port' }
  },
  database: {
    username: { doc: 'database username', default: '', format: String },
    password: { doc: 'database password', default: '', format: String },
    database: { doc: 'database schema', default: '', format: String },
    host: { doc: 'database host', default: '127.0.0.1', format: String },
    dialect: { doc: 'database dialect', default: 'mysql', format: String }
  },
  auth: {
    secret: { doc: 'Secret to generato token', default: '', format: String },
    algorithms: { doc: 'Algorithm to JWT token', default: '', format: Array }
  }
};
