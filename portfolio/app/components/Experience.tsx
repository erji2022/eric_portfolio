'use client';

import { motion } from 'framer-motion';

export default function Experience() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
				>
					Experience
				</motion.h2>

				{/* <div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Scalable Microservices Architecture',
							description: 'Designed and implemented a microservices architecture handling 1M+ daily requests with 99.99% uptime',
							details: [
								'Containerized microservices with Docker and Kubernetes',
								'Implemented service mesh with Istio',
								'Designed event-driven architecture using Apache Kafka',
								'Achieved 40% reduction in response times',
							],
							tech: ['Kubernetes', 'Docker', 'Istio', 'Kafka', 'MongoDB', 'Redis'],
						},
						{
							title: 'Real-time Data Processing Pipeline',
							description: 'Built a robust data processing pipeline handling 5TB+ daily data with sub-second latency',
							details: [
								'Implemented stream processing with Apache Flink',
								'Designed fault-tolerant architecture with automatic failover',
								'Optimized data throughput by 60%',
								'Implemented comprehensive monitoring with Prometheus & Grafana',
							],
							tech: ['Apache Flink', 'AWS Kinesis', 'Prometheus', 'Grafana', 'Python', 'PostgreSQL'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-white dark:bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 text-blue-800 dark:text-blue-300 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div> */}
				<div className="grid grid-cols-1 gap-8">
					{[
						{
							role: 'Software Developer Intern',
							company: 'Netcapital Financial Group – Ulaanbaatar, Mongolia',
							duration: 'May 2024 – Sep 2024',
							description:
									'Contributed to the internal core system and mobile applications of Mongolia’s second-largest non-banking financial group, boosting efficiency and user experience.',
							highlights: [
								'Developed and integrated new modules that improved system efficiency and reduced operational bottlenecks.',
								'Collaborated with cross-functional teams in daily scrum meetings, applying Agile principles to manage deliverables and sprint timelines.',
								'Contributed to full-stack development of mobile applications by translating business requirements into scalable technical solutions.',
								'Planned development timelines and ensured timely delivery of features that aligned with strategic business goals.'
							],
							tech: ['Javascript', 'Oracle', 'Flutter', 'React', 'HTML', 'CSS', 'Ant Design', ],
						},
						{
							role: 'Front End Application Developer',
							company: 'Knowlecy – Toronto, ON',
							duration: 'Jan 2024 – Apr 2024',
							description:
							'Contributed to the development of a GPT-based academic tool, focusing on enhancing usability and implementing advanced front-end features to support academic research workflows.',
							highlights: [
								'Led the integration of new features that improved user engagement and expanded the platform’s capabilities.',
								'Developed advanced front-end functionalities with React and Bootstrap, streamlining PDF uploads and refining UI design for optimal user experience.',
								'Utilized GitHub for precise issue tracking and version control, ensuring clear communication and efficient resolution of development challenges.',
								'Collaborated with both front-end and back-end teams to synchronize development efforts and deliver features aligned with user needs.',
							],
							tech: ['JavaScript', 'HTML', 'CSS', 'React', 'Bootstrap'],
						},
					].map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-white dark:bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
						>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
								{exp.role}
							</h3>
							<p className="text-gray-500 dark:text-gray-400 mb-2">
								{exp.company} • {exp.duration}
							</p>
							<p className="text-gray-600 dark:text-gray-400 mb-6">{exp.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
									Highlights:
								</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
									{exp.highlights.map((point, i) => (
										<li key={i}>{point}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{exp.tech.map((tech, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 bg-blue-500/10 text-blue-800 dark:text-blue-300 rounded-full border border-blue-500/20"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
