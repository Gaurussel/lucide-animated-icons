import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.3, 0.6, 1] };
const mist = (x: number, delay: number) => pose({ x: [0, x, x, 0] }, { ...phase, delay });

export default createAnimatedIcon({
	name: "haze",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, phase))}>
				<path d="m5.2 6.2 1.4 1.4" />
				<path d="M2 13h2" />
				<path d="M20 13h2" />
				<path d="m17.4 7.6 1.4-1.4" />
				<path d="M16 13a4 4 0 0 0-8 0" />
				<path d="M12 5V2.5" />
			</motion.g>
			<motion.path {...part(mist(2, 0))} d="M22 17H2" />
			<motion.path {...part(mist(-2, 0.1))} d="M22 21H2" />
		</>
	),
});
