import React, { FC } from 'react';
// @ts-ignore
import styles from './NotFoudBlock.module.scss';

const NotFoundBlock: FC = () => {
  return (
      <h1 className={styles.root}>
        <span>
          :(
        </span>
        <br />
        Nothing found!
      </h1>
  )
}

export default NotFoundBlock;