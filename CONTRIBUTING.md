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

- **A tiny story in 2–3 beats where the parts react to each other**, cause → effect: the key turns, then the shackle
  pops; the drop falls, then the cup ripples; the arrow pulls back, dashes out and comes back from the other side.
  A small wind-up, the main move, then a part that lags or wobbles after the rest has stopped; offset parts by
  ~60–120 ms instead of moving everything as one block. A scene that only shakes, hops, pulses or squashes the whole
  icon is not enough. A single-path icon can still tell a story: the stroke traces itself while it moves, flips or
  swings on a pivot.
- **Land with the trick that suits the icon**, from `src/helpers.ts`:
  - `springy` (or `ring`, `rubber`) as the last ease — a damped spring with 2–3 oscillations. For things that swing,
    turn or stretch: bell, gear, refresh, history, search, pencil, link.
  - `jelly(at, duration)` on a container — it wobbles when something lands on it: trash, archive, folder, mail,
    download tray, lock, pin.
  - `redraw(delay, duration)` on a path — it draws itself in again. For something that appears: the copied sheet, the
    upload arrow, a check, heading digits.
  - `hop(duration)` on a wrapper around the whole icon — the icon pops. For actions: send, plus, star, external-link.
- Start a move with `snap`, dash with `easeIn`; pass one ease per segment.
- Families share the body motion and give the meaning to the badge: every `file-*` lifts the page, the inner
  symbol does its own thing (check redraws, plus turns, arrow flies out). Copy the scene of an existing relative.
- 0.65–0.75 s per scene; give the final spring at least ~40 % of it, and avoid a large move on the first frame (a
  `snap` segment shorter than ~0.12 s jerks); translate up to ~6 units of the 24-unit viewBox (an exit can fly further while it fades),
  scale 0.5–1.3. Turns end on a full 360° with `reset: true`, even for symmetric shapes.
- It must read at 16 px: measure it (below) and keep the score ≥ 0.4. The score under-rates rotations of symmetric
  shapes (`radar`, `radius`, a turning gear) — judge those by eye.

```tsx
import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose({ y: [0, -6, 0], rotate: [0, -35, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "trash-2",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.38, 0.65))} style={edge(0.5, 1)}>
				<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
				<line x1="10" x2="10" y1="11" y2="17" />
				<line x1="14" x2="14" y1="11" y2="17" />
			</motion.g>
			<motion.g {...part(lid)} style={pivot(3, 6)}>
				<path d="M3 6h18" />
				<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
			</motion.g>
		</>
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
