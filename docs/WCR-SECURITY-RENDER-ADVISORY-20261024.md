# WCR: Render advisory response, ColonAiQ Asia

Date: 2026-10-24 (Singapore). Status: GREEN for this static site build update.

## Baseline and scope

Render warned about compromised eMudhra intermediate keys, Node.js security flaws, and PHP2Shell. This Netlify site is a static Vite build with zero published functions. Its repository pinned Node 18 in .nvmrc and netlify.toml. A Netlify NODE_VERSION setting of 22.23.4 did not override .nvmrc.

## Action and production evidence

- GitHub commit a69d4aa changed .nvmrc and netlify.toml to Node 22.23.4 and updated README.
- The first build, 6adc3e977e49142ea3fce086, failed because the browser upload gave .nvmrc CRLF line endings. Commit 4145bc4 corrected the file to LF with one version line.
- Netlify published deploy 6adc3efa4eb861e21ecf4110 at 2026-10-24T05:15:50Z. Its build log says: Now using node v22.23.4. It has zero functions.
- https://www.colonaiq-asia.com/ returned HTTP 200 after publication. No credentials or regulated claims were changed.

## Residual and next CTW prompt

The site has no live Node or PHP runtime. This review did not inspect every historical deploy preview or perform a forensic breach investigation. If a future Netlify build fails or reports an older Node version, inspect .nvmrc line endings and build precedence, correct the pin, rebuild, verify the published URL, and record the deploy ID. Stay in scope; do not touch files or behaviour outside this CTW.

Sources: https://render.com/docs/advisory-emudhra ; https://nodejs.org/en/blog/vulnerability/october-2026-security-releases ; https://docs.netlify.com/build/configure-builds/available-software-at-build-time/ .
