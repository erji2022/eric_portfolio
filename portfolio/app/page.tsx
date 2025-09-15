'use client';

import { ThemeToggle } from './components/theme/ThemeToggle';
import Experience from './components/Experience';
import Projects from './components/Projects'
import ContactSection from './components/ContactSection';
import LandingPage from './components/LandingPage';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white overflow-x-hidden">
			<ThemeToggle />
			<LandingPage />
			<Experience />
			<Projects />
			<ContactSection />
		</main>
	);
}
