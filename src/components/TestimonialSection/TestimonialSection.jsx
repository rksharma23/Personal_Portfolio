import styles from "./TestimonialSection.module.css";
import TestimonialCard from '../Cards/TestimonialCard'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.jpeg'
import client3 from '../../assets/client3.jpg'

function TestimonialSection() {
  const testimonials = [
    {
        descrition : "Working with Roshan was an absolute pleasure. Their MERN stack expertise transformed our idea into a fully functional and elegant web application. Highly recommended!", 
        name: "Dharmendra Goswami", 
        position: "Owner | KanakStudios", 
        image: client1
    },
    {
        descrition : "Roshan Sharma delivered exceptional work on our project. The attention to detail and clean code quality were outstanding. A true professional in web development.", 
        name: "Nisha Sharma", 
        position: "Freelancer", 
        image: client2
    },
    {
        descrition : "The responsiveness and performance of the application built by Roshan exceeded our expectations. Their problem-solving skills are top-notch.", 
        name: "Kailash Kumar", 
        position: "Owner | StudioKailash", 
        image: client3
    }
  ];

  return (
    <div className={styles.outerContainer} id="testimonials" >
      <h1 className={styles.heading}>Client Testimonials</h1>
      <span className={styles.tagLine}>
        What people are saying about my work and professionalism.
      </span>
      <div className={styles.innerContainer}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial.descrition}
            clientName={testimonial.name}
            clientPosition={testimonial.position}
            clientImage={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
