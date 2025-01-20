### 1. Next.js 프로젝트 설치

```bash
pnpm create next-app@latest
```

### Next.js 프로젝트 실행

```bash
pnpm run dev
```

### 2. shadcn-ui 설정

npm 사용 시

```bash
npx shadcn@latest init
```

pnpm 사용 시

```bash
pnpm dlx shadcn@latest init
```

[Next.js](https://ui.shadcn.com/docs/installation/next)

**✅ Shadcn-ui 선택 추가**

npm 사용 시

```bash
npx shadcn@latest add
```

pnpm 사용 시

```bash
pnpm dlx shadcn@latest add
```

스페이스로 설치할 컴포넌트를 선택하고 엔터를 눌러 설치하면 됩니다.

<br/>

**✅ Shadcn-ui 모두 설치**

npm 사용 시

```bash
npx shadcn@latest -all
```

pnpm 사용 시

```bash
pnpm dlx shadcn@latest -all
```

Sahdcn-ui 설정

[Next.js](https://ui.shadcn.com/docs/installation/next)

### 3. Tailwind + Prettier 설정

https://github.com/tailwindlabs/prettier-plugin-tailwindcss

npm 사용 시

```bash
npm install -D prettier-plugin-tailwindcss
```

pnpm 사용 시

```bash
pnpm add -D prettier-plugin-tailwindcss
```

[Editor Setup - Tailwind CSS](https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier)

.prettierrc 파일 생성 후 플러그인추가

```json
// .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["clsx"]
}
```

위 설정을 통해 clsx 나 cva 를 이용할 때도 Sorting이 가능합니다!

### 4. Tailwind **Preprocessors 설정**

Tailwind를 새로운 프로젝트에 사용하고 있으며 기존 Sass/Less/Stylus 스타일시트와 통합할 필요가 없다면, 별도의 전처리기를 사용하는 대신 다른 PostCSS 플러그인을 사용하여 사용하는 전처리기 기능을 추가하는 것을 적극 고려해야 합니다.

<aside>
⚠️

Tailwind 에서 권장하지 않는다고는 하나 별도의 스타일을 지정할 수 있어야 하는 경우가 많기 때문에 사용합니다. 해당설정은 Tailwind 4.0 에서 기본 지원되는 형태로 변경되기 때문에 4.0 버전을 사용한다면 적용하지 않아도 됩니다.

</aside>

Tailwind CSS 4.0 변경사항 문서 링크

[Tailwind CSS v4.0 Beta - Tailwind CSS](https://tailwindcss.com/docs/v4-beta#whats-new-in-v4-0)

npm 사용 시

```bash
npm install -D postcss-import postcss-nesting autoprefixer
```

pnpm 사용시

```bash
pnpm add -D postcss-import postcss-nesting autoprefixer
```

```tsx
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

[Using with Preprocessors - Tailwind CSS](https://tailwindcss.com/docs/using-with-preprocessors)

Autoprefixer 관련 내용

[Browser Support - Tailwind CSS](https://tailwindcss.com/docs/browser-support#vendor-prefixes)