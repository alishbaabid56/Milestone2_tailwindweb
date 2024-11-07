import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 text-center mt-10">
      <div className="flex flex-wrap justify-around gap-10 px-5">
        <div className="flex-1 min-w-[200px] space-y-2">
          <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
          <p>123 Restaurant Street</p>
          <p>City, State, ZIP</p>
          <p>Email: info@restaurant.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="flex-1 min-w-[200px] space-y-2">
          <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Facebook</a>
          <br></br>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Twitter</a>
          <br></br>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Instagram</a>

        </div>

        <div className="flex-1 min-w-[200px] space-y-2">
          <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
          <Link href="/" className="text-yellow-500 hover:underline">Home</Link>
          <br></br>
          <Link href="/about" className="text-yellow-500 hover:underline">About</Link>
          <br></br>
          <Link href="/menu" className="text-yellow-500 hover:underline">Menu</Link>
          <br></br>
          <Link href="/book" className="text-yellow-500 hover:underline">Book Your Seat</Link>
        </div>
      </div>

      <div className="bg-gray-900 py-2 mt-5">
        <p>&copy; {new Date().getFullYear()} Restaurant Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;