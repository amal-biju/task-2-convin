import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import styles from '../Styles/Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}> 
            <ClipLoader color="blue"/>
        </div>
    )
}

export default Loader
