import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/content';

const filters = ['All', 'Beginner', 'Intermediate', 'Freelance', 'Ethics', 'Clinical Research', 'Editing'];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = courses.filter((c) =>
    activeFilter === 'All' ? true : c.category.includes(activeFilter)
  );

  return (
    <main>
      <PageHero
        title="Learning Modules"
        subtitle="Structured learning for every stage of your medical writing career"
        breadcrumb={[{ label: 'Courses' }]}
        bgImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=90&auto=format&fit=crop"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === f ? 'bg-emerald-800 text-white shadow-sm' : 'bg-emerald-50 text-gray-600 border border-emerald-200 hover:border-emerald-400 hover:text-emerald-800'}`}
              >
                {f}
                {activeFilter !== 'All' && activeFilter === f && (
                  <span className="ml-2 bg-white/20 rounded-full px-1.5 py-0.5 text-xs">{filtered.length}</span>
                )}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">📚</div>
              <p className="text-lg">No courses in this category yet.</p>
              <button onClick={() => setActiveFilter('All')} className="mt-4 text-emerald-700 hover:text-emerald-900 font-medium">
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-emerald-50 py-16 border-t border-emerald-100">
        <div className="container-max text-center">
          <p className="text-gray-700 text-lg mb-4 font-medium">Not sure which course to start with?</p>
          <Link to="/pathways" className="inline-flex items-center gap-2 text-emerald-800 font-bold text-lg hover:text-emerald-600 transition-colors">
            View Recommended Learning Pathways <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
