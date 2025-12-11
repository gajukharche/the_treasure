export const authors = [
    "Brian Tracy", "Dale Carnegie", "Napoleon Hill", "Stephen Covey", "Wayne Dyer",
    "Jack Canfield", "John C. Maxwell", "Robert Kiyosaki", "Earl Nightingale", "Og Mandino",
    "Norman Vincent Peale", "Deepak Chopra", "Eckhart Tolle", "Brene Brown", "Simon Sinek",
    "Malcolm Gladwell", "Tim Ferriss", "Gary Vaynerchuk", "Mel Robbins", "David Goggins",
    "Robin Sharma", "Paulo Coelho", "Maya Angelou", "Oprah Winfrey", "Steve Jobs",
    "Elon Musk", "Richard Branson", "Warren Buffett", "Bill Gates", "Mark Cuban",
    "Jeff Bezos", "Sheryl Sandberg", "Michelle Obama", "Indra Nooyi", "Arianna Huffington",
    "Suze Orman", "Dave Ramsey", "Grant Cardone", "Daymond John", "Barbara Corcoran",
    "Kevin O'Leary", "Lori Greiner", "Robert Herjavec", "Mark Zuckerberg", "Satya Nadella",
    "Sundar Pichai", "Tim Cook", "Jensen Huang", "Lisa Su", "Ginni Rometty",
    "Mary Barra", "Ursula Burns", "Rosalind Brewer", "Thasunda Brown Duckett", "Ophelia Dahl",
    "Angela Duckworth", "Carol Dweck", "Adam Grant", "Daniel Pink", "Seth Godin",
    "James Clear", "Ryan Holiday", "Mark Manson", "Gretchen Rubin", "Elizabeth Gilbert",
    "Cheryl Strayed", "Glennon Doyle", "Abby Wambach", "Megan Rapinoe", "Serena Williams",
    "Venus Williams", "Simone Biles", "Michael Jordan", "Kobe Bryant", "LeBron James",
    "Tom Brady", "Cristiano Ronaldo", "Lionel Messi", "Usain Bolt", "Michael Phelps",
    "Tiger Woods", "Roger Federer", "Rafael Nadal", "Novak Djokovic", "Lewis Hamilton",
    "Max Verstappen", "Toto Wolff", "Christian Horner", "Niki Lauda", "Ayrton Senna",
    "Michael Schumacher", "Alain Prost", "Jackie Stewart", "Stirling Moss", "Juan Manuel Fangio",
    "Jim Clark", "Graham Hill", "Emerson Fittipaldi", "Nelson Piquet", "Nigel Mansell"
];

export const quotesPool = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Strive not to be a success, but rather to be of value.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It is during our darkest moments that we must focus to see the light.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You miss 100% of the shots you don't take.",
    "Whether you think you can or you think you can't, you're right.",
    "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The best way to predict the future is to invent it."
];

export const booksPool = [
    "The Path to Success", "Mastering Your Mind", "The Art of Living", "Wealth and Wisdom",
    "Leadership 101", "The Power of Habit", "Thinking Fast and Slow", "Principles",
    "Zero to One", "The Lean Startup"
];

export function getAllAuthors() {
    return authors.map(name => {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        // Check for specific images
        let image = '/img/placeholder.png';
        if (['jim-rohn', 'zig-ziglar', 'les-brown', 'anthony-robbins', 'dennis-waitley'].includes(slug)) {
             image = `/img/${slug}.png`;
             // Fix for denis waitley typo in image name if needed, but keeping consistent with file copy
             if(slug === 'denis-waitley') image = '/img/dennis-waitley.png'; 
        }

        return {
            name,
            slug,
            image,
            initials: name.split(' ').map(n => n[0]).join(''),
            bio: `${name} is a renowned figure in the world of personal development and success. Their work has inspired millions to achieve their full potential and live a life of purpose.`,
            books: [
                booksPool[Math.floor(Math.random() * booksPool.length)],
                booksPool[Math.floor(Math.random() * booksPool.length)],
                booksPool[Math.floor(Math.random() * booksPool.length)]
            ],
            quotes: [
                quotesPool[Math.floor(Math.random() * quotesPool.length)],
                quotesPool[Math.floor(Math.random() * quotesPool.length)],
                quotesPool[Math.floor(Math.random() * quotesPool.length)],
                quotesPool[Math.floor(Math.random() * quotesPool.length)],
                quotesPool[Math.floor(Math.random() * quotesPool.length)]
            ]
        };
    });
}

export function getAuthorBySlug(slug) {
    const allAuthors = getAllAuthors();
    return allAuthors.find(author => author.slug === slug);
}
