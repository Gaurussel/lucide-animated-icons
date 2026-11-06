# Changelog

## 0.2.4

- Calmer scenes, closer to Telegram: every move is about 40 % smaller, `springy`, `ring` and `rubber` settle with a
  smaller overshoot, `hop` and `jelly` are gentler.
- Only icons that rotate by meaning (clocks, gears, refresh, loaders) still make a full turn; the rest tilt instead
  of spinning, `star` among them.

## 0.2.3

- With the system's reduce-motion setting an icon stays static. Before, only transforms were dropped and stroke
  redraws (`redraw`, `pathLength`) still played.

## 0.2.2

- `lucide-animated-icons/core`: the runtime (`createAnimatedIcon`, `createLazyAnimatedIcon`, the trigger hub, context and
  hook) without the icons. The package root re-exports every icon, so a bundler has to parse all 1611 of them for any
  import from it; importing the runtime from `core` skips that.
- `createLazyAnimatedIcon` is also exported from `core`; `lucide-animated-icons/dynamic` still exports it.

## 0.2.1

- The plus and the x no longer spin like a propeller: the plus nods and springs back, the x strikes through stroke by
  stroke. The same goes for every icon that carries a plus or an x badge.

## 0.2.0

- Every icon has a new playful scene: a short cause → effect story that lands on a damped spring, with jelly, redraw
  or hop where they fit.
- A hover animation plays to the end after the pointer leaves, like Telegram menus.
- `lucide-animated-icons/helpers`: `snap`, `spring(damping, oscillations)` with the `springy`, `ring` and `rubber`
  presets, `jelly`, `hop` and `redraw`; `PoseOptions` is exported.

## 0.1.0

- Hover animations for all 1611 Lucide 0.525 icons, named exports for every Lucide name and alias.
- `useAnimatedIconTrigger` and `AnimatedIconTriggerContext` to drive icons from buttons and menu items.
- `lucide-animated-icons/dynamic`: lazy loading by name with a static fallback.
- `lucide-animated-icons/helpers` and `createAnimatedIcon` for custom icons.
