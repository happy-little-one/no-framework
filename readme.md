# No Framework And Build Less

- Without any framework, only lit-html
- Build less, the source code is as the release code.
- No node moudles, use libraries from skypack, so even needn't a gitignore.
- Data driven, but use no reactive libs, when update the store ,just call render again.
- Use any http server to run it, web-dev-server is recommonded.

## folder

- cpt: components
- adt: adapters, such as api and froent end store
- mod: entities and value objects
- app: user case functions
