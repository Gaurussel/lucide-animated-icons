import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const card = (delay: number) =>
	pose({ y: [0, 1, -5, 0] }, { duration: 0.5, delay, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "folder-kanban",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.5, 0.75))}
				d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(card(0))} d="M8 10v4" />
			<motion.path {...part(card(0.08))} d="M12 10v2" />
			<motion.path {...part(card(0.16))} d="M16 10v6" />
		</>
	),
});
