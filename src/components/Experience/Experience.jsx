import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import exp from "../../assets/exp.png";

const Experience = () => {
	return (
		<div>
			<div className='container py-14'>
				<div className='space-y-2 text-center max-w-[350px] mx-auto mb-8'>
					<motion.h1
						variants={SlideUp(0.2)}
						initial='initial'
						whileInView={"animate"}
						className='text-3xl font-bold font-serif'
					>
						EXPERIENCE
					</motion.h1>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					<div className='flex flex-col justify-center'>
						<motion.img
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							src={exp}
							alt='Experience'
							className='w-[95%] md:w-full mx-auto'
						/>
					</div>
					<div className='space-y-5 flex justify-center flex-col xl:max-w-[500px]'>
						<motion.h1
							variants={SlideUp(0.2)}
							initial='initial'
							whileInView='animate'
							className='text-2xl font-bold font-serif'
						>
							Frontend Developer at CubexO Software Solutions
						</motion.h1>
						<motion.p
							variants={SlideUp(0.2)}
							initial='initial'
							whileInView='animate'
							className='text-sm text-gray-400 font-serif'
						>
							January 2024 – Present | Indore, India
						</motion.p>
						<motion.h1
							variants={SlideUp(0.2)}
							initial='initial'
							whileInView='animate'
							className='text-xl font-bold font-serif'
						>
							Projects Worked On:
						</motion.h1>
						<motion.p
							variants={SlideUp(0.4)}
							initial='initial'
							whileInView='animate'
							className='text-gray-500 text-sm leading-7'
						>
							<strong>Procmart:</strong> Developed an e-commerce platform with
							React.js and Redux, implementing dynamic product filtering, cart
							functionality, and a smooth checkout experience. The project
							optimized the frontend performance, reducing load times by 25% and
							improving user interaction.
						</motion.p>
						<motion.p
							variants={SlideUp(0.4)}
							initial='initial'
							whileInView='animate'
							className='text-gray-500 text-sm leading-7'
						>
							<strong>Datatude - Camera Recording Management System:</strong>{" "}
							Built a web-based camera management system with Vue.js, enabling
							users to manage camera feeds, view recordings, and access
							real-time data analytics. The system streamlined camera
							monitoring, improving management efficiency by 30%.
						</motion.p>
						<motion.p
							variants={SlideUp(0.4)}
							initial='initial'
							whileInView='animate'
							className='text-gray-500 text-sm leading-7'
						>
							Integrated real-time data analytics into both projects, ensuring
							users had live updates on actions such as purchase confirmations
							on Procmart and camera feed status on Datatude.
						</motion.p>
						<motion.p
							variants={SlideUp(0.4)}
							initial='initial'
							whileInView='animate'
							className='text-gray-500 text-sm leading-7'
						>
							Led front-end development using modern technologies such as
							React.js, Vue.js, and CSS3, working closely with backend
							developers to ensure smooth data integration and API communication
							for both projects.
						</motion.p>
						<motion.p
							variants={SlideUp(0.4)}
							initial='initial'
							whileInView='animate'
							className='text-gray-500 text-sm leading-7'
						>
							Collaborated in Agile development cycles, ensuring projects were
							delivered on time and met client requirements effectively.
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
