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
            You are wellcome it`s your phone book{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </h1>
        </div>
      </>
    );
  }