// export default Hero
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background image */}
      <Image
        src="/Rectangle.jpg"
        alt="hero_image_of_softwarica"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay for readability (like the reference site) */}
      <div className="absolute inset-0 bg-black/35" />

      {/* (Optional) Hero content area — keep empty for now */}
      <div className="absolute inset-0 flex items-end p-6">
        {/* add buttons/text here later if you want */}
      </div>
    </section>
  );
}
