Allow passing `{ access: ...}` when calling `keystone.extendGraphQLSchema()`. The `types` argument is now a list of objects of the form `{ access: ..., type: ...}`, rather than a list of strings.