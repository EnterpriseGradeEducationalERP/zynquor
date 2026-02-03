import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTABanner = () => {
    return (
        <section className="relative py-32 bg-primary overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />

            {/* Abstract Shapes */}
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-full h-full opacity-20"
                style={{ backgroundImage: "linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)", backgroundSize: "60px 60px", backgroundPosition: "0 0, 30px 30px" }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase text-white mb-8 leading-tight">
                    Let’s Architect <br /> What Comes Next.
                </h2>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                    If you’re scaling, you don’t need more vendors. You need an accountable system partner.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button variant="white" size="xl">
                        Book Strategic Consultation
                    </Button>
                    <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                        Talk to an Architect
                    </Button>
                </div>
            </div>
        </section>
    );
};
