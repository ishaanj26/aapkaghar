export default function SlideText() {
    return (
        <div className="overflow-hidden h-12 relative">
            <div className="absolute whitespace-nowrap animate-slide text-2xl">
                Your sliding text content goes here. Make it long enough to see the effect.
            </div>
        </div>
    );
}