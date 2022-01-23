import React from 'react';
import styles from '../../styles/PageHeader.module.css';

type Props = {
  title: string,
};

const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <h1
      className={styles.title}
    >{title}</h1>
  );
}

export default PageHeader;