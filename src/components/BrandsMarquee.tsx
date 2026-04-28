const brands = [
  "Glamira", "Jiifto", "Zevrik", "Johareez", "Domino Style",
  "Gigi Boutique", "Spirit Fashion", "Boutique Chic",
];

const BrandsMarquee = () => {
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Brands We've Scaled
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-xl font-semibold text-muted-foreground/80 transition-colors hover:text-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
