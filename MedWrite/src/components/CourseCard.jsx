import { Clock } from 'lucide-react';

export default function CourseCard({ course, compact = false }) {
  const handleEnroll = () => {
    alert(`Thank you for your interest in "${course.title}"!\n\nRegistration is opening soon. We will notify you when enrollment begins. Please use the Join Now button to stay updated.`);
  };

  const handleLearnMore = () => {
    alert(`${course.title}\n\n${course.description}\n\nSkills: ${course.skills.join(', ')}\n\nDuration: ${course.duration}\nLevel: ${course.level}\n\nFull course details will be available at launch.`);
  };

  const levelColors = {
    'Beginner': 'bg-blue-50 text-blue-700 border-blue-200',
    'Beginner–Intermediate': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Intermediate': 'bg-amber-50 text-amber-700 border-amber-200',
    'All Levels': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };
  const levelColor = levelColors[course.level] || 'bg-gray-50 text-gray-700 border-gray-200';

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Top accent stripe */}
      <div className="h-1 w-full bg-emerald-800 group-hover:bg-emerald-600 transition-colors" />

      <div className="p-6 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className={`badge border text-xs font-medium px-2.5 py-0.5 rounded-full ${levelColor}`}>
            {course.level}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            {course.duration}
          </span>
          {course.icon && (
            <span className="ml-auto text-2xl">{course.icon}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {course.description}
        </p>

        {/* Disclaimer note */}
        {course.disclaimer && (
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4">
            ⚠️ {course.disclaimer}
          </p>
        )}

        {/* Skill chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {course.skills.slice(0, compact ? 2 : 4).map((skill) => (
            <span key={skill} className="chip text-xs">
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleLearnMore}
            className="flex-1 py-2.5 px-4 text-sm font-medium text-emerald-800 border border-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Learn More
          </button>
          <button
            onClick={handleEnroll}
            className="flex-1 py-2.5 px-4 text-sm font-medium text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
