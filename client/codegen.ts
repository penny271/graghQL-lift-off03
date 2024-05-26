import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      // * 具体的には、preset オプションは特定の目的に合わせたプリセット設定を提供し、コード生成のための共通パターンを簡単に再利用できるようにします。GraphQL Code Generator にはいくつかのプリセットがあり、一般的に使用されるものの一つが client プリセットです。

      // client プリセット
      // client プリセットは、GraphQL クライアントのためのコードを生成するために設計されています。このプリセットを使用すると、以下のような利点があります：

      // ドキュメントの自動生成: gql タグを使用して定義された GraphQL クエリやミューテーションから型安全なコードを自動生成します。
      // 型定義の生成: TypeScript の型定義を生成して、クエリやミューテーションの型安全性を確保します。
      // 使いやすさ: 生成されたコードは、GraphQL クライアント（例えば Apollo Client）で簡単に使用できる形式になっています。
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
