import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import AddButton from '../../components/AddButton';

import './styles.scss';

const Home = () => {

  const { theme } = useContext(ThemeContext);

  // const [lists, setLists] = useState({});

  // useEffect(() => {
    // const previousLists = localStorage.getItem('lists');

    // if (previousLists !== null) {
    //   setLists(previousLists);
    // };
  // }, []);

  return (
    <div className={theme === 'light' ? 'home light' : 'home dark'}>

      <h1 className='home--title'>
        Ma liste de procrastination
      </h1>

      <AddButton />

      <section className='home--container'>
        {/* {lists} */}
      </section>

    </div>
  );
};

export default Home;