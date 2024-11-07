export default function Menu() {
    const dishes = [
      {
        name: 'Pasta Primavera',
        price: '$12.99',
        description: 'A delicious pasta with mixed vegetables.',
        image: '/images/pasta.png',
      },
      {
        name: 'Grilled Salmon',
        price: '$18.99',
        description: 'Freshly grilled salmon with a side of greens.',
        image: '/images/item2.png',
      },
      {
        name: 'Chocolate Lava Cake',
        price: '$6.99',
        description: 'Rich chocolate cake with a gooey center.',
        image: '/images/item3.png',
      },
      {
        name: 'Caesar Salad',
        price: '$8.99',
        description: 'Classic Caesar salad with a creamy dressing.',
        image: '/images/salad.png',
      },
      {
        name: 'Steak and Fries',
        price: '$22.99',
        description: 'Juicy steak served with crispy fries.',
        image: '/images/steak.png',
      },
      {
        name: 'Lemon Cheesecake',
        price: '$7.99',
        description: 'Tangy lemon cheesecake with a buttery crust.',
        image: '/images/lemon.png',
      },
    ];
  
    return (
      <div className="py-5 mt-20">
        <section className="text-center">
          <h2 className="text-5xl font-extrabold text-orange-500 mb-5 ">Our Menu</h2>
          <div className="flex flex-wrap justify-center ">
            {dishes.map((dish, index) => (
              <div
                key={index}
                className="m-4 w-60 border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
              >
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl text-orange-500 mb-2">{dish.name}</h3>
                  <p className="text-gray-700">{dish.description}</p>
                  <span className="block mt-2 font-bold text-orange-500">{dish.price}</span>
                  <button className="mt-3 py-2 px-4 bg-gray-800 text-orange-500 rounded-md hover:bg-red-500 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }