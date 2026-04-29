import React from 'react';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'കുടുംബ ബജറ്റിനെ താളം തെറ്റിക്കാൻ അമിതമായ വൈദ്യുത ബില്ല് കാരണമാകുന്നുണ്ടോ?',
    excerpt: 'കുടുംബ ബജറ്റിനെ താളം തെറ്റിക്കാൻ അമിതമായ വൈദ്യുത ബില്ല് കാരണമാകുന്നുണ്ടോ? എങ്കിൽ വൈദ്യുത...',
    date: 'Jan 12, 2023',
    category: 'Solar',
    image: '/wp-content/uploads/2023/01/wegasolar-blog4-400x250.jpg'
  },
  {
    id: 2,
    title: 'വൈദ്യുത ബിൽ കുറയ്ക്കാനോ പൂജ്യം വരെ ആക്കാനോ മികച്ച പോംവഴി',
    excerpt: 'ജീവിത ബജറ്റിനെ താളം തെറ്റിക്കുന്ന വിധം വൈദ്യുത ബില്ലിന്റെ അമിത ഭാരം കാരണമാകുന്നുണ്ടോ?...',
    date: 'Jan 4, 2023',
    category: 'Solar',
    image: '/wp-content/uploads/2023/01/wegasolar-blog3-400x250.jpg'
  },
  {
    id: 3,
    title: 'വൈദ്യുതി തടസം ഇനി ഒരു ബുദ്ധിമുട്ടാകില്ല.',
    excerpt: 'ഇടയ്ക്കിടെയുള്ള കറന്റ് കട്ട് തലവേദനയാകുന്നുണ്ടോ? വൈദ്യുതി തടസം ഇനി ഒരു...',
    date: 'Dec 28, 2022',
    category: 'Solar',
    image: '/wp-content/uploads/2023/01/wegasolar-blog2-400x250.jpg'
  },
  {
    id: 4,
    title: 'ഇനി സോളാറിലൂടെ സമ്പാദിക്കാം',
    excerpt: 'ക്രമാതീതമായി ഉയരുന്ന വൈദ്യുതി ചെലവുകൾക്ക് ഇനി ഏകപരിഹാരം സോളാർ എനർജിയാണ്. കുറഞ്ഞ ചെലവിൽ...',
    date: 'Dec 19, 2022',
    category: 'Solar',
    image: '/wp-content/uploads/2022/12/blog-1-400x250.jpg'
  }
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/wp-content/uploads/2022/10/working-process-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Latest <span className="text-blue-500">Insights</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <span>Resources</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <div className="grid gap-12">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <article key={post.id} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[250px]"
                          />
                          <div className="absolute top-6 left-6">
                            <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8 md:p-12">
                          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-blue-500" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-blue-500" />
                              By Admin
                            </div>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-500 leading-relaxed mb-8">
                            {post.excerpt}
                          </p>
                          <button className="flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest group/btn">
                            Read Full Article
                            <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                    <p className="text-gray-400 font-bold">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center gap-4">
                <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all font-black">1</button>
                <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all font-black">2</button>
                <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-12 sticky top-32">
                {/* Search */}
                <div className="bg-gray-50 rounded-[2.5rem] p-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6">Search Blog</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type keywords..."
                      className="w-full bg-white rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                    <button className="absolute right-2 top-2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      <Search size={18} />
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-[2.5rem] p-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6">Categories</h3>
                  <div className="space-y-3">
                    {['Solar Power', 'Inverter Technology', 'Maintenance Tips', 'Eco Living', 'Industry News'].map((cat, i) => (
                      <button 
                        key={i} 
                        onClick={() => setSearchQuery(cat === searchQuery ? '' : cat)}
                        className={`flex items-center justify-between w-full group transition-all ${searchQuery === cat ? 'translate-x-2' : ''}`}
                      >
                        <span className={`font-bold transition-colors ${searchQuery === cat ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'}`}>{cat}</span>
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black transition-all ${searchQuery === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-400 group-hover:bg-blue-600 group-hover:text-white'}`}>{Math.floor(Math.random() * 10) + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-gray-50 rounded-[2.5rem] p-8">
                  <h3 className="text-xl font-black text-gray-900 mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Solar', 'Energy', 'Battery', 'Green', 'Future', 'Tech', 'Panels'].map((tag, i) => (
                      <span 
                        key={i} 
                        onClick={() => setSearchQuery(tag)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-pointer transition-all ${searchQuery === tag ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-blue-600 hover:text-white'}`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
