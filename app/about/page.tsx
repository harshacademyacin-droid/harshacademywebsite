export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block text-blue-300 font-semibold mb-4 text-sm uppercase tracking-wider">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            About Harsh Academy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Building strong academic foundations with values, discipline, and excellence 
          </p>
        </div>
      </section>

      {/* Story Section */}
      {/* <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">Est. 2009</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                15+ Years of Educational Excellence
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Since our inception in 2009, Harsh Academy has been committed to providing quality education that goes beyond textbooks. We believe in nurturing well-rounded individuals who are prepared for the challenges of tomorrow.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our dedicated faculty, modern infrastructure, and proven teaching methodologies have helped hundreds of students achieve their academic goals while developing strong character and values.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">500+</div>
                <div className="text-slate-700 font-medium">Students Educated</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-4xl font-extrabold text-purple-600 mb-2">30+</div>
                <div className="text-slate-700 font-medium">Expert Teachers</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <div className="text-4xl font-extrabold text-green-600 mb-2">100%</div>
                <div className="text-slate-700 font-medium">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                <div className="text-4xl font-extrabold text-orange-600 mb-2">15+</div>
                <div className="text-slate-700 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision - Modern Cards */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Guiding principles that shape our approach to education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-32 -mt-32 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To develop the intellectual, emotional, and moral capacities of students by promoting human values, mutual respect, and a commitment to lifelong learning. We strive to create an environment where every child can discover their potential and grow into confident, responsible citizens.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full -mr-32 -mt-32 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Our Vision
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To be a center of educational excellence that empowers students to achieve their fullest potential while instilling strong values. We envision creating future leaders who are not only academically brilliant but also compassionate, ethical, and ready to make a positive impact on society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Excellence</h3>
              <p className="text-slate-600">Striving for the highest standards in education and character development</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Integrity</h3>
              <p className="text-slate-600">Fostering honesty, ethics, and moral responsibility in all our actions</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Respect</h3>
              <p className="text-slate-600">Valuing diversity and treating everyone with dignity and compassion</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation</h3>
              <p className="text-slate-600">Embracing modern teaching methods and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Be part of a legacy of excellence. Enroll your child today and give them the education they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admission"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Apply Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
