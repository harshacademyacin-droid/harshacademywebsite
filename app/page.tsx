import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner2.jpg"
            alt="School Banner"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
            HARSH ACADEMY
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 animate-scale-in animate-delay-200"></div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in-up animate-delay-300">
            WHAT WE STAND FOR
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed font-light max-w-4xl mx-auto animate-fade-in-up animate-delay-400">
            &quot;Our mission is to develop the intellectual, emotional and
            moral capacities of students by promoting human values, mutual respect
            and a commitment to lifelong learning.&quot;
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-500">
            <a
              href="/admission"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a
              href="/about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            Welcome to Harsh Academy
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            We are committed to providing quality education that nurtures
            intellectual growth, moral values, and lifelong learning. Our
            experienced faculty and structured curriculum ensure that every
            student receives the guidance they need to succeed.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4 animate-fade-in-up">
            Why Choose Us
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg animate-fade-in-up animate-delay-200">
            Discover what makes Harsh Academy the right choice for your child
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-yellow-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-yellow-500 hover-lift relative overflow-hidden animate-fade-in-up animate-delay-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-20 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 animate-bounce-in animate-delay-400">🎓</div>
                <h4 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  Admissions Open
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Enroll your child for the 2026-2027 session. Limited seats
                  available for quality education.
                </p>
                <a
                  href="/admission"
                  className="inline-flex items-center text-blue-600 hover:text-yellow-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-green-500 hover-lift relative overflow-hidden animate-fade-in-up animate-delay-400">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full opacity-20 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 animate-bounce-in animate-delay-500">📚</div>
                <h4 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-green-600 transition-colors">
                  Our Curriculum
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From Nursery to Class VIII, we offer a balanced and
                  comprehensive academic program.
                </p>
                <a
                  href="/academics"
                  className="inline-flex items-center text-blue-600 hover:text-green-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Explore Academics
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-blue-500 hover-lift relative overflow-hidden animate-fade-in-up animate-delay-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4 animate-bounce-in animate-delay-600">💬</div>
                <h4 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Get in Touch
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Have questions? We&apos;re here to help. Contact us today and
                  we&apos;ll respond promptly.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all"
                >
                  Contact Us
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Our Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group animate-scale-in animate-delay-100">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift hover-glow transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-blue-100 text-sm md:text-base">Years of Excellence</div>
              </div>
            </div>
            <div className="text-center group animate-scale-in animate-delay-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift hover-glow transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-blue-100 text-sm md:text-base">Happy Students</div>
              </div>
            </div>
            <div className="text-center group animate-scale-in animate-delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift hover-glow transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">30+</div>
                <div className="text-blue-100 text-sm md:text-base">Qualified Teachers</div>
              </div>
            </div>
            <div className="text-center group animate-scale-in animate-delay-400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift hover-glow transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-blue-100 text-sm md:text-base">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzFkNGVkOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block animate-bounce-in">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Admissions Open for 2026-2027
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-fade-in-up gradient-text">
            Ready to Start Your Child&apos;s Journey?
          </h3>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up animate-delay-200 max-w-3xl mx-auto">
            Join Harsh Academy and give your child the gift of quality education in a nurturing environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <a
              href="/admission"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl relative overflow-hidden"
            >
              <span className="relative z-10">Apply for Admission</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <span>Contact Us</span>
              <span className="ml-2">📞</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
