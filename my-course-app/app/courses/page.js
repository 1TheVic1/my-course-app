'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Nav from '../Nav';
import styles from './courses.module.css';

const coursesData = [
  {
    id: 1,
    title: "HTML Fundamentals",
    description: "Learn the building blocks of web development with HTML. Master semantic markup, forms, and modern HTML5 features.",
    courseType: "HTML",
    difficulty: "Beginner",
    currentPrice: "R299",
    oldPrice: "R599",
    image: "/placeholder-html.jpg",
    lessons: [
      {
        id: 1,
        title: "Introduction to HTML",
        description: "Welcome to HTML! Learn what HTML is, its history, and why it's essential for web development.",
        duration: "15 min",
        completed: false,
        videoUrl: "/videos/html-intro.mp4"
      },
      {
        id: 2,
        title: "HTML Document Structure",
        description: "Understand the basic structure of HTML documents including DOCTYPE, html, head, and body elements.",
        duration: "20 min",
        completed: false,
        videoUrl: "/videos/html-structure.mp4"
      },
      {
        id: 3,
        title: "Common HTML Tags and Elements",
        description: "Master essential HTML tags like headings, paragraphs, links, images, and lists for content creation.",
        duration: "25 min",
        completed: false,
        videoUrl: "/videos/html-tags.mp4"
      },
      {
        id: 4,
        title: "HTML Forms and Input Elements",
        description: "Create interactive forms with various input types, labels, and form validation techniques.",
        duration: "30 min",
        completed: false,
        videoUrl: "/videos/html-forms.mp4"
      },
      {
        id: 5,
        title: "Semantic HTML and Best Practices",
        description: "Learn semantic HTML elements like article, section, nav, and header for better accessibility and SEO.",
        duration: "22 min",
        completed: false,
        videoUrl: "/videos/html-semantic.mp4"
      }
    ]
  },
  {
    id: 2,
    title: "CSS Mastery Course",
    description: "From basic styling to advanced CSS Grid and Flexbox. Create stunning responsive websites with modern CSS techniques.",
    courseType: "CSS",
    difficulty: "Intermediate",
    currentPrice: "R399",
    oldPrice: "R799",
    image: "/placeholder-css.jpg",
    lessons: []
  },
  {
    id: 3,
    title: "Advanced CSS Animations",
    description: "Master CSS transitions, keyframes, and complex animations. Bring your websites to life with smooth, professional effects.",
    courseType: "CSS",
    difficulty: "Expert",
    currentPrice: "R599",
    oldPrice: "R999",
    image: "/placeholder-css-advanced.jpg",
    lessons: []
  },
  {
    id: 4,
    title: "Google Sheets Mastery",
    description: "Become a Google Sheets power user. Learn formulas, pivot tables, data analysis, and automation with Google Apps Script.",
    courseType: "Google Sheets",
    difficulty: "Intermediate",
    currentPrice: "R349",
    oldPrice: "R699",
    image: "/placeholder-google-sheets.jpg",
    lessons: []
  },
  {
    id: 5,
    title: "Microsoft Excel Complete",
    description: "Master Excel from basics to advanced. Data analysis, VBA programming, complex formulas, and business intelligence.",
    courseType: "Microsoft Excel",
    difficulty: "Expert",
    currentPrice: "R699",
    oldPrice: "R1299",
    image: "/placeholder-excel.jpg",
    lessons: []
  },
  {
    id: 6,
    title: "JavaScript for Beginners",
    description: "Start your programming journey with JavaScript. Learn variables, functions, DOM manipulation, and modern ES6+ features.",
    courseType: "JavaScript",
    difficulty: "Beginner",
    currentPrice: "R449",
    oldPrice: "R899",
    image: "/placeholder-javascript.jpg",
    lessons: []
  },
  {
    id: 7,
    title: "React Development",
    description: "Build dynamic web applications with React. Learn components, hooks, state management, and modern development practices.",
    courseType: "JavaScript",
    difficulty: "Intermediate",
    currentPrice: "R799",
    oldPrice: "R1499",
    image: "/placeholder-react.jpg",
    lessons: []
  },
  {
    id: 8,
    title: "Python Data Analysis",
    description: "Use Python for data science. Master pandas, NumPy, matplotlib, and statistical analysis for business insights.",
    courseType: "Python",
    difficulty: "Intermediate",
    currentPrice: "R599",
    oldPrice: "R1199",
    image: "/placeholder-python.jpg",
    lessons: []
  },
  {
    id: 9,
    title: "Database Design with SQL",
    description: "Learn database fundamentals, SQL queries, normalization, and database optimization. Essential for backend development.",
    courseType: "Database",
    difficulty: "Beginner",
    currentPrice: "R499",
    oldPrice: "R999",
    image: "/placeholder-sql.jpg",
    lessons: []
  },
  {
    id: 10,
    title: "Spreadsheet Automation",
    description: "Automate Excel and Google Sheets workflows. Learn macros, VBA, Google Apps Script, and advanced spreadsheet techniques.",
    courseType: "Microsoft Excel",
    difficulty: "Expert",
    currentPrice: "R649",
    oldPrice: "R1299",
    image: "/placeholder-automation.jpg",
    lessons: []
  }
];

