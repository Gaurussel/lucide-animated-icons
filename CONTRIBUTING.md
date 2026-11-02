# Contributing

## Adding or changing an icon

- **One file per Lucide icon**: `src/icons/<name>.tsx`, default export
  `createAnimatedIcon({ name: "<name>", render })`. Then run `bun run generate`: it rebuilds `src/icons/index.ts`
  (named exports) and `src/loaders.ts` (lazy loaders, Lucide aliases included). Both are generated — never edit them.
- **After a Lucide upgrade**: bump `lucide-react` in `devDependencies`, run `bun run generate` — it lists the icons
  that are not animated yet — and add a file for each. `every lucide icon is animated` fails until they all exist.
- **Geometry is Lucide's, verbatim**: copy every element of `node_modules/lucide-react/dist/esm/icons/<name>.js`
  (`__iconNode`) with the same tag and geometry attributes, without `key`. Never redraw, merge or split paths; wrap
  parts in `<motion.g>` to move them together. Checked by `<name> keeps lucide geometry`.
- **Animate through `part(...)`** and the helpers in `src/helpers.ts`: `pose(active, options)` builds the `rest`/
  `active` variants (`open` defaults to `active`); `centered`, `edge(x, y)`, `pivot(x, y)` set the transform origin
  (fill-box fractions vs. viewBox px — rotate a bell from its top, a lid from its hinge). Animate transforms,
  `opacity` and `pathLength` only.

## Continuity (checked by `test/continuity.test.tsx`)

- Every keyframe array starts and ends at the rest value: `y: [0, -3, 0]`, `scaleX: [1, 0.6, 1]`,
  `pathLength: [1, 0, 1]` — never `[0, 1]`, which makes the stroke vanish in one frame.
- The first segment of a keyframe array never uses `easeOut`, `linear`, `circOut` or `backOut`; `pose` defaults to
  `easeInOut`.
- `reset: true` / `transitionEnd` only when the end looks identical to rest (full 360° turns). A held pose is a
  scalar value (`pose({ rotate: 90 })`): it holds while hovered and eases back on leave.
- Within one `part(...)`, all transform keyframe arrays (`x`, `y`, `rotate`, `scale*`) have the same length:
  `toTransformVariants` composes them into one `transform`, mismatched lengths fall back to raw variants.
- Do not write `null` first keyframes yourself: `startFromCurrent` turns a rest-equal first keyframe into `null`, so
  a re-hover continues from the current value instead of jumping.

## Style

- A short scene that shows what the icon means, in 2–3 phases, with several parts on their own timing (`times`,
  `delay`, holds via repeated keyframes): save presses, its label slides down, its slot lifts; send pulls back,
  flies out fading, re-enters from the opposite side; mail opens its flap and closes it; eye blinks, then looks
  left and right. A small pull-back before a move is fine; no overshoot past rest or target, no bounce.
- Families share the body motion and give the meaning to the badge: every `file-*` lifts the page, the inner
  symbol does its own thing (check redraws, plus turns, arrow flies out). Copy the scene of an existing relative.
- 0.5–0.9 s per scene; translate up to ~4 units of the 24-unit viewBox, scale 0.6–1.25.
- It must read at 16 px: measure it (below) and keep the score ≥ 0.4. The score under-rates rotations of symmetric
  shapes (`radar`, `radius`, a turning gear) — judge those by eye.

```tsx
import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "send",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ x: [0, -1.5, 9, -7, 0], y: [0, 1.5, -9, 7, 0], opacity: [1, 1, 0, 0, 1] },
					{ duration: 0.75, times: [0, 0.18, 0.55, 0.56, 1] },
				),
			)}
		>
			<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
			<path d="m21.854 2.147-10.94 10.939" />
		</motion.g>
	),
});
```

## Checking

```sh
bun run test -t " (send|save) "
bun run demo
bun run measure send,save
```

`measure` hovers each icon in the running demo (`DEMO_URL`, default `http://127.0.0.1:5173`), rasterizes its frames
and prints the share of stroke pixels that move away from rest (`-1` — the module did not load in time, re-run).
Pass a comma-separated list or a `.txt` file of names; without one it measures all icons (~1 hour). Run one
measurement at a time. Watch the result in the demo, in a visible tab — a hidden tab throttles
`requestAnimationFrame`.

Before a pull request: `bun run generate --check && bun run typecheck && bun run lint && bun run test`.

## Releasing

Releases are published to npm by `.github/workflows/release.yml` when a `v*` tag is pushed. It checks that the tag
matches `package.json`, runs the same gate as CI, publishes with provenance through npm trusted publishing (no npm
token in the repository) and creates a GitHub release. A version with a pre-release suffix (`1.2.0-beta.1`) goes to
the `next` dist-tag, everything else to `latest`.

```sh
npm version minor      # bumps package.json, commits, tags v0.2.0; add the CHANGELOG entry first
git push --follow-tags
```

One-time setup:

1. npm only lets a package that already exists trust a workflow, so publish the first version by hand:
   `bun run build && npm publish --provenance=false` (with 2FA).
2. On npmjs.com → the package → Settings → Trusted publishing, add GitHub Actions: owner `Gaurussel`, repository
   `lucide-animated-icons`, workflow `release.yml`, environment `npm`.
3. In the GitHub repository create the `npm` environment (Settings → Environments); add required reviewers there if
   releases should wait for an approval.
4. Optionally, on npmjs.com set Publishing access to "Require two-factor authentication and disallow tokens", so only
   the workflow can publish.
