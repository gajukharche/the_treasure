import Hero from '@/components/Hero';
import AuthorCard from '@/components/AuthorCard';
import { getAllAuthors } from '@/lib/authors';

export default function Home() {
  const authors = getAllAuthors();

  return (
    <>
      <Hero />
      
      <section id="authors" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-playfair font-bold text-heading text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
          Featured Authors
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent transform translate-y-4 left-1/4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <div key={author.slug} className="h-full">
              <AuthorCard author={author} index={index} />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-secondary py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-playfair font-bold text-heading mb-8">About The Treasure</h2>
            <p className="text-xl text-text max-w-3xl mx-auto leading-relaxed">
                The Treasure is a curated collection of wisdom from the world's most influential motivational speakers, authors, and thought leaders. Our mission is to inspire, educate, and empower you to reach your full potential.
            </p>
        </div>
      </section>
    </>
  );
}
