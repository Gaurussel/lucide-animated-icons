import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const squeeze = (delay: number) => pose({ scale: [1, 0.5, 1] }, { duration: 0.35, delay });

export default createAnimatedIcon({
	name: "layout-grid",
	render: (part) => (
		<>
			<motion.rect {...part(squeeze(0))} height="7" rx="1" style={edge(1, 1)} width="7" x="3" y="3" />
			<motion.rect {...part(squeeze(0.12))} height="7" rx="1" style={edge(0, 1)} width="7" x="14" y="3" />
			<motion.rect {...part(squeeze(0.24))} height="7" rx="1" style={edge(0, 0)} width="7" x="14" y="14" />
			<motion.rect {...part(squeeze(0.36))} height="7" rx="1" style={edge(1, 0)} width="7" x="3" y="14" />
		</>
	),
});
