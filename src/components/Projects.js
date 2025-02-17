import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <ul>
        <li><strong>SIGN LANGUAGE RECOGNITION</strong>
        <p>
           • This project, Sign language recognition is commonly used by the physically impaired people who cannot speakand hear.
             Sign language can assist people with hearing impairments and be used as a framework to build machine learning models
             that transcribes Sign Language into written language by recognizing alphabet letters from ASL gestures
             The result forrthe project will be a real-time interface so that signers can easily and quickly communicate withnon-
             signers using alphabet letters from ASL hand signals.
             Tech Stack – Python,IDE,CV2,Keras,Tensor flow,numpy</p></li>
        <li><strong>PHISHING WEBSITE PREDICTION</strong>
          <p>
        • Developed a model to predict whether a website is phishing or legitimate
        GUI is developed to take the input URL and to show the legitimacy of the website in the form of percentage.
        Gradient Boosting Classifier is used to train and test the machine.
        Python modules like Ipaddress, re, whois, beautiful soup, socket is imported in this project.
        The project means to investigate his region by indicating a utilization instance of recognizing phishing sites
        utilizing ML. It aimed to build a phishing prediction mechanism using machine learning tools and techniques
        which is efficient, accurate and cost effective. The project was carried out in Anaconda IDE and was written in
        Python. Accuracy obtained for the model is approx. 97%.
        Tech Stack: Python, Machine Learning, CSS, HTML.</p>
        </li>
        
      </ul>
    </section>
  );
};

export default Projects;