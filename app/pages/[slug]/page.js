import { getAuthorBySlug, getAllAuthors } from '@/lib/authors';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover opacity-30 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4 text-accent">{author.name}</h1>
          <p className="text-2xl font-light italic">"Success is not final, failure is not fatal."</p>
        </div>
      </div>

      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar / Profile */}
          <div className="md:col-span-4">
            <div className="bg-secondary rounded-xl overflow-hidden shadow-xl sticky top-24">
              <div className="relative h-96 w-full group cursor-zoom-in">
                <Image 
                    src={author.image} 
                    alt={author.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-accent mb-4">About the Author</h3>
                <ul className="space-y-2 text-text">
                    <li><strong>Full Name:</strong> {author.name}</li>
                    <li><strong>Focus:</strong> Leadership, Success</li>
                </ul>
                <hr className="border-gray-700 my-6" />
                <h4 className="text-lg font-bold text-heading mb-3">Best Books</h4>
                <ul className="space-y-2">
                    {author.books.map((book, i) => (
                        <li key={i} className="flex items-center text-text">
                            <span className="text-accent mr-2">📚</span> {book}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8">
            <div className="mb-12">
                <h2 className="text-3xl font-playfair font-bold text-heading mb-6 relative inline-block">
                    Biography
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent"></span>
                </h2>
                <p className="text-lg text-text leading-relaxed">
                    {author.bio}
                </p>
            </div>

            <div>
                <h2 className="text-3xl font-playfair font-bold text-heading mb-8 relative inline-block">
                    Wisdom & Quotes
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent"></span>
                </h2>
                <div className="grid gap-6">
                    {author.quotes.map((quote, i) => (
                        <div key={i} className="bg-secondary p-8 rounded-xl border-l-4 border-accent shadow-lg hover:translate-x-2 transition-transform duration-300">
                            <p className="text-xl italic text-heading font-playfair">"{quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
