import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const HomeCaseStudies = () => {
    return (
        <section className="py-24 border-t border-grid-light overflow-hidden bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-sm font-mono text-[#F5731B] mb-4 uppercase tracking-widest">[ Case Studies ]</h2>
                        <h3 className="text-3xl font-display font-bold uppercase text-gray-900">Recent Deployments</h3>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[#F5731B] hover:text-white hover:border-[#F5731B] transition-all">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[#F5731B] hover:text-white hover:border-[#F5731B] transition-all">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Case 1 */}
                    <article className="group cursor-pointer">
                        <div className="relative h-[400px] overflow-hidden bg-gray-200 mb-6 border border-transparent group-hover:border-[#F5731B] transition-all">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLSo9aJViDnOyHbnV7xovc1uFKTV-0q_dKWFGOAW65ajhsAXtYUKUZAuFqzwothpngAnvS2Xw92nmKJEF4D9MEk-LclRXFmtXG3GWdUPeFU4frt-DJkbdoyc2C8cleYCAnEgSX-8EVBmN2EjnoiikEg308aVASXvR47mc_AbLIpKnotdBq1dHcVrVsXQkYfKdhX-xG5PQ0VkTwclQXhX75IihmABELOXH789l4MwTB8z4cXI02yaSyc-wzzLtfTSpZdF7efrHetMJm"
                                alt="Cybernetic face mask"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute bottom-0 left-0 bg-white px-4 py-2 text-xs font-mono border-t border-r border-[#F5731B] text-[#F5731B]">
                                [2023]
                            </div>
                        </div>
                        <h4 className="text-2xl font-display font-bold mb-2 text-gray-900 group-hover:text-[#F5731B] transition-colors">Project: AETHER</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Fintech • AI Security</p>
                        <p className="text-gray-600 text-sm line-clamp-2">Implemented a quantum-resistant encryption layer for a global banking network.</p>
                    </article>

                    {/* Case 2 */}
                    <article className="group cursor-pointer">
                        <div className="relative h-[400px] overflow-hidden bg-gray-200 mb-6 border border-transparent group-hover:border-[#F5731B] transition-all">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV6sXxclvKhydZMJKSk-TWTFwRsFtD-cI6MzvwEb4KgVaXczjCT5HStLzqEFR8JdK57SRG6Cen3qRL3DtTwpZybLskl8Yo0d6lDsFmVvZBow8B_i4OGOoBl6yb4D8YAjmx5UlDkPqfTdWmho5TePSkTd39FTw22IiG6liQXy0rjLwEdbvaEv7fwehLpPQ_PsQ6R4B8hTJiyHT0jJf_zYpKPaOD4lkUl1_XiTvazPEZbZfH9uR0sDhiyiJVqF1uWXYAYCfukDXrQaAb"
                                alt="Mechanical Robot Arm"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute bottom-0 left-0 bg-white px-4 py-2 text-xs font-mono border-t border-r border-[#F5731B] text-[#F5731B]">
                                [2024]
                            </div>
                        </div>
                        <h4 className="text-2xl font-display font-bold mb-2 text-gray-900 group-hover:text-[#F5731B] transition-colors">Project: TITAN</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Manufacturing • Robotics</p>
                        <p className="text-gray-600 text-sm line-clamp-2">Autonomous assembly line orchestration using computer vision and edge computing.</p>
                    </article>

                    {/* Case 3 */}
                    <article className="group cursor-pointer hidden lg:block">
                        <div className="relative h-[400px] overflow-hidden bg-gray-200 mb-6 border border-transparent group-hover:border-[#F5731B] transition-all">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARZ6xShkRxTi_0qXK_H8hNDGhV_2n-cTo4e8Ggi9js3gGo48CFoJvE2jbsGmrbYa1qPhTw7YpZePSdPIjN-DuWPP6nLRdWsG2rfxx4tuUFup5vo3C6PgEyS0GMYbm2e_P5yECzMeRwrZyL2D0KWha8k7oSx1K7EVbFHOb_K-P0K0TIM7ogBuobqUtD3p2S0gfM3ptrHfNQUDMgmUtQb0uvOlkUqPNI0QtPw9e2vfQ3Ltj2uduFqal6sWjOLTj3r6ILWyrN6nGMfEh9"
                                alt="Abstract digital network"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute bottom-0 left-0 bg-white px-4 py-2 text-xs font-mono border-t border-r border-[#F5731B] text-[#F5731B]">
                                [2023]
                            </div>
                        </div>
                        <h4 className="text-2xl font-display font-bold mb-2 text-gray-900 group-hover:text-[#F5731B] transition-colors">Project: NEXUS</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Logistics • Data Analysis</p>
                        <p className="text-gray-600 text-sm line-clamp-2">Predictive supply chain modeling reducing waste by 34% annually.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};
