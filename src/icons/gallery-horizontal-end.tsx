import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const card = (x: number, delay: number) =>
	pose({ x: [0, -1, x, x, 0] }, { duration: 0.8, delay, times: [0, 0.18, 0.5, 0.65, 1] });

export default createAnimatedIcon({
	name: "gallery-horizontal-end",
	render: (part) => (
		<>
			<motion.path {...part(card(1.5, 0.12))} d="M2 7v10" />
			<motion.path {...part(card(1.5, 0.06))} d="M6 5v14" />
			<motion.rect {...part(card(2.5, 0))} height="18" rx="2" width="12" x="10" y="3" />
		</>
	),
});
