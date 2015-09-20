let source = 'src/';
let client = source + 'client/';
let server = source + 'server/';
let output = 'dist/';
let generated = 'generated/';

export default {
  root: source,
  generated: generated,
  jsBundle: generated + 'bundle.js',
  js: source + '**/!(*.spec).js',
  jsFiles: source + '**/!(*.spec).js',
  serverJs: server + '**/*.js',
  entries: source + 'index.js',
  clientTests: client + '**/*.spec.js',
  serverTests: server + '**/*.spec.js',
  e2eTests: 'e2e/**/*.js',
  html: source + '**/*.html',
  less: source + '**/*.less',
  css: source + '**/*.css',
  output: output,
  indexHtml: './index.html',
  karmaConf : '/../../karma.conf.js'
};
