import HeroBanner from '../components/HeroBanner';

export default function Home() {
  return (
    <div className="pt-16"> {/* Add padding-top equal to navbar height */}
      <HeroBanner />
      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p>Providing gentle, modern, and high-quality dental care for your whole family.</p>
      </section>
    </div>
  );
}