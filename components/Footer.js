export default function Footer() {
  return (
    <footer className="bg-secondary py-8 mt-16 text-center text-text">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} The Treasure. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
