import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../App.css";

const Home = () => {
  const handlePetCategoryClick = (category) => {
    window.location.href = `/pets?category=${category.toLowerCase()}`;
  };

  const petCategories = [
    {
      id: 'dogs',
      emoji: '🐶',
      title: 'Find Dogs',
      description: 'Discover loyal and loving canine companions',
      gradient: 'from-amber-400 to-orange-500',
      hoverGradient: 'hover:from-amber-500 hover:to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'cats',
      emoji: '🐱',
      title: 'Find Cats',
      description: 'Meet independent and affectionate feline friends',
      gradient: 'from-purple-400 to-pink-500',
      hoverGradient: 'hover:from-purple-500 hover:to-pink-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'others',
      emoji: '🐰',
      title: 'Other Pets',
      description: 'Explore rabbits, birds, and other amazing pets',
      gradient: 'from-green-400 to-teal-500',
      hoverGradient: 'hover:from-green-500 hover:to-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Loving Homes",
      description: "Connect pets with caring families",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Verified Listings",
      description: "All pets are verified and safe",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quick Process",
      description: "Fast and easy adoption process",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <div className="animate-fade-in mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-6 leading-tight">
              PetFinder
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
            Find your perfect companion! Connect with loving pets looking for their 
            <span className="font-semibold text-purple-600"> forever homes</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-up delay-200">
            <Link
              to="/pets"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Browse All Pets
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/addpet"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Add a Pet
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pet Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our curated categories to find your ideal pet companion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {petCategories.map((category, index) => (
            <div 
              key={category.id}
              className={`animate-fade-in-up delay-${150 * (index + 1)}`}
            >
              <button
                onClick={() => handlePetCategoryClick(category.id)}
                className={`group relative overflow-hidden ${category.bgColor} rounded-3xl shadow-lg hover:shadow-2xl p-8 text-left transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 w-full h-full`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                    {category.emoji}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${category.gradient} text-white font-semibold text-sm transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                    Explore Now
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose PetFinder?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to making pet adoption simple, safe, and rewarding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`text-center group animate-fade-in-up delay-${150 * (index + 1)}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your New Best Friend?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of happy pets and owners who found each other through PetFinder
          </p>
          <Link
            to="/pets"
            className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Browsing Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;