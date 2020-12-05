/*
import styles from './style.css' will never work even with CRA (it was tested and the styling was not applied).
To properly import the styling it would have to be imported either as:
a) import './style.css'
b) import styleModule from './styles.module.css';
*/

//import styles from './style.css'
//import './style.css'

import styleModule from './styles.module.css';

export default function ExampleComponent() {
  return (
    <>
      <h3>I'm a component with custom styles</h3>
      {/* <div className={styles.customButton}>
        <h4>I'm inside the local styled component</h4>
      </div> */}
       {/* <div className='customButton'>
        <h4>I'm inside the local styled component</h4>
      </div> */}
      <div className={styleModule.customButton}>
        <h4>I'm inside the local module styled component</h4>
      </div>
    </>
  );
}
