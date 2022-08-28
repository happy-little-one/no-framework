# No Framework And Build Less

- Without any framework, only lit-html
- Build less, the source code is as the release code.
- No node moudles, use libraries from skypack, so even needn't a gitignore.
- Data driven, but use no reactive libs, when update the store ,just call render again.
- Use any http server to run it, web-dev-server is recommanded.

## folder explaination

- main: entry
- page: pages
- todo: todo domain
  - cpt: components.
  - adt: adapters: such as api and client store
  - mod: models: entities and value objects
  - app: application: user case functions
