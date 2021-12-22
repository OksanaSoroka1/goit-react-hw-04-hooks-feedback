import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}> {title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export { Section };
