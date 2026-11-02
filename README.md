# lucide-animated-icons

Hover animations for every [Lucide](https://lucide.dev) icon (1611 icons, Lucide 0.525), built on
[Motion for React](https://motion.dev). Each icon plays a short scene that shows what it means — a bell rings,
a plane flies off and comes back, an eye blinks and looks around — and always returns to the exact Lucide shape.

- Same geometry and default attributes as `lucide-react`, so an animated icon is a drop-in replacement.
- Animates only inside a trigger (a button, a menu item). Outside one it renders a plain static SVG and creates no
  Motion state.
- Every icon is its own module: import one icon, or lazy-load them by name and pay only for the icons that are
  actually hovered.
- Respects `prefers-reduced-motion`.

## Install

```sh
bun add lucide-animated-icons motion react
```

Peer dependencies: `react` ≥ 18, `motion` ≥ 12. The package is ESM-only.

## Usage

An icon animates while its trigger is hovered, focused with the keyboard, or open:

```tsx
import { AnimatedIconTriggerContext, Bell, useAnimatedIconTrigger } from "lucide-animated-icons";

const NotificationsButton = () => {
	const { hub, handlers } = useAnimatedIconTrigger<HTMLButtonElement>();
	return (
		<AnimatedIconTriggerContext.Provider value={hub}>
			<button type="button" {...handlers}>
				<Bell width={16} height={16} />
				Notifications
			</button>
		</AnimatedIconTriggerContext.Provider>
	);
};
```

`useAnimatedIconTrigger(options)` returns:

- `handlers` — `onPointerEnter`, `onPointerLeave`, `onFocus`, `onBlur`. Pass your own handlers in `options`; they
  still run.
- `setOpen(open)` — holds the `open` pose while a menu or popover owned by the trigger is open.
- `hub` — the value for `AnimatedIconTriggerContext`. Every animated icon below the provider follows it.

Focus animates only on `:focus-visible`; pass `{ focus: "always" }` to animate on any focus.

Icons accept `className`, `style`, `width`, `height`, `strokeWidth` and `viewBox`, and forward a ref to the `<svg>`.

### Deep imports

Named exports are tree-shakeable. A deep import skips the barrel entirely, which keeps dev servers fast:

```ts
import Bell from "lucide-animated-icons/icons/bell";
```

### Lazy loading by name

When icons are chosen at runtime (from config, from a CMS), render the static Lucide icon and load the animated
one on the first hover:

```tsx
import { getLazyAnimatedIcon } from "lucide-animated-icons/dynamic";
import { Bell } from "lucide-react";

const LazyBell = getLazyAnimatedIcon("bell", Bell);
```

`animatedIconLoaders` maps every Lucide name, aliases included (`alert-circle`, `filter`), to a dynamic import.
`createLazyAnimatedIcon(name, load, Fallback)` does the same for a loader of your own.

### Your own icons

`createAnimatedIcon` and the motion helpers are public; see [CONTRIBUTING.md](CONTRIBUTING.md) for how an icon is
built:

```tsx
import { createAnimatedIcon } from "lucide-animated-icons";
import { edge, pose } from "lucide-animated-icons/helpers";
import { motion } from "motion/react";

export const Flag = createAnimatedIcon({
	name: "my-flag",
	render: (part) => (
		<motion.g {...part(pose({ rotate: [0, -12, 8, 0] }, { duration: 0.6 }))} style={edge(0, 1)}>
			<path d="M4 22V4" />
			<path d="M4 4h12l-2 4 2 4H4" />
		</motion.g>
	),
});
```

## Development

```sh
bun install
bun run demo       # gallery of all icons at http://localhost:5173
bun run test       # geometry, continuity and runtime tests
bun run lint
bun run typecheck
bun run build
```

[CONTRIBUTING.md](CONTRIBUTING.md) covers adding and changing icons, the animation rules the tests enforce, and
how to measure that a motion reads at 16 px.

## License

ISC. Icon geometry comes from Lucide, also ISC; see [LICENSE](LICENSE).
