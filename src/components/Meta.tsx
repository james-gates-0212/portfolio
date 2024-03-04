import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Meta = (props) => {
  const { title, description, noIndex } = props;
  const location = useLocation();
  const metaUrl = [process.env.PUBLIC_URL, location.pathname].filter(Boolean).join('');
  const metaTitle = ['James Gates', title].filter(Boolean).join(' | ');
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta itemProp="name" content={metaTitle} />
      <meta property="og:title" content={metaTitle} />
      <meta name="twitter:title" content={metaTitle} />
      {Boolean(description) && <meta name="description" content={description} />}
      {Boolean(description) && <meta itemProp="description" content={description} />}
      {Boolean(description) && <meta property="og:description" content={description} />}
      {Boolean(description) && <meta name="twitter:description" content={description} />}
      <meta name="google-site-verification" content="OzjiYMkBNq55LQ6amr_RsMRYaiKwmHWBavwcFZ7e1dI" />
      <link rel="canonical" href={metaUrl} />
      <meta property="og:url" content={metaUrl} />
      {Boolean(noIndex) && <meta name="robots" content="noindex" />}
      {Boolean(noIndex) && <meta name="googlebot" content="noindex" />}
      {!noIndex && <meta name="robots" content="index,follow" />}
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'A Passionate Developer',
  description:
    'A Passionate Full Stack Developer with 5+ years of experience in blending the art of design with skill of programming to maintain and optimize for performance of website.',
  noIndex: false,
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  noIndex: PropTypes.bool,
};

export default Meta;
