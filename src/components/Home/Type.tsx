import Typewriter from 'typewriter-effect';

const Type = () => (
  <Typewriter
    options={{
      strings: ['Senior Full Stack Developer', 'SEO Expert', 'Continuously Learning'],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
);

export default Type;
