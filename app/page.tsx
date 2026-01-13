import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner2.jpg"
            alt="School Banner"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-slate-800/80"></div>
          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-sm text-white font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Admissions Open 2026-2027
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Harsh Academy
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-blue-100 mb-8 font-light max-w-4xl mx-auto animate-fade-in-up animate-delay-200 leading-relaxed">
            Empowering minds, building futures through excellence in education
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-300">
            <a
              href="/admission"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>Enroll Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Discover More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-8 justify-center text-white/80 text-sm animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>15+ Years Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Qualified Teachers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Modern Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover what makes Harsh Academy the perfect choice for your child's educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Modern Curriculum
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Comprehensive education from Nursery to Class VIII with a focus on holistic development and practical learning
                </p>
                <a href="/academics" className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Explore Programs
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Expert Faculty
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Dedicated and qualified teachers committed to nurturing each student's potential and fostering academic excellence
                </p>
                <a href="/about" className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  Meet Our Team
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                  Safe Environment
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Secure campus with modern facilities ensuring a safe, nurturing environment for holistic student development
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                  Visit Campus
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Design */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-xl text-blue-200">Building excellence, one student at a time</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">15+</div>
                <div className="text-blue-200 font-medium">Years of Excellence</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">500+</div>
                <div className="text-blue-200 font-medium">Happy Students</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">30+</div>
                <div className="text-blue-200 font-medium">Expert Teachers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">100%</div>
                <div className="text-blue-200 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center text-white">
              <span className="inline-block bg-white/20 backdrop-blur-md rounded-full px-6 py-2 text-sm font-semibold mb-6">
                Limited Seats Available
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Begin Your Child's Success Story Today
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of families who trust Harsh Academy for quality education and holistic development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/admission"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Start Application</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Schedule Visit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
