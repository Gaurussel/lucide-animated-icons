import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const card = (y: number, delay: number) =>
	pose({ y: [0, -1, y, y, 0] }, { duration: 0.8, delay, times: [0, 0.18, 0.5, 0.65, 1] });

export default createAnimatedIcon({
	name: "gallery-vertical-end",
	render: (part) => (
		<>
			<motion.path {...part(card(1.5, 0.12))} d="M7 2h10" />
			<motion.path {...part(card(1.5, 0.06))} d="M5 6h14" />
			<motion.rect {...part(card(2.5, 0))} height="12" rx="2" width="18" x="3" y="10" />
		</>
	),
});
