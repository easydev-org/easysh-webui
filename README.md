# easysh-webui

The WebUI for **[easysh](../easysh)** — a non-POSIX, flow-first shell. A Svelte 5
+ Vite + Tailwind 4 single-page app: an xterm.js terminal, a Jobs drawer, and a
dataflow **flow graph** (each pipe/redirect/fd as a node, each intermediate
result readable and watchable live), plus session history and a light/dark theme.

It talks to the easysh daemon over HTTP/JSON + SSE + WebSocket, served
same-origin by the daemon.

## Develop

```sh
npm install
npm run dev     # vite dev server on :18501, proxying /api -> :18080
```

## Build

Standalone (into `./dist`):

```sh
npm run build
```

Build straight into the **easysh server's embedded directory**:

```sh
OUT_DIR=../easysh/pkg/webui/dist npm run build
```

The easysh server embeds the built output via `//go:embed all:dist`
(`pkg/webui/webui.go`), and that build is committed there so `go build` needs no
Node. After changing the UI here, rebuild with `OUT_DIR=…` and commit the result
in the easysh repo.
