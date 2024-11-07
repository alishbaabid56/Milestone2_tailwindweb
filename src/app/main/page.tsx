function MainPage() {
    return (
      <div
        className="relative w-full h-96 pt-20 bg-cover bg-center bg-no-repeat text-center text-orange-500 overflow-hidden flex items-center justify-center "
        style={{ backgroundImage: "url('/images/home4.png')" }}
      >
        <div>
          <h1 className="text-3xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-2xl mb-5 mx-5">
            Welcome to Our Restaurant
          </h1>
          <p className="text-lg lg:text-2xl md:text-xl sm:text-base xs:text-sm mx-5">
            Experience the finest dining in town!
          </p>
        </div>
      </div>
    );
  }
  
  export default MainPage;