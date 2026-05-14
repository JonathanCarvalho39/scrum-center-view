# Scrum Center View

Frontend da aplicação Scrum Center construído com React, Vite e TypeScript seguindo arquitetura feature-based.

## 🏗️ Arquitetura

Este projeto segue uma arquitetura **feature-based** para melhor organização e escalabilidade:

```
/src/
  features/        # módulos por domínio (auth, users, etc.)
    feature-name/
      components/  # Componentes específicos da feature
      hooks/       # Hooks customizados
      api/         # Chamadas à API
      types.ts     # Types específicos
  shared/          # Componentes e hooks reutilizáveis
    components/
    hooks/
    lib/           # Configurações (queryClient, etc.)
  pages/           # Composição de features em rotas
  app/             # Router, providers, configuração global
  types/           # Types globais e API gerada
```

## 🚀 Stack Tecnológica

- **React 18** - UI library
- **Vite** - Build tool e dev server
- **TypeScript** - Type safety
- **React Router** - Roteamento
- **React Query (TanStack Query)** - Server state management
- **Zustand** - Global state management
- **Jest + React Testing Library** - Testing
- **Fetch API nativo** - HTTP client (sem Axios)

## 📋 Pré-requisitos

- Node.js 18+ e npm/yarn/pnpm
- Backend rodando em http://localhost:8080

## ⚙️ Configuração

1. Clone o repositório:
```bash
git clone https://github.com/JonathanCarvalho39/scrum-center-view.git
cd scrum-center-view
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Copie o arquivo de ambiente:
```bash
cp .env.example .env
```

4. Edite o `.env` se necessário

## 🏃 Executando

### Modo desenvolvimento
```bash
npm run dev
```

Acesse: http://localhost:5173

### Build para produção
```bash
npm run build
```

### Preview do build
```bash
npm run preview
```

## 🧪 Testes

### Executar todos os testes
```bash
npm test
```

### Testes em modo watch
```bash
npm run test:watch
```

### Coverage
```bash
npm run test:coverage
```

### Estratégia de TDD

| Tipo | Ferramenta | O que testa |
|------|-----------|-------------|
| Unitário (hooks) | Jest + `@testing-library/react-hooks` | Lógica isolada de hooks |
| Componente | Jest + React Testing Library | Comportamento do componente |
| Integração | Jest + MSW | Feature completa com API mockada |
| E2E | Playwright | Fluxos críticos ponta-a-ponta |

## 🔄 Sincronização de Types

Os types TypeScript são gerados automaticamente a partir do OpenAPI spec do backend:

```bash
npm run gen:types
```

Isso gera `src/types/api.ts` baseado em `http://localhost:8080/docs/swagger.yaml`

## 🎨 Formatação e Linting

```bash
# Formatar código
npm run format

# Executar linter
npm run lint
```

## 📦 State Management

### Zustand (Global State)
Para estado global leve como autenticação e preferências de UI:

```typescript
// shared/lib/stores/authStore.ts
import { create } from 'zustand'

interface AuthState {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
}))
```

### React Query (Server State)
Para cache, refetch e loading/error states de dados do servidor:

```typescript
// features/users/hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/usersApi'

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
```

## 🔐 Autenticação

- Access token armazenado em memória (Zustand) - **não em localStorage**
- Refresh token em cookie `HttpOnly` gerenciado pelo backend
- Interceptor para renovação automática de tokens

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
