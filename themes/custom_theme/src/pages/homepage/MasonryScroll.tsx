import React, { useEffect, useRef, useState } from 'react';

const data = [
    { title: "Mobile First", text: "Responsive design that works perfectly on every device." },
    { title: "Future Ready", text: "Built for tomorrow's challenges today." },
    { title: "Research", text: "User research and analysis inform every decision." },
    { title: "Quality Assurance", text: "Rigorous testing ensures flawless delivery." },
    { title: "Scalability", text: "Built to handle massive growth without compromise." },
    { title: "Accessibility", text: "Inclusive experiences for all users." },
    { title: "Cloud Integration", text: "Scalable, secure cloud-first solutions." },
    { title: "Security", text: "Enterprise-grade defense built-in." },
    { title: "Performance", text: "Fast. Lean. Reliable." }
];

const cardsPerRowPerPage = 5;
const pages = 5;

export default function MasonryScroll() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const totalCards = pages * cardsPerRowPerPage * 2;
    const cards = Array.from({ length: totalCards }, (_, i) => data[i % data.length]);

    const goToPage = (index: number) => {
        const scrollLeft = index * window.innerWidth;
        scrollRef.current?.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        setCurrentPage(index);
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const newPage = Math.round(scrollLeft / window.innerWidth);
        if (newPage !== currentPage) setCurrentPage(newPage);
    };

    useEffect(() => {
        const wrapper = scrollRef.current;
        if (wrapper) {
            wrapper.addEventListener('scroll', handleScroll, { passive: true });
            return () => wrapper.removeEventListener('scroll', handleScroll);
        }
    }, [currentPage]);

    const renderCard = ({ title, text }: { title: string; text: string }) => (
        <div className="group relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-lg px-6 py-8 min-h-[200px] w-[280px] flex-shrink-0 hover:-translate-y-2 hover:scale-[1.02] transition-transform overflow-hidden cursor-pointer">

            {/* Angled Glimmer */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-[-150%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-80 rotate-12 group-hover:animate-shine" />
            </div>

            {/* Hover Icon */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-white/10 text-white/80 font-bold rounded-full flex items-center justify-center transition-transform z-10 group-hover:bg-white/30 group-hover:rotate-90">+</div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{text}</p>
            </div>
        </div>
    );



    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#0c0c0c] via-[#16213e] to-[#533483] text-white font-sans pt-[60px] pb-[120px] overflow-x-hidden">
            <div
                ref={scrollRef}
                className="scroll-smooth overflow-x-auto overflow-y-visible w-screen snap-x snap-mandatory whitespace-nowrap touch-pan-x scrollbar-hide"
            >
                <div className="flex flex-col gap-5 w-[500vw] min-h-[calc(100vh-180px)] py-5">
                    <div className="flex flex-nowrap gap-5 px-5">
                        {cards.slice(0, totalCards / 2).map((card, i) => (
                            <React.Fragment key={i}>{renderCard(card)}</React.Fragment>
                        ))}
                    </div>
                    <div className="flex flex-nowrap gap-5 px-5 ml-[150px]">
                        {cards.slice(totalCards / 2).map((card, i) => (
                            <React.Fragment key={i + totalCards / 2}>{renderCard(card)}</React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div
                className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                role="tablist"
                aria-label="Card sections navigation"
                aria-describedby="pagination-help"
            >
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all outline-none focus:outline-none ${currentPage === i
                            ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] relative before:absolute before:inset-[-4px] before:rounded-full before:border before:border-white/30 before:animate-pulse'
                            : 'bg-white/40 hover:bg-white/70 hover:scale-110 focus:scale-110'
                            }`}
                        data-page={i}
                        onClick={() => goToPage(i)}
                        role="tab"
                        aria-selected={currentPage === i}
                        aria-label={`Section ${i + 1} of ${pages}${currentPage === i ? ' (current)' : ''}`}
                        tabIndex={currentPage === i ? 0 : -1}
                    />
                ))}
            </div>

            <div id="pagination-help" className="sr-only">
                Use arrow keys to navigate between sections, Enter or Space to select, Home for first section, End for last section
            </div>
        </div>
    );
}

// export const layout = {
//     areaId: "content-custom",
//     sortOrder: 5,
// };