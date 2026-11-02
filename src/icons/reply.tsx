import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const timing = { duration: 0.65, times: [0, 0.25, 0.6, 1] };

export default createAnimatedIcon({
	name: "reply",
	render: (part) => (
		<>
			<motion.path {...part(pose({ x: [0, 0.8, -1, 0] }, timing))} d="M20 18v-2a4 4 0 0 0-4-4H4" />
			<motion.path {...part(pose({ x: [0, 1.5, -2.5, 0] }, timing))} d="m9 17-5-5 5-5" />
		</>
	),
});