export default function CoursesPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  // Get unique course types for dropdown
  const courseTypes = useMemo(() => {
    const types = [...new Set(coursesData.map(course => course.courseType))];
    return types.sort();
  }, []);

  // Filter courses based on search criteria
  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = searchTerm === '' || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.courseType.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === '' || course.courseType === selectedType;
      const matchesDifficulty = selectedDifficulty === '' || course.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesType && matchesDifficulty;
    });
  }, [searchTerm, selectedType, selectedDifficulty]);

  // Get difficulty CSS class
  const getDifficultyClass = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return styles.difficultyBeginner;
      case 'Intermediate': return styles.difficultyIntermediate;
      case 'Expert': return styles.difficultyExpert;
      default: return '';
    }
  };

  // Handle course click
  const handleCourseClick = (courseId) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <>
      <Nav />
      <div className={styles.coursesPage}>
        <div className={styles.coursesHeader}>
          <h1 className={styles.pageTitle}>Courses</h1>
          <p className={styles.pageDescription}>
            Enhance your IT skills with our comprehensive range of technology courses. From web development fundamentals to advanced data analysis, master the tools and technologies that power the digital world.
          </p>
        </div>

        <div className={styles.searchControls}>
          <div className={styles.searchInput}>
            <div className={styles.searchInputContainer}>
              <div className={styles.searchIcon}></div>
              <input
                type="text"
                placeholder="Search Courses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.textSearch}
              />
            </div>
          </div>
          
          <div className={styles.dropdownContainer}>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className={styles.dropdown}
            >
              <option value="">All</option>
              {courseTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.dropdownContainer}>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className={styles.dropdown}
            >
              <option value="">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <div className={styles.coursesGrid}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div 
                key={course.id} 
                className={`${styles.block} ${styles.featureBlock} ${styles.courseCard}`}
                data-block={((index % 3) + 1).toString()}
                onClick={() => handleCourseClick(course.id)}
              >
                <div className={styles.courseImage}></div>
                
                <div className={styles.headerRow}>
                  <span className={`${styles.difficultyIndicator} ${getDifficultyClass(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                  <span className={styles.courseType}>
                    {course.courseType}
                  </span>
                </div>
                
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
                
                {/* Show lesson count if available */}
                {course.lessons && course.lessons.length > 0 && (
                  <div className={styles.lessonCount}>
                    {course.lessons.length} lessons • {course.lessons.reduce((total, lesson) => total + parseInt(lesson.duration), 0)} min total
                  </div>
                )}
                
                <div className={styles.priceContainer}>
                  <div className={styles.oldPrice}>{course.oldPrice}</div>
                  <div className={styles.currentPrice}>{course.currentPrice}</div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No courses found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Export coursesData for use in other components
export { coursesData };