My personal website. <br/>

## Dev

prerequisites: `pnpm install` <br/>
development build: `pnpm dev` <br/>
local prod build (lint + type-check + build): `pnpm build && pnpm preview` <br/>
prod build: `docker build -t tomasdiblik.cz . && docker run -p 80:20342 tomasdiblik.cz`

TODO:

- Somehow somewhere add section where you can see my 3d models (https://modelviewer.dev/ ??)
