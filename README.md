## запуск
1. yarn && yarn start:dev

## скрипты автогенерации
в package.json:
```
    "generate:brands": "node --loader ts-node/esm  ./scripts/generate-brands-images-imports.ts",
    "generate:certificates": "node --loader ts-node/esm  ./scripts/generate-certificates-images-imports.ts"
```

перед их использование установить в package.json `"type": "module"`