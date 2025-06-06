import css from './homePage.module.css';
import { Helmet } from 'react-helmet';
export default function HomePage() {
    return (
      <>
       <Helmet>
  <title>Welcome</title>
</Helmet>
        <div className={css.container}>
          <h1 className={css.title}>
            Task manager welcome page{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </h1>
        </div>
      </>
    );
  }