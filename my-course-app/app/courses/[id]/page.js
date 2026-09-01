'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Nav from '../../Nav';
import { coursesData } from '../page';
import styles from '../courses.module.css';

export default function CourseDetailPage({ params }) {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);

  useEffect(() => {
    const courseId = parseInt(resolvedParams.id);
    const foundCourse = coursesData.find(c => c.id === courseId);
    setCourse(foundCourse);
    setLoading(false);
  }, [resolvedParams.id]);

  const getDifficultyClass = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return styles.difficultyBeginner;
      case 'Intermediate': return styles.difficultyIntermediate;
      case 'Expert': return styles.difficultyExpert;
      default: return '';
    }
  };

  const handleLessonClick = (lessonId) => {
    router.push(`/courses/${course.id}/lesson/${lessonId}`);
  };

  const handleBackClick = () => {
    router.push('/courses');
  };

  if (loading) {
    return (
      <>
        <Nav />
        <div className={styles.coursesPage}>
          <div style={{ color: '#fff', textAlign: 'center', paddingTop: '2rem' }}>
            Loading course...
          </div>
        </div>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Nav />
        <div className={styles.coursesPage}>
          <div style={{ color: '#fff', textAlign: 'center', paddingTop: '2rem' }}>
            <h2>Course not found</h2>
            <button 
              onClick={handleBackClick}
              style={{ 
                background: '#62ff00', 
                color: '#000', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Back to Courses
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className={styles.coursesPage}>
        <div className={styles.courseDetailHeader}>
          <button 
            onClick={handleBackClick}
            className={styles.backButton}
          >
            ← Back to Courses
          </button>
          
          <div className={styles.courseDetailInfo}>
            <div className={styles.headerRow}>
              <span className={`${styles.difficultyIndicator} ${getDifficultyClass(course.difficulty)}`}>
                {course.difficulty}
              </span>
              <span className={styles.courseType}>
                {course.courseType}
              </span>
            </div>
            
            <h1 className={styles.courseDetailTitle}>{course.title}</h1>
            <p className={styles.courseDetailDescription}>{course.description}</p>
            
            <div className={styles.courseMeta}>
              <div className={styles.priceContainer}>
                <div className={styles.oldPrice}>{course.oldPrice}</div>
                <div className={styles.currentPrice}>{course.currentPrice}</div>
              </div>
              
              {course.lessons && course.lessons.length > 0 && (
                <div className={styles.lessonCount}>
                  {course.lessons.length} lessons • {course.lessons.reduce((total, lesson) => total + parseInt(lesson.duration), 0)} min total
                </div>
              )}
            </div>
          </div>
        </div>

        {course.lessons && course.lessons.length > 0 ? (
          <div className={styles.lessonsContainer}>
            <h2 className={styles.lessonsTitle}>Course Lessons</h2>
            <div className={styles.lessonsList}>
              {course.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className={styles.lessonItem}
                  onClick={() => handleLessonClick(lesson.id)}
                >
                  <div className={styles.lessonNumber}>{index + 1}</div>
                  <div className={styles.lessonContent}>
                    <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                    <p className={styles.lessonDescription}>{lesson.description}</p>
                    <div className={styles.lessonMeta}>
                      <span className={styles.lessonDuration}>{lesson.duration}</span>
                      {lesson.completed && <span className={styles.completedBadge}>✓ Completed</span>}
                    </div>
                  </div>
                  <div className={styles.playButton}>▶</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.noLessons}>
            <h2>Coming Soon</h2>
            <p>Lessons for this course are currently being prepared.</p>
          </div>
        )}
      </div>
    </>
  );
}
