import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const timing = { duration: 0.65, times: [0, 0.25, 0.6, 1] };
const head = (delay: number) => pose({ x: [0, 1.5, -2.5, 0] }, { ...timing, delay });

export default createAnimatedIcon({
	name: "reply-all",
	render: (part) => (
		<>
			<motion.path {...part(head(0.1))} d="m12 17-5-5 5-5" />
			<motion.path {...part(pose({ x: [0, 0.8, -1, 0] }, timing))} d="M22 18v-2a4 4 0 0 0-4-4H7" />
			<motion.path {...part(head(0))} d="m7 17-5-5 5-5" />
		</>
	),
});
