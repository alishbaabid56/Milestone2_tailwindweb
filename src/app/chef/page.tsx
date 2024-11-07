import Image from "next/image";

const ChefSection = () => {
  const chefs = [
    {
      id: 1,
      name: 'Chef Marco Rossi',
      description: 'Chef Marco specializes in Italian cuisine, bringing authenticity and rich flavors to every dish. His passion for fresh ingredients defines his style.',
      imageUrl: '/images/cheaf.png',
    },
    {
      id: 2,
      name: 'Chef Aisha Khan',
      description: 'With a talent for fusion dishes, Chef Aisha combines traditional and modern techniques to create unforgettable culinary experiences.',
      imageUrl: '/images/cheaf1.png',
    },
    {
      id: 3,
      name: 'Chef James Sullivan',
      description: 'Known for his dedication to French cuisine, Chef James has mastered classic techniques and adds a creative twist to every plate.',
      imageUrl: '/images/chef1.png',
    },
  ];

  return (
    <section className="py-12 px-5">
      <h2 className="text-center text-4xl mb-10 text-orange-500">Meet Our Chefs</h2>
      <div className="flex flex-col sm:flex-row justify-center items-start gap-8">
        {chefs.map((chef) => (
          <div key={chef.id} className="flex flex-col bg-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 w-full sm:w-80 md:w-72 lg:w-80">
            <div className="border-b-4 border-orange-400">
              <Image
                src={chef.imageUrl}
                alt={chef.name}
                width={300}
                height={300}
                className="w-full h-72 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-5 flex-grow">
              <h3 className="text-2xl text-gray-800 mb-2">{chef.name}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{chef.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefSection