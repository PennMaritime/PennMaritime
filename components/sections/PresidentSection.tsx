import Image from "next/image";
import type React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const PresidentSection: React.FC = () => {
	return (
		<section
			id="president"
			className="relative min-h-screen overflow-hidden flex flex-col p-4 sm:p-6 lg:p-8"
		>
			{/* President Card Container */}
			<div className="relative flex-1 rounded-2xl sm:rounded-3xl bg-background overflow-hidden">
				{/* Noise/Grain Background */}
				<div className="absolute inset-0 pointer-events-none z-0 opacity-[0.08]">
					<div
						className="w-full h-full"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
							backgroundRepeat: "repeat",
							backgroundSize: "128px 128px",
						}}
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-[98%] lg:max-w-[1600px] xl:max-w-[1800px] mx-auto py-20 min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
					<div className="text-left w-full">
						{/* Tagline */}
						<div className="mb-6">
							<span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
								Words from the President
							</span>
						</div>

						{/* Two Column Layout: Content + Photo */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
							{/* Left Column: Content */}
							<div className="max-w-2xl">
								{/* Main Headline */}
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight">
									<span className="text-muted-foreground">
										Leading the future of
									</span>{" "}
									<span className="font-medium text-primary">
										maritime innovation
									</span>{" "}
									<span className="text-muted-foreground">at Penn.</span>
								</h2>

								{/* President's Message */}
								<div className="space-y-6">
									<p className="text-lg text-muted-foreground leading-relaxed">
										<span className="font-medium text-foreground">
											&ldquo;Maritime@Penn represents more than just a student
											organization
										</span>{" "}
										— it&apos;s a movement to bridge the gap between academic
										excellence and real-world maritime challenges.&rdquo;
									</p>

									<p className="text-base text-muted-foreground leading-relaxed">
										As we navigate an industry worth $14 trillion globally, our
										mission is clear: to cultivate the next generation of
										maritime leaders who will drive innovation, sustainability,
										and growth across all sectors of the blue economy.
									</p>

									<p className="text-base text-muted-foreground leading-relaxed">
										Through our committees, partnerships, and initiatives,
										we&apos;re not just studying the maritime industry —
										we&apos;re actively shaping its future.
									</p>
								</div>

								{/* Signature */}
								<div className="mt-8 pt-6 border-t border-border">
									<div className="flex flex-col space-y-3">
										<div className="flex items-center gap-3">
											<span className="text-lg font-medium text-foreground">
												Luka Adzic
											</span>
											<div className="flex items-center gap-2">
												<a
													href="https://www.linkedin.com/in/lukaadzic/"
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-primary transition-colors"
													aria-label="Visit Luka Adzic's LinkedIn profile"
												>
													<FaLinkedinIn className="w-4 h-4" />
												</a>
												<a
													href="https://github.com/lukaadzic"
													target="_blank"
													rel="noopener noreferrer"
													className="text-muted-foreground hover:text-primary transition-colors"
													aria-label="Visit Luka Adzic's GitHub profile"
												>
													<FaGithub className="w-4 h-4" />
												</a>
											</div>
										</div>
										<span className="text-sm text-muted-foreground">
											Founder & President, Maritime@Penn
										</span>
									</div>
								</div>
							</div>

							{/* Right Column: President Photo */}
							<div className="relative">
								<div className="relative w-full max-w-md mx-auto lg:max-w-none">
									<div className="relative rounded-2xl overflow-hidden">
										<Image
											src="/Luka Adzic.jpeg"
											alt="Luka Adzic, Founder & President of Maritime@Penn"
											className="object-cover aspect-[3/4] bg-muted"
											priority
											width={5000}
											height={5000}
											quality={100}
										/>

										{/* Signature overlay on image for smaller devices */}
										<div className="lg:hidden absolute bottom-4 right-4 w-32 h-16 opacity-80 pointer-events-none">
											<Image
												src="/signature.svg"
												alt="Luka Adzic's signature"
												fill
												className="object-contain invert"
											/>
										</div>
									</div>

									{/* Subtle accent border */}
									<div className="absolute inset-0 rounded-2xl ring-1 ring-primary/10"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Large signature at bottom of entire section - hidden on small devices */}
				<div className="hidden lg:block absolute -bottom-42 rotate-24 -left-48 size-[800px] opacity-5 pointer-events-none">
					<Image
						src="/signature.svg"
						alt="Luka Adzic's signature"
						fill
						className="object-contain invert"
					/>
				</div>
			</div>
		</section>
	);
};

export default PresidentSection;
