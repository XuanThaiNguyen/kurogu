import React from 'react'
import styles from './page.module.css'
import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Page</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default Blog